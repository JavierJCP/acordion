const arrow = document.querySelectorAll('.arrow__img');

const block = document.querySelectorAll('.block');

arrow.forEach((arrowItem, i) => {
  arrowItem.addEventListener('click', () => {
    // arrow.forEach((item, i) => {
    //   block[i].classList.remove('block--active');
    // });

    arrow[i].classList.toggle('arrow__img--active');
    block[i].classList.toggle('block--active');
  });
});
