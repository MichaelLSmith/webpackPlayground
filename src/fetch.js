'use strict'
export const fetchJokes = () => {
  return fetch('http://api.icndb.com/jokes/random/10')
    .then((res) => res.json() )
    .then((data) => {
      console.log('line 6 fetch');
      console.log(data);
      return data;
      })
    .catch((err) => {
      console.log(err);
    });
}

export const testFunc = () => 1 + 4;

export const a = 3;
