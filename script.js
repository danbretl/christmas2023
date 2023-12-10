const items = [
    { name: "Moss wall art", imageUrl: "1-moss-wall-art-1.jpg", url: "https://mossfusion.com/collections/moss-wall-art" },
    { name: "More moss wall art", imageUrl: "2-moss-wall-art-2.jpg", url: "https://mossartinstallations.com/collections/all" },
    { name: "Moss prism terrarium", imageUrl: "3-moss-prism.jpg", url: "https://ome.design/products/prism?variant=44685216547068" },
    { name: "Motion lights (for the cabin?)", imageUrl: "4-motion-lights.jpg", url: "https://popular.lighting/products/circly" },
    { name: "Everyday light up calendar", imageUrl: "5-everyday-calendar.jpg", url: "https://yetch.store/products/every-day-goal-calendar" },
    { name: "Wine preserver", imageUrl: "6-wine-decanter.jpg", url: "https://usa.etowine.com/collections/eto/products/copper-mirror-finish" },
    { name: "Kindling splitter", imageUrl: "7-wood-splitter.jpg", url: "https://www.itoolmax.com/products/wall-mounted-firewood-kindling-splitter" },
    { name: "Crazy top", imageUrl: "8-spinning-top.jpg", url: "https://www.vorsospin.com/" },
    { name: "Lazy Susan for Azul board game", imageUrl: "9-lazy-susan.jpg", url: "" },
    { name: "Catan replacement parts (red roads, blue roads & settlement)", imageUrl: "10-catan-pieces.jpg", url: "" },
    { name: "Sound ball", imageUrl: "11-sound-ball.jpg", url: "https://oddballism.com/en-us/products/odd-ball" },
    { name: "Everdell Farshore", imageUrl: "12-everdell-farshore.jpg", url: "https://www.tabletoptycoon.com/products/farshore" },
    { name: "Full finger wrist guards", imageUrl: "13-wrist-guards.jpg", url: "https://fxnctiongear.com/products/sender-wrist-guards?variant=45593109070140" },
    { name: "Colorful jumpsuit", imageUrl: "14-jumpsuit.jpg", url: "https://coofandystore.com/products/coofandy-hooded-fleece-solid-color-jumpsuit?variant=43603847905530" },
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
