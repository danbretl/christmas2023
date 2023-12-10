const items = [
    { name: "Moss wall art", imageUrl: "images/1-moss-wall-art-1.jpg", url: "https://mossfusion.com/collections/moss-wall-art", description: "A beautiful piece of moss wall art for your home." },
    { name: "More moss wall art", imageUrl: "images/2-moss-wall-art-2.jpg", url: "https://mossartinstallations.com/collections/all", description: "Explore a variety of moss wall art creations." },
    { name: "Moss prism terrarium", imageUrl: "images/3-moss-prism.jpg", url: "https://ome.design/products/prism?variant=44685216547068", description: "An artistic terrarium with moss in a prism shape." },
    { name: "Motion-activated lights", imageUrl: "images/4-motion-lights.jpg", url: "https://popular.lighting/products/circly", description: "Lights that activate with motion, perfect for any space." },
    { name: "Everyday light-up calendar", imageUrl: "images/5-everyday-calendar.jpg", url: "https://yetch.store/products/every-day-goal-calendar", description: "A calendar that lights up to brighten your day." },
    { name: "Wine preserver", imageUrl: "images/6-wine-decanter.jpg", url: "https://usa.etowine.com/collections/eto/products/copper-mirror-finish", description: "Preserve the freshness of your favorite wines." },
    { name: "Kindling splitter", imageUrl: "images/7-wood-splitter.jpg", url: "https://www.itoolmax.com/products/wall-mounted-firewood-kindling-splitter", description: "Effortlessly split kindling for your cozy fires." },
    { name: "Fancy spinning top", imageUrl: "images/8-spinning-top.jpg", url: "https://www.vorsospin.com/", description: "A beautifully crafted spinning top for play." },
    { name: "Lazy Susan for playing Azul", imageUrl: "images/9-lazy-susan.jpg", url: "https://www.google.com/search?q=lazy+susan+with+lip", description: "A Lazy Susan for a smooth gaming experience." },
    { name: "Catan replacement parts (Red roads, Blue roads & settlement)", imageUrl: "images/10-catan-pieces.jpg", url: "https://www.google.com/search?q=catan+original+pieces", description: "Replace lost or worn-out pieces for your Catan game." },
    { name: "Sound ball", imageUrl: "images/11-sound-ball.jpg", url: "https://oddballism.com/en-us/products/odd-ball", description: "A unique sound ball for auditory stimulation." },
    { name: "Everdell Farshore", imageUrl: "images/12-everdell-farshore.jpg", url: "https://www.tabletoptycoon.com/products/farshore", description: "Explore the wonders of Everdell with Farshore." },
    { name: "Full finger wrist guards", imageUrl: "images/13-wrist-guards.jpg", url: "https://fxnctiongear.com/products/sender-wrist-guards?variant=45593109070140", description: "Protect your wrists during active pursuits." },
    { name: "Colorful jumpsuit", imageUrl: "images/14-jumpsuit.jpg", url: "https://coofandystore.com/products/coofandy-hooded-fleece-solid-color-jumpsuit?variant=43603847905530", description: "A cozy and stylish jumpsuit for any occasion." },
    { name: "And lots and lots of surprises!", imageUrl: "images/15-surprises.jpg", url: "https://www.google.com/search?q=surprise+gifts+for+artsy+guy+who+loves+bright+colors&client=safari&sca_esv=589532731&rls=en&sxsrf=AM9HkKmjxmKUx8OyZC77aFW0mvl_n-B__Q%3A1702200956902&ei=fIZ1ZYbYNqyU0PEPhMqK-Ac&ved=0ahUKEwiGhv3ayISDAxUsCjQIHQSlAn8Q4dUDCA8&uact=5&oq=surprise+gifts+for+artsy+guy+who+loves+bright+colors&gs_lp=Egxnd3Mtd2l6LXNlcnAiNHN1cnByaXNlIGdpZnRzIGZvciBhcnRzeSBndXkgd2hvIGxvdmVzIGJyaWdodCBjb2xvcnMyCBAhGKABGMMESMMlUMIaWKUhcAF4AJABAJgBZKABlwSqAQM1LjG4AQPIAQD4AQHCAg4QABiABBiKBRiGAxiwA8ICChAhGKABGMMEGAriAwQYASBBiAYBkAYE&sclient=gws-wiz-serp", description: "Unwrap the joy of surprises with this special gift!" },
    { name: "(Thanks ChatGPT!)", imageUrl: "images/16-artificial-intelligence.jpg", url: "https://github.com/danbretl/christmas2023", description: "ChatGPT created this website and wrote all the descriptions of the items." },
];

const gridContainer = document.getElementById("itemGrid");

// Create a title element
const pageTitle = document.createElement("div");
pageTitle.textContent = "Dan's Christmas List 2023";
pageTitle.classList.add("page-title");

// Append the title element to the document body
document.body.insertBefore(pageTitle, gridContainer);

items.forEach(item => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = item.name;
    image.classList.add("item-image");

    const details = document.createElement("div");
    details.classList.add("item-details");

    const itemName = document.createElement("div");
    itemName.textContent = item.name;
    itemName.classList.add("item-name");

    const itemDescription = document.createElement("div");
    itemDescription.textContent = item.description;
    itemDescription.classList.add("item-description");

    details.appendChild(itemName);
    details.appendChild(itemDescription);

    gridItem.appendChild(image);
    gridItem.appendChild(details);

    // Add an event listener to open the URL when clicking on the grid item
    gridItem.addEventListener("click", () => {
        window.open(item.url, "_blank");
    });

    gridContainer.appendChild(gridItem);

});
