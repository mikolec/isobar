/* 
 * Korzystając ze standardu ES6 lub nowszego, napisz funkcję, która pobierze dane ze wskazanych endpointów
https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json
https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json
następnie połączy je w jeden string i wyświetli w dowolnym miejscu (np. w konsoli)
 */

const url1 =
  'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json';
const url2 =
  'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json';

const request1 = fetch(url1).then(function(response) {
  return response.json();
});
const request2 = fetch(url2).then(function(response) {
  return response.json();
});

Promise.all([request1, request2]).then(function(values) {
  const combinedData = [...values[0], ...values[1]];
  console.log(combinedData.join(' '));
});
