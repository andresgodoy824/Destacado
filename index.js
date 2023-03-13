
/*
const form = document.getElementById("myForm");

const elements = form.elements;

var firstName = elements["first-name"];
var lastName = elements["last-name"];
var email = elements["email"];
var phone = elements["phone"];

var location;
var service;
var images = [];
var referrer = elements.referrer;
var availability = elements.availability;

/*
elements["car-picture"].addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    for (let image of e.target.files) {
      var src = URL.createObjectURL(image);
      images.push(src)
          
      //console.log(src)
      //const img = document.createElement("img");
      //img.src = src;
      //console.log(img)
      //document.body.appendChild(img)

    }
  }
});
form.addEventListener("submit", (event) => {
  console.log("clicked")

  elements.location.forEach(element => {
    if (element.checked) {
      location = element;
    }
  });

  elements["detail-type"].forEach(element => {
    if (element.checked) {
      service = element;
    }
  });
  var info = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    location: location.value,
    service: service.value,
    //images: images[0],
    referrer: referrer.value,
    availability: availability.value
  }
  console.log(info)
  event.preventDefault();
  /*
  emailjs.send("service_ldwpana", "template_f8di4e5", info).then(() => {
    console.log('SUCCESS!');
    return;
  }, (error) => {
    console.log('FAILED...', error);
  });
});
*/
