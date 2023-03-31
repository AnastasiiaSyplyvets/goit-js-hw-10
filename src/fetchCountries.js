

export default function fetchCountries(name) {

    const inputEl = document.querySelector('input');

  return  fetch(`https://restcountries.com/v3.1/name/${inputEl.value}?fields=name,capital,population,flags,languages`).then(response =>{
        if(!response.ok) {
            throw new Error(response.status)
            }
        return response.json();
    })}
    
    