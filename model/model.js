// variables
var homeContent = `<!-- home image -->
      <div class="home-img">
        <h1>Header goes here</h1>
        <h2>Less important text goes here.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aliquid minus nemo sed est.
        </p>
        <button class="readMoreBTN">READ MORE</button>
      </div>
      <!-- Quote Section -->
      <div class="quote-Section">
        <h3>
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Iste natus error sit voluptatem accusantium doloremque
          laudantium totam rem aperiam eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo”
        </h3>
        <p class="author-Text">John Smith</p>
        <p class="jobTitle-Text">Corporation CEO, books author.</p>
      </div>
      <!-- Upcoming Events -->
      <div class="event-Section">
        <div class="quote-Title">
          <h1>Upcoming Events</h1>
          <hr />
        </div>

        <div class="date-Section">
          <!-- event Boxes -->
          <!-- box1 -->
          <div class="event-Box">
            <div class="date-Box">
              <p>
                <span class="dateNumber">06</span>
                <span class="dateMonth">JUN</span>
              </p>
            </div>
            <div class="date-Text">
              <h3>Sed et persipiatis unde omnis iste natus</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <!-- box2 -->
          <div class="event-Box">
            <div class="date-Box">
              <p>
                <span class="dateNumber">30</span>
                <span class="dateMonth">JUL</span>
              </p>
            </div>
            <div class="date-Text">
              <h3>Sed et persipiatis unde omnis iste natus</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <!-- box3 -->
          <div class="event-Box">
            <div class="date-Box">
              <p>
                <span class="dateNumber">30</span>
                <span class="dateMonth">AUG</span>
              </p>
            </div>
            <div class="date-Text">
              <h3>Sed et persipiatis unde omnis iste natus</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <!-- box4 -->
          <div class="event-Box">
            <div class="date-Box">
              <p>
                <span class="dateNumber">23</span>
                <span class="dateMonth">NOV</span>
              </p>
            </div>
            <div class="date-Text">
              <h3>Sed et persipiatis unde omnis iste natus</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <!-- box5 -->
          <div class="event-Box">
            <div class="date-Box">
              <p>
                <span class="dateNumber">23</span>
                <span class="dateMonth">DEC</span>
              </p>
            </div>
            <div class="date-Text">
              <h3>Sed et persipiatis unde omnis iste natus</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>`;
var aboutContent = `<h1>ABOUT</h1>`;
var galleryContent = `<h1>GALLERY</h1>`;
var blogContent = `<h1>BLOG</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

export var myName = "Pierce";

// 
// export function modelPageName(pgName)
export function modelPageName(pageName) {

  // replace font color for nav a on homepage
  if (pageName == "homeContent") {
    $("nav a").removeClass("blackText").addClass("whiteText");
    $("hr").removeClass("black-hr").addClass("white-hr");
    // Change image in nav src using attr
    $("nav img").attr("src", "images/logo/logo-white.svg");
  } else {
    $("nav a").removeClass("whiteText").addClass("blackText");
    $("hr").removeClass("white-hr").addClass("black-hr");
    // Change image src in nav using attr
    $("nav img").attr("src", "images/logo/logo-black.svg")
  }

  // try & catch to catch any errors
  try {
    eval(pageName);
    $("#app").html(eval(pageName))
  }
  catch (e) {
    console.log("hello", e)
  }
}