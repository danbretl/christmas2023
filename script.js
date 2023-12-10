const items = [
    { name: "Moss wall art", imageUrl: "https://via.placeholder.com/300", url: "https://mossfusion.com/collections/moss-wall-art" },
    { name: "More moss wall art", imageUrl: "https://via.placeholder.com/300", url: "https://mossartinstallations.com/collections/all" },
    { name: "Moss prism terrarium", imageUrl: "https://via.placeholder.com/300", url: "https://ome.design/products/prism" },
    { name: "Motion lights (for the cabin?)", imageUrl: "https://via.placeholder.com/300", url: "https://popular.lighting/products/circly" },
    { name: "Everyday light up calendar", imageUrl: "https://via.placeholder.com/300", url: "https://yetch.store/products/every-day-goal-calendar" },
    { name: "Wine preserver", imageUrl: "https://via.placeholder.com/300", url: "https://usa.etowine.com/collections/eto/products/copper-mirror-finish" },
    { name: "Kindling splitter", imageUrl: "https://via.placeholder.com/300", url: "https://www.itoolmax.com/products/wall-mounted-firewood-kindling-splitter" },
    { name: "Crazy top", imageUrl: "https://via.placeholder.com/300", url: "https://www.vorsospin.com/" },
    { name: "Lazy Susan for Azul board game", imageUrl: "https://via.placeholder.com/300", url: "" }, // You can add an image and URL if available
    { name: "Catan replacement parts (red roads, blue roads & settlement)", imageUrl: "https://via.placeholder.com/300", url: "" }, // You can add an image and URL if available
    { name: "Sound ball", imageUrl: "https://via.placeholder.com/300", url: "https://oddballism.com/en-us/products/odd-ball" },
    { name: "Everdell Farshore", imageUrl: "https://via.placeholder.com/300", url: "https://www.tabletoptycoon.com/products/farshore" },
    { name: "Full finger wrist guards", imageUrl: "https://via.placeholder.com/300", url: "https://fxnctiongear.com/products/sender-wrist-guards?variant=45593109070140" },
    { name: "Colorful jumpsuit", imageUrl: "https://via.placeholder.com/300", url: "https://coofandystore.com/products/coofandy-hooded-fleece-solid-color-jumpsuit?variant=43603847905530" },
    { name: "iPad pencil screen", imageUrl: "https://via.placeholder.com/300", url: "https://shop.astropad.com/products/rock-paper-pencil?variant=41534944182404" }
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
