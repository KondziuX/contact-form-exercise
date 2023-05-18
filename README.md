# Travel Form - VUE, API, GIT

In this challenge, the given REST API contains information about countries.
In the provided contact form, the task is to use the API to get the countries list and show information about selected country.
The given API uses pagination to return the data divided into pages. Fetching the whole data available on the API requires multiple requests.

To get a single page of countries data, perform HTTP GET request to:
https://jsonmock.hackerrank.com/api/countries?page= ***pageNumber***
where ***pageNumber*** is an integer denoting the page number of the results we are requesting.

For example, a GET request to:
https://jsonmock.hackerrank.com/api/countries?page=2
will return the second page of the collection of countries. Pages are numbered from 1, so in order to access the first page, you need to ask for page number 1.

To get a single country data, perform HTTP GET request to:
https://jsonmock.hackerrank.com/api/countries?alpha2Code= ***alpha2Code***
where ***alpha2Code*** is the two-letter unique code of the country.

To find countries per name, perform HTTP GET request to:
https://jsonmock.hackerrank.com/api/countries/search?name= ***name***
where ***name*** is a string denoting the full name of a country or part of it.

For example, a GET request to:
https://jsonmock.hackerrank.com/api/countries/search?name=pol
will return a list of countries whose name contains "pol"

The response to such request is a JSON with the following 5 fields:

 - page: The current page of the results.
 - per_page: The maximum number of countries returned per page.
 - total: The total number of countries on all pages of the results.
 - total_pages: The total number of pages with results.
 - data: An array of objects containing country information on the
   requested page.
   

# Goals

Complete the missing feature:

 1. getCountries() - Use API to get the countries list (return Array of Objects),
 2. (Optional) Display informations about selected country, example: [\[screen\]](https://raw.githubusercontent.com/ozpartsit/contact-form/bfef457bf6c889f925a4ae408f5a45d3a0aeb20b/example.jpg)
 3. (Optional) Use Version Control (at least two commits)

## Useful Links

 - VUE - Framework for building web user interfaces: https://vuejs.org/
 - Vuetify - Vue UI Library: https://vuetifyjs.com/
