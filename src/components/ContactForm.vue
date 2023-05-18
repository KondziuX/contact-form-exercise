<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
          clearable
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          label="Last Name"
          required
          clearable
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-email"
          v-model="email"
          :rules="emailRules"
          label="Contact e-mail"
          required
          clearable
        ></v-text-field>
        <!-- Select for selecting country -->
        <v-select
          v-model="country"
          :items="countries"
          item-text="name"
          item-value="alpha2Code"
          :rules="[(v) => !!v || 'field is required']"
          label="Purpose of the trip"
          return-object
          required
          append-icon="mdi-airplane-search"
          hide-no-data
          :loading="loading"
          clearable
        ></v-select>
        <!-- Begin of information about the selected country -->
        <div v-if="selectedCountry" style="display: flex">
          <div style="flex: 1">
            <p>
              <v-icon>mdi-city</v-icon> Capital: {{ selectedCountry.capital }}
            </p>
            <p>
              <v-icon>mdi-earth</v-icon> Country Name:
              {{ selectedCountry.name }}
            </p>
          </div>
          <div style="flex: 1">
            <p>
              <v-icon>mdi-account-group</v-icon> Population:
              {{ selectedCountry.population }}
            </p>
            <p>
              <v-icon>mdi-map-marker</v-icon> Region:
              {{ selectedCountry.region }}
            </p>
          </div>
        </div>
        
        
        <!-- End of information about the selected country -->
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="I agree to the terms and conditions"
          required
          hide-details
        ></v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="!valid" color="primary" @click="send" block>
          Send an inquiry
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <v-btn color="info" small text @click="reset" block> reset </v-btn>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      loading: false,
      valid: false,
      name: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name must be more than 2 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      country: null, // selected country
      countries: [], // list of available countries
      checkbox: false,
      selectedCountry: null, // information about the selected country
    };
  },
  created() {
    // Fetch the list of countries on component creation
    this.loading = true;
    this.getCountries()
      .then((countries) => {
        this.countries = countries;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    async getCountries() {
      // Fetch the list of countries from the API
      try {
        const url = "https://jsonmock.hackerrank.com/api/countries";
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    async getCountryInfo() {
      // Fetch detailed information about the selected country from the API
      if (this.country) {
        try {
          const url = `https://jsonmock.hackerrank.com/api/countries?alpha2Code=${this.country.alpha2Code}`;
          const response = await fetch(url);
          const data = await response.json();
          this.selectedCountry = data.data[0];
        } catch (error) {
          console.error(error);
          this.selectedCountry = null;
        }
      } else {
        this.selectedCountry = null;
      }
    },
    send() {
      this.valid = this.validation();
      if (this.valid) alert("The application has been sent!");
    },
    reset() {
      this.$refs.form.reset();
    },
    validation() {
      return this.$refs.form.validate();
    },
  },
  // Watch for changes in the selected country and fetch its information
  watch: {
    country() {
      this.getCountryInfo();
    },
  },
};
</script>
