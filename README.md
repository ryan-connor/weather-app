## Weather App

Weather App that uses [`openweathermap.org`](https://openweathermap.org/api) API.

## Description

Basic Weather App that calls [`openweathermap.org`](https://openweathermap.org/api) API to display current weather conditions based on an input city. The user can type in any city and the app will return the current temperature, weather description, humidity, and wind speed. If an invalid city is input then an error message pops up telling the user to enter a valid city.

## Why?

The main purpose of this project was to practice fetching data from an external API with user supplied parameters and then parsing the JSON data in the response to display information. This project was an opportunity to work with async functions and get some practice working with promises as well as async/await syntactic sugar. It was also interesting learning the importance of hiding an API key in a separate config/env file that isn't publicly uploaded.

## Usage/Install

Clone/Download the project files and open index.html in browser. 

Note that since the API key is private, in order to run the app you would have to fill in a valid [`openweathermap.org`](https://openweathermap.org/api) API key for the api variable at the top of script.js.

## Acknowledgements

[`openweathermap.org`](https://openweathermap.org/api) for a great free API.
