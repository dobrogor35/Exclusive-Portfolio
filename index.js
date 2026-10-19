// adding async and awiat is one way but cleaner with using .then

// async function contact(event) {
//   event.preventDefault():
//   await emailjs
//     .sendForm(
//       'service_bnts8xd',
//       'template_o72r2bn',
//       event.target,
//       q8kgPOxBe9_ap9zcS
//     ).then(() => {
//       console.log('it worked')
//     })

// }

let isModalOpen = false;
let contrastToggle = false;
  const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
 
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  // console.log(x, y)


for (let i = 0; i < shapes.length; ++i) {
   // swap direction for odd  shape only
  const isOdd = i % 2 !== 0
  // console.log(isOdd)
  const boolInt = isOdd ? -1 : 1;
  shapes[i].style.transform =  `translate(${x * boolInt}px, ${y * boolInt}px)` 
}
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark--theme"
  }
  else {
    document.body.classList.remove("dark--theme")
  }
  
}
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }

  isModalOpen = true;
  document.body.classList += " modal--open";
}


function contact(event) {
  event.preventDefault();
  console.log("Contact function triggered");
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_bnts8xd",
      "template_o72r2bn",
      event.target,
      "q8kgPOxBe9_ap9zcS",
    )
    .then(() => {
      // throw new Error("error");
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "This email service is temporarily unavailable. Please contact me directly on email@gmail.com",
      );
    });

  // setTimeout(() => {

  //   console.log('it worked 1')
  // }, 1000);
}
