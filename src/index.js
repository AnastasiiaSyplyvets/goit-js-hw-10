import './css/styles.css';

import fetchCountries from './fetchCountries';

import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';



const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('input');

const countryWrapperEl = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');



inputEl.addEventListener('input', debounce((event) => {
      
    event.preventDefault();
    
    let value = inputEl.value.trim();



    if(!value) {
        countryWrapperEl.innerHTML = ``;
        countryList.innerHTML = ``;
        inputEl.value = '';
        return;
    }
        fetchCountries(value).then(data => {
                
        console.log(data)

        if(data.length > 10) {
                countryList.innerHTML = ``;
                countryWrapperEl.innerHTML = ``;
                        
               
              Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        //       return;
        }


        else if(data.length >= 2 && data.length <= 10) 
        {
               
countryWrapperEl.innerHTML = ``;
                
const createCountryListMarkup = (data) => {
        data.map((country) => {

                countryList.innerHTML += `<div class="country-titel">
                
                <img class="image" src= ${country.flags.svg} width="40px" height="20px"><p class="country-name"> ${country.name.official}</p></div>
                <ul class="list">`;
        })
        return countryList;
}

countryList.innerHTML = ``;
createCountryListMarkup(data);
     
         }
                
        else if(data.length === 0) {
       
        countryWrapperEl.innerHTML = ``;
        countryList.innerHTML = '';
        }

        else if(data.length === 1) {
                     
                countryList.innerHTML = ``;
               
                                
                const createCountryCard = (data) => {
                        data.map((country) => {
                                const languagesEl = Object.values(country.languages);

                                countryWrapperEl.innerHTML = `
               
                                <div class="country-titel">
                                <img class="image" src= ${country.flags.svg} width="40px" height="20px"><p class="country-name"> ${country.name.official}</p></div>
                                <ul class="list">
                                <li class = "list-item"><span class="key">Capital: </span> ${country.capital}</li>
                                <li class = "list-item"><span class="key">Population: </span> ${country.population}</li>
                                <li class = "list-item"><span class="key">Languages: </span>${languagesEl}</li>
                                </ul>`;

                                
                        })
                        return countryWrapperEl;
                }
               
                createCountryCard(data);
        }
     
     
        })
        

        .catch(error => {
                countryList.innerHTML = ``;
                countryWrapperEl.innerHTML =``;
                Notiflix.Notify.failure("Oops, there is no country with that name");
                console.log(error)
        })
        
    
}, DEBOUNCE_DELAY))