// Tutorial 64 - JavaScript Exercise 10 - Business Name Generator

// Create a business name generator by combining list of adjectives and shop name and another word
    //  Adjectives - Crazy, Amazing, Fire
    // Shop name - Engine, Foods, Garments
    // Another word - Bros, Limited, Hub
// Do not use arrays, u can use functions and random method

const adjectives = ['Crazy', 'Amazing', 'Fire'];
const shopName = ['Engine', 'Foods', 'Garments'];
const brandTag = ['Bros', 'Limited', 'Hub'];

function getAdjectives () {
    const r = Math.random();
    if (r < 0.33) return 'Crazy';
    else if (r < 0.66) return 'Amazing';
    else return 'Fire';
}
function getShopName () {
    const r = Math.random();
    if (r < 0.33) return 'Engine';
    else if (r < 0.66) return 'Foods';
    else return 'Garments';
}
function getBrandTag() {
    const r = Math.random();
    if (r < 0.33) return 'Bros';
    else if (r < 0.66) return 'Limited';
    else return 'Hub';
}

function getBusinessName() {
    console.log(getAdjectives() + ' ' + getShopName() + ' ' + getBrandTag())
}

getBusinessName()