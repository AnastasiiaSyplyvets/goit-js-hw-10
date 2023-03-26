
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

const countryWrapperEl = document.querySelector('.country-info');

const countryList = document.querySelector('.country-list');

// function createCountrymarkup(country) {
//     const languagesEl = Object.values(country.languages);


//     console.log(country)
//     countryWrapperEl.innerHTML = `
//     <div class="country-titel">
//     <img class="image" src= ${country.flag} width="40px" height="20px"><p class="country-name"> ${country.name}</p></div>
//     <ul class="list">
//     <li><span class="key">Capital: </span> ${country.capital}</li>
//     <li><span class="key">Population: </span> ${country.population}</li>
//     <li><span class="key">Languages: </span>${languagesEl}</li>
//     </ul>`;
// } 



export default function fetchCountries(name) {

    const inputEl = document.querySelector('input');

    fetch(`https://restcountries.com/v3.1/name/${inputEl.value}?fields=name,capital,population,flags,languages`).then(response =>{
        if(!response.ok) {
            throw new Error(response.status)
            }
        return response.json();
    }).then(data => {
        const countries = data.map(country => {
            
            return {

                name: country.name.official,
                capital: country.capital,
                population: country.population,
                flag: country.flags.svg,
                languages: country.languages

            }
        });

            console.log(countries);
           

            return countries;
        }).then((countries) => {
            
            countries.map((country)=> {
                const languagesEl = Object.values(country.languages);

                if(countries.length > 10) {
                    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                }

                else if(countries.length >= 2 && countries.length <= 10) {
                    countryList.innerHTML += `<div class="country-titel">
                    <img class="image" src= ${country.flag} width="40px" height="20px"><p class="country-name"> ${country.name}</p></div>
                    <ul class="list">`;
    
                }

                else if(countries.length === 1) {
                    countries.map((country)=> {
                        const languagesEl = Object.values(country.languages);
                        countryList.innerHTML = '';
                        console.log(country)
        
                        countryWrapperEl.innerHTML = `
                        <div class="country-titel">
                        <img class="image" src= ${country.flag} width="40px" height="20px"><p class="country-name"> ${country.name}</p></div>
                        <ul class="list">
                        <li><span class="key">Capital: </span> ${country.capital}</li>
                        <li><span class="key">Population: </span> ${country.population}</li>
                        <li><span class="key">Languages: </span>${languagesEl}</li>
                        </ul>`;
                    })
                }
                else{
                    Notiflix.Notify.failure("Oops, there is no country with that name")
                }
                        
                

             
               
                console.log(country)

                // countryWrapperEl.innerHTML = `
                // <div class="country-titel">
                // <img class="image" src= ${country.flag} width="40px" height="20px"><p class="country-name"> ${country.name}</p></div>
                // <ul class="list">
                // <li><span class="key">Capital: </span> ${country.capital}</li>
                // <li><span class="key">Population: </span> ${country.population}</li>
                // <li><span class="key">Languages: </span>${languagesEl}</li>
                // </ul>`;
            // })

           
         
        })
        // .then(countries =>{
            // if(countries.length > 10) {
            //     Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            // }
            // else if(countries.length >= 2 && countries.length <= 10) {
            //     countryList.innerHTML += `<div class="country-titel">
            //     <img class="image" src= ${country.flag} width="40px" height="20px"><p class="country-name"> ${country.name}</p></div>
            //     <ul class="list">`;

            // }

            // else if(countries.length === 1) {
            //     countries.map((country)=> {
            //         const languagesEl = Object.values(country.languages);
        
            //         console.log(country)
    
            //         countryWrapperEl.innerHTML = `
            //         <div class="country-titel">
            //         <img class="image" src= ${country.flag} width="40px" height="20px"><p class="country-name"> ${country.name}</p></div>
            //         <ul class="list">
            //         <li><span class="key">Capital: </span> ${country.capital}</li>
            //         <li><span class="key">Population: </span> ${country.population}</li>
            //         <li><span class="key">Languages: </span>${languagesEl}</li>
            //         </ul>`;
            //     })
            // }
// else{
//     Notiflix.Notify.failure("Oops, there is no country with that name")
// }
//         }

    }).catch(error => 
        
            console.log(Notiflix.Notify.failure("Oops, there is no country with that name")));
}

