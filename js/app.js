'use strict';
const update = {
    date: '29 июля',
    usd: {
        buyRate: '63,75',
        sellRate: '65,24',
    },
    eur: {
        buyRate: '96,70',
        sellRate: '98,74',
    },
};

function updateExchangeRates (updateCourses){
    document.getElementById('date').textContent = updateCourses.date;
    document.getElementById('usd-buy-rate').textContent = updateCourses.usd.buyRate;
    document.getElementById('usd-sell-rate').textContent = updateCourses.usd.sellRate;
    document.getElementById('eur-buy-rate').textContent = updateCourses.eur.buyRate;
    document.getElementById('eur-sell-rate').textContent = updateCourses.eur.sellRate;
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:9999/api/hw13');
xhr.send();
xhr.onload = some;

function some(evt){
    const data = JSON.parse(evt.target.responseText);
    updateExchangeRates(data);
}
