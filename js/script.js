// let a = document.querySelectorAll('.ia')[0];

// a.style.display = "none";

// function func()
// {
//     a.style.display = "inline";
// }
// function ncuk()
// {
//     a.style.display = "none";
// }



// BACK TO TOP BUTTON

let mybutton = document.getElementById("myBtn");

window.onscroll = function(){
    scrollFunction()};

function scrollFunction()
{
  if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
  {
    mybutton.style.display = "block";
  }
  else
  {
    mybutton.style.display = "none";
  }
}

function topFunction()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




  


