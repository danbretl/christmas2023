function addGift() {
    const nameInput = document.getElementById("nameInput");
    const urlInput = document.getElementById("urlInput");
    const giftList = document.getElementById("giftList");

    if (nameInput.value !== "" && urlInput.value !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${nameInput.value}</span>
            <span><a href="${urlInput.value}" target="_blank">View</a></span>
            <button type="button" onclick="removeGift(this)">Remove</button>
        `;
        giftList.appendChild(listItem);
        nameInput.value = "";
        urlInput.value = "";
    }
}

function removeGift(button) {
    const listItem = button.parentNode;
    const giftList = listItem.parentNode;
    giftList.removeChild(listItem);
}
