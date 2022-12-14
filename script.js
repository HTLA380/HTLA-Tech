let menuBar = document.querySelector(".menu-bar")
let headerImg = document.querySelector(".header-img")
let body = document.querySelector("body")
let footer = document.querySelector("footer")
let AllImgSize = "desktop"


const openMenu = () => {
  if(menuBar.classList.contains("menu-active")){
      menuBar.classList.add("d-none")
      menuBar.classList.remove("menu-active")
    }
  else{
    if(window.innerWidth < 768) {
      menuBar.classList.remove("d-none")
      menuBar.classList.add("menu-active")
    }
  }
}

window.addEventListener("resize", () => {
  changeImgSize()
  pageContent();
  if(window.innerWidth > 768) {
    openMenu();
  }
})

const changeImgSize = () => {
  if(window.innerWidth <= 587) {
    AllImgSize = "mobile"
  }else{
    AllImgSize = "desktop"
  }
}

changeImgSize()

const pageContent = () => {
  headerImg.style.backgroundImage = `url(images/${AllImgSize}/image-header.jpg)` 
  let AllContentContainer = document.createElement("div")
  AllContentContainer.className = "all-content-container"
  AllContentContainer.innerHTML = `
    <section class="content-section row row-cols-sm-2 row-cols-1">
    <div class="text-detail text-md-start text-center col d-flex flex-column justify-content-center order-sm-0 order-1">
      <h1 class="text-detail-title">Transform your brand</h1>
      <p class="my-lg-4 my-lg-2 my-sm-1">
        We are a full-service creative agency specializing  in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.
      </p>
      <h5 class="mt-lg-3 mt-2  learn-more learn-more-yellow">Learn more</h5>
    </div>
    <img class="col p-0 order-sm-1 order-0" src="images/${AllImgSize}/image-transform.jpg" alt="">
  </section>

  <section class="content-section row row-cols-sm-2 row-cols-1">
    <img class="p-0" src="images/${AllImgSize}/image-stand-out.jpg" alt="">
    <div class="text-detail  text-md-start text-center d-flex flex-column justify-content-center">
      <h1 class="text-detail-title">Stand out to the right audience</h1>
      <p class="my-lg-4 my-lg-2 my-sm-1">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
      </p>
      <h5 class="mt-lg-3 mt-lg-2 mt-sm-1 learn-more learn-more-red">Learn more</h5>
    </div>
  </section>

  <section class="img-column-container row row-cols-sm-2 row-cols-1">
    <div class="img-section-container col p-0">
      <img src="images/${AllImgSize}/image-graphic-design.jpg" alt="">
      <div class="text-overlay d-flex flex-column justify-content-end graphic-design text">
        <h3 class="my-4">Graphic Desgin</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
        </p>
    </div>
    </div>
    <div class="img-section-container col p-0">
      <img src="images/${AllImgSize}/image-photography.jpg" alt="">
      <div class="text-overlay d-flex flex-column justify-content-end photography">
        <h3 class="my-4">Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </p>
    </div>
    </div>
  </section>

  <section class="client-testimonial text-center">
    <h4>CLIENT TESTIMONIALS</h4>
    <div class="row row-cols-md-2 row-cols-lg-3 row-cols-1 justify-content-center">
      <div class="each-client col p-3">
        <img src="images/image-emily.jpg" alt="" class="client-profile-pic mb-2">
        <p class="client-response my-5">
          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
        </p>

        <h5 class="client-name">Emily R.</h5>
        <p class="my-2 client-profession">Marketing Director</p>
      </div>
      <div class="each-client col p-3">
        <img src="images/image-thomas.jpg" alt="" class="client-profile-pic mb-2">
        <p class="client-response my-5">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
        </p>

        <h5 class="client-name">Thomas S.</h5>
        <p class="my-2 client-profession">Chief Operating Officer</p>
      </div>
      <div class="each-client col p-3">
        <img src="images/image-jennie.jpg" alt="" class="client-profile-pic mb-2">
        <p class="client-response my-5">
          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        </p>

        <h5 class="client-name">Jennie F.</h5>
        <p class="my-2 client-profession">Business Owner</p>
      </div>
    </div>
  </section>

  <section class="photorow row row-cols-2 row-cols-sm-4">
    <div class="col p-0">
      <img src="images/${AllImgSize}/image-gallery-milkbottles.jpg" alt="">
    </div>
    <div class="col p-0">
      <img src="images/${AllImgSize}/image-gallery-orange.jpg" alt="">
    </div>
    <div class="col p-0">
      <img src="images/${AllImgSize}/image-gallery-cone.jpg" alt="">
    </div>
    <div class="col p-0">
    <img src="images/${AllImgSize}/image-gallery-sugar-cubes.jpg" alt="">
    </div>
  </section>
  `
  if(document.querySelector(".all-content-container")) {
    document.querySelector(".all-content-container").remove()
  }
  body.insertBefore(AllContentContainer, footer)
}

console.log(body.children)
window.addEventListener("DOMContentLoaded", pageContent)
