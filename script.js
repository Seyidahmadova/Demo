const select = document.querySelector(".select");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const watchlists = document.querySelector(".watchlists");
const watchlist = document.querySelector(".watchlist");
const exit = document.querySelector(".exit");
const slider = document.querySelector(".slider");
const movies = document.querySelector(".movies");
const prevbtn = document.querySelector(".prev-button");
const nextbtn = document.querySelector(".next-button");
const movies2 = document.querySelector(".movies2");
const prevbtn2 = document.querySelector(".prev-button2");
const nextbtn2 = document.querySelector(".next-button2");
const signin = document.querySelector(".signin")

options.style.display = "none";

select.addEventListener("click", function () {
  options.style.display = options.style.display === "none" ? "flex" : "none";
});

option.forEach((el) => {
  el.addEventListener("click", function () {
    select.textContent = el.textContent;
    options.style.display = "none";
  });
});

watchlists.style.display = "none";

watchlist.addEventListener("click", function () {
  watchlists.style.display = "flex";
});

exit.addEventListener("click", function () {
  watchlists.style.display = "none";
});

for (let i = 0; i < 15; i++) {
  movies.innerHTML += `
    <div class="movie-item">
    <div class="movie-item-photo">
      <a>
        <img src="./assets/Images.png" />
      </a>
    </div>
    <div class="movie-item-name">
      Vanguard
      <div>
        <span class="movie-item-year">2018</span>
      <span></span>
      <span class="movie-item-duration"> 1h 23m</span>
      </div>
    </div>
    <div class="reaction-buttons">
      <div class="like-button">
       <div class="like-svg">
         <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.01653 8.90536C0.257977 6.56063 0.844161 3.04352 3.77508 1.87116C6.706 0.698788 8.46455 3.04352 9.05074 4.21589C9.63692 3.04352 11.9817 0.698788 14.9126 1.87116C17.8435 3.04352 17.8435 6.56063 16.0849 8.90536C14.3264 11.2501 9.05074 15.9396 9.05074 15.9396C9.05074 15.9396 3.77508 11.2501 2.01653 8.90536Z"
            stroke="white"
            stroke-width="1.17237"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
       </div>
      </div>
      <div class="play-button">
        <a>
          <img src="./assets/play.svg" />
        </a>
      </div>
      <div class="dislike-button">
       <div class="like-svg">
         <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.01653 8.90536C0.257977 6.56063 0.844161 3.04352 3.77508 1.87116C6.706 0.698788 8.46455 3.04352 9.05074 4.21589C9.63692 3.04352 11.9817 0.698788 14.9126 1.87116C17.8435 3.04352 17.8435 6.56063 16.0849 8.90536C14.3264 11.2501 9.05074 15.9396 9.05074 15.9396C9.05074 15.9396 3.77508 11.2501 2.01653 8.90536Z"
            stroke="white"
            stroke-width="1.17237"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
       </div>
        <div class="dislike-vector">|</div>
      </div>
    </div>
  </div>
    `;

  movies2.innerHTML += `
    <div class="movie-item">
    <div class="movie-item-photo">
      <a>
        <img src="./assets/Images.png" />
      </a>
    </div>
    <div class="movie-item-name">
      Vanguard
      <div>
        <span class="movie-item-year">2018</span>
      <span></span>
      <span class="movie-item-duration"> 1h 23m</span>
      </div>
    </div>
    <div class="reaction-buttons">
      <div class="like-button">
       <div class="like-svg">
         <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.01653 8.90536C0.257977 6.56063 0.844161 3.04352 3.77508 1.87116C6.706 0.698788 8.46455 3.04352 9.05074 4.21589C9.63692 3.04352 11.9817 0.698788 14.9126 1.87116C17.8435 3.04352 17.8435 6.56063 16.0849 8.90536C14.3264 11.2501 9.05074 15.9396 9.05074 15.9396C9.05074 15.9396 3.77508 11.2501 2.01653 8.90536Z"
            stroke="white"
            stroke-width="1.17237"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
       </div>
      </div>
      <div class="play-button">
        <a>
          <img src="./assets/play.svg" />
        </a>
      </div>
      <div class="dislike-button">
       <div class="like-svg">
         <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.01653 8.90536C0.257977 6.56063 0.844161 3.04352 3.77508 1.87116C6.706 0.698788 8.46455 3.04352 9.05074 4.21589C9.63692 3.04352 11.9817 0.698788 14.9126 1.87116C17.8435 3.04352 17.8435 6.56063 16.0849 8.90536C14.3264 11.2501 9.05074 15.9396 9.05074 15.9396C9.05074 15.9396 3.77508 11.2501 2.01653 8.90536Z"
            stroke="white"
            stroke-width="1.17237"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
       </div>
        <div class="dislike-vector">|</div>
      </div>
    </div>
  </div>
    `;
}

let slideIndex = 0;
let slideWidth = movies.children[0].offsetWidth;

prevbtn.addEventListener("click", function () {
//   if(slideIndex){
    slideIndex =
    (slideIndex - 1 + movies.children.length) % movies.children.length;
  UpdateSliderPosition();
//   }
});

nextbtn.addEventListener("click", function () {
  slideIndex = (slideIndex + 1) % movies.children.length;
  UpdateSliderPosition();
});

function UpdateSliderPosition() {
    let slideWidth = movies.children[0].offsetWidth;
  movies.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}




let slideIndex2 = 0;
let slideWidth2 = movies2.children[0].offsetWidth;

prevbtn2.addEventListener("click", function () {
  slideIndex2 =
    (slideIndex2 - 1 + movies2.children.length) % movies2.children.length;
  UpdateSliderPosition2();
});

nextbtn2.addEventListener("click", function () {
  slideIndex2 = (slideIndex2 + 1) % movies2.children.length;
  UpdateSliderPosition2();
});

function UpdateSliderPosition2() {
    let slideWidth2 = movies2.children[0].offsetWidth;
  movies2.style.transform = `translateX(-${slideWidth2 * slideIndex2}px)`;
}


const reactbtns = document.querySelectorAll(".reaction-buttons");

reactbtns.forEach(el => {
    el.style.display = 'none'
})


// in chrome browser you must click for working  or change them to 'mouseenter' and 'mouseout'

const movieItems = document.querySelectorAll('.movie-item');

movieItems.forEach(el => {
    el.addEventListener('mouseover', function() {
      const reactionButtons = this.querySelector('.reaction-buttons');
      if (reactionButtons) {
        reactionButtons.style.display = 'flex';
      }
    });

    el.addEventListener('mouseleave', function() {
      const reactionButtons = this.querySelector('.reaction-buttons');
      if (reactionButtons) {
        reactionButtons.style.display = 'none';
      }
    });
  });


signin.addEventListener('click', function(){
    
})





