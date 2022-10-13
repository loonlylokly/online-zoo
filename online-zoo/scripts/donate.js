const donateDots = document.querySelectorAll(".selector__donate-amount");

donateDots.forEach((button) =>
    button.addEventListener("click", (e) =>
    toggleActive(e.currentTarget, donateDots)
    )
);


const inputAmount = document.querySelector(".input-wrap__amount");
inputAmount.addEventListener("input", (e) => {
    findValue(e.target.value, donateDots);
    if (e.target.value.length >= 5)
      inputAmount.value = inputAmount.value.slice(0, 4);
  });



  const toggleActive = (amount, dots) => {
    dots.forEach(() => {
      const activeDot = document.querySelector(".active-dot");
      if (activeDot) activeDot.classList.remove("active-dot");
    });
    if (amount) {
      amount.children[0].classList.add("active-dot");
      inputAmount.value = +amount.value;
    }
  };



//   const findValue = (value, dots) => {
//     const currentItem = [...dots].find((item) => item.value === value);
//     toggleActive(currentItem, dots);
//   };
