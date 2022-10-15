// counter Animations 
// let num = document.querySelectorAll('.number');
// let counter = document.getElementById('counter');
// console.log(counter.offsetTop)
// let speed = 100;

// if (counter.offsetTop===870) {
//     num.forEach((currentNum)=>{
//         const updateNumber = () =>{
//             const targetNum = parseInt(currentNum.dataset.number);
//             const initialdata = parseInt(currentNum.innerText);
    
//             const incrementNum = Math.trunc(targetNum/speed)
    
//             if(initialdata<targetNum){
//                 currentNum.innerText =` ${initialdata+incrementNum}+`;
    
//                 setTimeout(updateNumber,10);
//             }
    
//         };
//         updateNumber();
    
//     });
//     console.log('if running')
// }

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});



// mail smpt js 
let user_name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let subject = document.getElementById('subject').value;
let message = document.getElementById('message').value;
console.log(user_name)
console.log(email)
console.log(subject)
console.log(message)


function sendEmail() {
  Email.send({
      Host : "smtp.mailtrap.io",
      Username : "adityazende6710@gmail.com",
      Password : "adityazende@gmail.com",
      To : 'adityazende6710@gmail.com',
      From : email,
      Subject : subject,
      Body : message
  }).then(
    message => alert(message)
  );
  }

function showdata(){
  alert(user_name,email,subject,message)
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 26.88201455717937, lng: 75.74761178729632 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

// 26.88201455717937, 75.74761178729632


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;