const carousel = document.querySelectorAll(".carousel");
const item_left = document.querySelectorAll(".item-left");
const item_right = document.querySelectorAll(".item-right");
const item_active = document.querySelectorAll('.item-active');
const buttons = document.querySelectorAll('.button_circle');
const btnLeft = buttons[0];
const btnRight = buttons[1];

let list_cards = Array.from(document.querySelectorAll('.animals-row__card-border-wrap'));

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const generateCards = (item) => {
    for (let i = 0; i < 6; i++) {
        const card = list_cards[i].cloneNode(true);
        item[i%2].appendChild(card);
    }
}

const initItems = () => {
    let changedItems = [item_active, item_left, item_right];
    for (let item of changedItems) {
        item[0].innerHTML = "";
        item[1].innerHTML = "";
        shuffle(list_cards);
        generateCards(item);
    }
}

const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
}

const moveLeft = () => {
    carousel[0].classList.add("transition-left");
    carousel[1].classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
};

const moveRight = () => {
    carousel[0].classList.add("transition-right");
    carousel[1].classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
};

const animationCarousel = (animationEvent) => {
    let changedItems;
    if (animationEvent.animationName === "move-left") {
        carousel[0].classList.remove("transition-left");
        carousel[1].classList.remove("transition-left");
        item_active[0].innerHTML = item_left[0].innerHTML;
        item_active[1].innerHTML = item_left[1].innerHTML;
    } else {
        carousel[0].classList.remove("transition-right");
        carousel[1].classList.remove("transition-right");
        item_active[0].innerHTML = item_right[0].innerHTML;
        item_active[1].innerHTML = item_right[1].innerHTML;
    }
  
    changedItems = [item_left, item_right];
    for (let item of changedItems) {
        item[0].innerHTML = "";
        item[1].innerHTML = "";
        shuffle(list_cards);
        generateCards(item);
    }
  
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
}


initItems();
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

carousel[0].addEventListener("animationend", (animationEvent) => {
    animationCarousel(animationEvent);
})
