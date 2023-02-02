//let entrada = parseInt(prompt("Digite o ano que você nasceu"))
//alert(2023+entrada)
//alert(typeof entrada)

//let section=document.querySelector("section")
//section.classList.add("dark")
//section.classList.remove("light")

//function toJedSide(){
//   section.classList.add("light-theme")
//   section.classList.remove("dark-theme")
//}

/*const switchToggle = document.getElementById("switchToggle");

 switchToggle.addEventListener("change", function() {
   if (this.checked) {
     document.body.classList.add("dark-mode");
   } else {
     document.body.classList.remove("dark-mode");
   }
 });*/

const switchToggle = document.querySelector("#switchToggle");

switchToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  
});
