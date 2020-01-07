const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
 
// empty array to put cities into
const cities = [];

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
// It returns a Promise that resolves to the Response to that request
// the raw data from the blob has to be converted to JSON
fetch(endpoint)
  .then(blob => blob.json()) // another promise  returns the raw data
  .then(data => cities.push(...data)) // spread syntax to push the data into array properly

// function to filter the user input 
function findMatches(wordToMatch, cities) {
    return cities.filter(place => { // check if city or state matches what was seached 
        // create a regular expression variable for match
        const regex = new RegExp(wordToMatch, 'gi'); // global & case insensitive
        return place.city.match(regex) || place.state.match(regex); // match() method retrieves the result of matching a string against a regular expression
    });
}

// function to display matched results
function displayMatches() {
  const matchArray = findMatches(this.value, cities); // wordToMatch is the searched value
  const html = matchArray.map(place => { // loop over the array and create li and span elements with searched results
      return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
      </li>`;
  }).join(''); // turn an array with multiple items into string
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // trigges when clicked outside the search input
searchInput.addEventListener('keyup', displayMatches); // fires on keyup event