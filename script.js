function addGift() {
    const giftInput = document.getElementById("giftInput");
    const giftList = document.getElementById("giftList");

    if (giftInput.value !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${giftInput.value}</span>
            <button type="button" onclick="removeGift(this)">Remove</button>
        `;
        giftList.appendChild(listItem);
        giftInput.value = "";
    }
}

function removeGift(button) {
    const listItem = button.parentNode;
    const giftList = listItem.parentNode;
    giftList.removeChild(listItem);
}
