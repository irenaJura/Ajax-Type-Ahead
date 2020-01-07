# Ajax Type Ahead
 Fetching cities and states from a json file, filtered by input value

JSON file used as the endpoint: https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json

I used the fetch method in a simplest way, where it takes one argument — the path to the resource you want to fetch — and returns a promise containing the response. This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, I used the json() method. That itself is another Promise that returnes the raw data.

Then the raw data gets pushed into my originally empty cities array.

Function findMatches filters the cities array to match the searched characters with the help of regular expression and match method.

Function displayMatches loops over the matched array and returnes li and span elements with results.

There is also a regular expression to add a span with class highlight for the searched characters within the results, and a function to add commas to population numbers.