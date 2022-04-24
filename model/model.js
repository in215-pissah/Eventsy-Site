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
var aboutContent = `<div class="wrapper">
        <div class="about-img"></div>
        <div class="aboutText">
          <h1 class="aboutTitle">
            OUR HISTORY:
            <hr class="black-hr" />
          </h1>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`;
var galleryContent = `<div class="wrapper">
        <h1 class="heading-Text">
          GALLERY:
          <hr class="black-hr" />
        </h1>
        <div class="gallery-Section">
          <div class="img-Section1">
            <!-- Img Link 1 -->
            <div class="img-Link1">
              <a href="#galleryImg1">
                <div class="gallery-Pic1"></div>
              </a>
            </div>
            <!-- Img Link 2 -->
            <div class="img-Link2">
              <a href="#galleryImg2">
                <div class="gallery-Pic2"></div>
              </a>
            </div>
            <!-- Img Link 3 -->
            <div class="img-Link3">
              <a href="#galleryImg">
                <div class="gallery-Pic3"></div>
              </a>
            </div>
          </div>
          <div class="img-Section2">
            <!-- Img Link 4 -->
            <div class="img-Link4">
              <a href="#galleryImg">
                <div class="gallery-Pic4"></div>
              </a>
            </div>
            <div class="img-Link5">
              <!-- Img Link 5 -->
              <a href="#galleryImg">
                <div class="gallery-Pic5"></div>
              </a>
            </div>
          </div>
        </div>
      </div>`;
var blogContent = `<div class="wrapper">
        <h1 class="heading-Text">
          Blog:
          <hr class="black-hr" />
        </h1>
        <!-- blog Section 1 -->
        <div class="blogSection">
          <!-- blogBox 1 -->
          <div class="blogBox">
            <div class="date-Box">
              <p>
                <span class="dateNumber">06</span>
                <span class="dateMonth">JUN</span>
              </p>
            </div>
            <div class="blog-Info">
              <div class="blogIMG">
                <a href="#">
                  <img src="images/blog.jpg" alt="" />
                </a>
              </div>
              <div class="blogText">
                <h2>Sed et persipiatis unde omnis iste natus</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
          <!-- blogBox 2 -->
          <div class="blogBox">
            <div class="date-Box">
              <p>
                <span class="dateNumber">30</span>
                <span class="dateMonth">JUL</span>
              </p>
            </div>
            <div class="blog-Info">
              <div class="blogIMG">
                <a href="#">
                  <img src="images/blog.jpg" alt="" />
                </a>
              </div>
              <div class="blogText">
                <h2>Sed et persipiatis unde omnis iste natus</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
var contactContent = `<div class="wrapper">
        <h1 class="heading-Text">
          CONTACT US:
          <hr class="black-hr" />
        </h1>
        <div class="contact-Section">
          <form class="contactForm">
            <input type="text" placeholder="Your Name..." />
            <input type="text" placeholder="Email Address..." />
            <input type="text" placeholder="Company..." />
            <input class="message-Box" type="text" placeholder="Message..." />
          </form>
          <div class="map-IMG"></div>
        </div>
        <button class="sendMessage">SEND MESSAGE</button>
      </div>`;
// variables for Gallery Img Page
var galleryImg1Content = `<div class="wrapper">
        <div class="title-Img">
          <div class="gallery-Pic1"></div>
        </div>
        <div class="yellowText">
          <h1 class="galleryTitle-text">
            <span class="galleyTitleNum">1</span>
            Food Festival
          </h1>
        </div>

        <div class="galleryP">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`;
var galleryImg2Content = `<div class="wrapper">
        <div class="title-Img">
          <div class="gallery-Pic1"></div>
        </div>
        <div class="yellowText">
          <h1 class="galleryTitle-text">
            <span class="galleyTitleNum">2</span>
            dee-jay
          </h1>
        </div>

        <div class="galleryP">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`;
// variables for Blog Page Content
var blogPageContent = `<div class="wrapper">
        <!-- Image Header -->
        <div class="blogHeader">
          <div class="date-Box">
            <p>
              <span class="dateNumber">06</span>
              <br />
              <span class="dateMonth">JUN</span>
            </p>
          </div>
        </div>
        <div class="blogText">
          <!-- Text -->
          <h1>Header #1:</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

          <h1>Header #2:</h1>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`

// Var Export
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
    // 
  } else {
    $("nav a").removeClass("whiteText").addClass("blackText");
    $("hr").removeClass("white-hr").addClass("black-hr");
    // Change image src in nav using attr
    $("nav img").attr("src", "images/logo/logo-black.svg")
  }

  // if (pageName == "galleryImg1Content") {
  //   $("div#colorText").removeClass("yellowText").addClass("pinkText");
  // }

  // try & catch to catch any errors
  try {
    eval(pageName);
    $("#app").html(eval(pageName))
  }
  catch (e) {
    console.log("hello", e)
  }
}