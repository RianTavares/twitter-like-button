
const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('liking');
})

likeButton.onanimationend = () => {
  likeButton.classList.toggle('liking');
}
