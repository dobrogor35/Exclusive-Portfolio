
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

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
      'service_bnts8xd',
      'template_o72r2bn',
      event.target,
      'q8kgPOxBe9_ap9zcS'
    ).then(() => {
      // throw new Error("error");
     loading.classList.remove("modal__overlay--visible");
     success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "This email service is temporarily unavailable. Please contact me directly on email@gmail.com"
      );
    });



 

  // setTimeout(() => {

  //   console.log('it worked 1')
  // }, 1000); 
 
}
let isModalOpen = false; 
function toggleModal() {
   isModalOpen = !isModalOpen;
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  console.log("Modal clicked!");
  }

  isModalOpen = true;
  document.body.classList += " modal--open";
}