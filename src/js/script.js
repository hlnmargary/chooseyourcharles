var glassesList = document.querySelectorAll('.glassesList');
var beardsList = document.querySelectorAll('.beardsList');
var hatsList = document.querySelectorAll('.hatsList');
var beardsChoice = document.querySelectorAll('.beardsChoice');
var hairstylesChoice = document.querySelectorAll('.hairstylesChoice');
var hairstylesList = document.querySelectorAll('.hairstylesList');
var glassesChoice = document.querySelectorAll('.glassesChoice');
var glassesList = document.querySelectorAll('.glassesList');
var hatsChoice = document.querySelectorAll('.hatsChoice');
var hatsList = document.querySelectorAll('.hatsList');
var accessoriesChoice = document.querySelectorAll('.accessoriesChoice');
var accessoriesList = document.querySelectorAll('.accessoriesList');
var piercingsChoice = document.querySelectorAll('.piercingsChoice');
var piercingsList = document.querySelectorAll('.piercingsList');
var customList = document.querySelectorAll('.customContainer li');
var itemContainers = document.querySelectorAll('#itemContainer');


document.querySelector('.rayban').style.display = "block";
document.querySelector('.charles').style.display = "block";
document.querySelector('.hairstylesContainer').style.display = "none";
document.querySelector('.beardsContainer').style.display = "none";
document.querySelector('.hatsContainer').style.display = "none";
document.querySelector('.glassesContainer').style.display = "none";
document.querySelector('.accessoriesContainer').style.display = "none";
document.querySelector('.piercingsContainer').style.display = "none";




function setCharles(choiceList, styleList) {
  for (let i = 0; i < choiceList.length; i++) {
    choiceList[i].addEventListener('click', function () {
      for (let j = 0; j < styleList.length; j++) {
        if (choiceList[i].dataset.choice === styleList[j].dataset.style) {
          console.log('ih');
          styleList[j].style.display = "block";
        } else {
          styleList[j].style.display = "none";
        }
      }
    });
  };
}


setCharles(beardsChoice, beardsList);
setCharles(hairstylesChoice, hairstylesList);
setCharles(glassesChoice, glassesList);
setCharles(hatsChoice, hatsList);
setCharles(accessoriesChoice, accessoriesList);
setCharles(piercingsChoice, piercingsList);



for (let i = 0; i < customList.length; i++) {
  customList[i].addEventListener('click', function () {
    for (let j = 0; j < itemContainers.length; j++) {
      console.log('kfkjhgnkj');
      if (customList[i].dataset.nav === itemContainers[j].dataset.container) {
        itemContainers[j].style.display = "flex";
      } else {
        itemContainers[j].style.display = "none";
      }
    }
  })
};