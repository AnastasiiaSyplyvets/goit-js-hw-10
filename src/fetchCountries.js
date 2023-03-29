


let controller = new AbortController();
let signal = controller.signal; 

export default function fetchCountries(name) {

    const inputEl = document.querySelector('input');

  return  fetch(`https://restcountries.com/v3.1/name/${inputEl.value}?fields=name,capital,population,flags,languages`, { signal: controller.signal }).then(response =>{
        if(!response.ok) {
            throw new Error(response.status)
            }
        return response.json();
    })}
    
    