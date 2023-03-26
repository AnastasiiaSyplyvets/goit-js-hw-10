import './css/styles.css';

import fetchCountries from './fetchCountries';

import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';



const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('input');

const countryWrapperEl = document.querySelector('.country-info');




inputEl.addEventListener('input', debounce((event) => {
      
        console.log(fetchCountries())
        
    
}, DEBOUNCE_DELAY))