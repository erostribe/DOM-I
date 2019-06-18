const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Products",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros,",
    "about-h4": "About",
    "about-content": "About content elementum magna eros",
    "middle-img-src": "img/mid-page-accentjpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros",   
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
};

//Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Update the nav links test
let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})

//Update CTA
let ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];