// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  for (const likeButton of document.querySelectorAll(".like-glyph"))
  {  
    likeButton.addEventListener("click", event => {
      mimicServerCall()
      .then( () => {
        if(event.target.textContent === EMPTY_HEART) {
          event.target.textContent = FULL_HEART;
          event.target.classList.add("activated-heart");
        }
        else {
          event.target.textContent = EMPTY_HEART;
          event.target.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        modal.classList.remove("hidden")
        modal.textContent = error;
        setTimeout(() => modal.classList.add("hidden"), 3000);
      });
    });
  }
})


modal.classList.add("hidden");5
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
