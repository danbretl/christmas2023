const items = [
    { name: "Moss wall art", imageUrl: "images/1-moss-wall-art-1.jpg", url: "https://mossfusion.com/collections/moss-wall-art" },
    { name: "More moss wall art", imageUrl: "images/2-moss-wall-art-2.jpg", url: "https://mossartinstallations.com/collections/all" },
    { name: "Moss prism terrarium", imageUrl: "images/3-moss-prism.jpg", url: "https://ome.design/products/prism?variant=44685216547068" },
    { name: "Motion-activated lights", imageUrl: "images/4-motion-lights.jpg", url: "https://popular.lighting/products/circly" },
    { name: "Everyday light-up calendar", imageUrl: "images/5-everyday-calendar.jpg", url: "https://yetch.store/products/every-day-goal-calendar" },
    { name: "Wine preserver", imageUrl: "images/6-wine-decanter.jpg", url: "https://usa.etowine.com/collections/eto/products/copper-mirror-finish" },
    { name: "Kindling splitter", imageUrl: "images/7-wood-splitter.jpg", url: "https://www.itoolmax.com/products/wall-mounted-firewood-kindling-splitter" },
    { name: "Fancy spinning top", imageUrl: "images/8-spinning-top.jpg", url: "https://www.vorsospin.com/" },
    { name: "Lazy Susan for playing Azul", imageUrl: "images/9-lazy-susan.jpg", url: "https://www.google.com/search?q=lazy+susan+with+lip" },
    { name: "Catan replacement parts (Red roads, Blue roads & settlement)", imageUrl: "images/10-catan-pieces.jpg", url: "https://www.google.com/search?q=catan+original+pieces" },
    { name: "Sound ball", imageUrl: "images/11-sound-ball.jpg", url: "https://oddballism.com/en-us/products/odd-ball" },
    { name: "Everdell Farshore", imageUrl: "images/12-everdell-farshore.jpg", url: "https://www.tabletoptycoon.com/products/farshore" },
    { name: "Full finger wrist guards", imageUrl: "images/13-wrist-guards.jpg", url: "https://fxnctiongear.com/products/sender-wrist-guards?variant=45593109070140" },
    { name: "Colorful jumpsuit", imageUrl: "images/14-jumpsuit.jpg", url: "https://coofandystore.com/products/coofandy-hooded-fleece-solid-color-jumpsuit?variant=43603847905530" },
    { name: "And lots and lots of surprises!", imageUrl: "images/15-surprises.jpg", url: "https://www.google.com/search?q=surprise+gifts+for+artsy+guy+who+loves+bright+colors&client=safari&sca_esv=589532731&rls=en&sxsrf=AM9HkKmjxmKUx8OyZC77aFW0mvl_n-B__Q%3A1702200956902&ei=fIZ1ZYbYNqyU0PEPhMqK-Ac&ved=0ahUKEwiGhv3ayISDAxUsCjQIHQSlAn8Q4dUDCA8&uact=5&oq=surprise+gifts+for+artsy+guy+who+loves+bright+colors&gs_lp=Egxnd3Mtd2l6LXNlcnAiNHN1cnByaXNlIGdpZnRzIGZvciBhcnRzeSBndXkgd2hvIGxvdmVzIGJyaWdodCBjb2xvcnMyCBAhGKABGMMESMMlUMIaWKUhcAF4AJABAJgBZKABlwSqAQM1LjG4AQPIAQD4AQHCAg4QABiABBiKBRiGAxiwA8ICChAhGKABGMMEGAriAwQYASBBiAYBkAYE&sclient=gws-wiz-serp" },
];

const gridContainer = document.getElementById("itemGrid");

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

    const itemUrl = document.createElement("a");
    itemUrl.href = item.url;
    itemUrl.target = "_blank";
    itemUrl.textContent = "Visit Website";
    itemUrl.classList.add("item-url");

    details.appendChild(itemName);
    details.appendChild(itemUrl);

    gridItem.appendChild(image);
    gridItem.appendChild(details);

    gridContainer.appendChild(gridItem);
});
