const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    // Insert this image****
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// document.createElement("img")

let image = document.querySelector('nav img-src');
image.textContent = ['img/logo.png']


let navigation = document.querySelectorAll('nav');
navigation[0].textContent = ['Services'];
navigation[1].textContent = ['Product'];
navigation[2].textContent = ['Vision'];
navigation[3].textContent = ['Features'];
navigation[4].textContent = ['About'];
navigation[5].textContent = ['Contact'];

navigation.appendChild('a');
navigation[6].textContent = ['new'];

navigation.prepend('a');
navigation[7].textcontent = ['new 2'];


let cta1 = document.querySelector('cta h1');
cta1.textContent = ['DOM Is Awesome'];

let cta2 = document.querySelector('cta button');
cta2.textContent = ['Get Started'];

let cta3 = document.querySelector('cta src');
cta3.textContent = ['img/header-img.png'];


let mainC = document.querySelectorAll('.main-content h4');

mainC[0].textContent = ['featues'];
mainC[1].textContent = ['About'];
mainC[2].textContent = ['Services'];
mainC[3].textContent = ['Product'];
mainC[4].textContent = ['Vision'];

let textC = document.querySelectorAll('.main-content p');
textC[0].textContent = ['Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'];
textC[1].textContent = ['About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'];
textC[2].textContent = ['Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'];
textC[3].textContent = ['Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'];
textC[4].textContent = ['Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'];

let contactbottom = document.querySelector('.contact h4');
contactbottom.textContent = ['Contact'];

let contactB = document.querySelectorAll('.contact p');
contactB[0].textContent = ['123 Way 456 Street Somewhere, USA'];
contactB[1].textContent = ['1 (888) 888-8888'];
contactB[2].textContent = ['sales@greatidea.io'];

let footerbottom = document.querySelector('footer p');
footerbottom.textContent = ['Copyright Great Idea! 2018'];

let navigation = document.querySelector('nav');
navigation.style.color = 'green';

// let maintext = document.querySelectorAll('.text-content p');

