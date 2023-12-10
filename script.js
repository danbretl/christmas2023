const items = [
    { name: "Item 1", imageUrl: "https://via.placeholder.com/300", url: "https://www.example.com/item1" },
    { name: "Item 2", imageUrl: "https://via.placeholder.com/300", url: "https://www.example.com/item2" },
    { name: "Item 3", imageUrl: "https://via.placeholder.com/300", url: "https://www.example.com/item3" },
    // Add more items as needed
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
