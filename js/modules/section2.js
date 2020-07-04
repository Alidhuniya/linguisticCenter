export const langList = async () => {
    const url = "https://alidhuniya.github.io/linguisticCenter/lang.json";
    const data = await fetch (url);
    const res = await data.json();
    const result = res;
      // console.log(result.languages);

    const heading = document.querySelector(".container2__h3").innerHTML = `${result.chooseLangHeading}`;


let output = '';

for (var i in result.languages) {
    output += `
    <div class="container2__langSection">
         <img class="container2__img" src="${result.languages[i].flagImg}" alt = "flag">
      <h4 class="container2__h4">${result.languages[i].flagHeading}</h4>
         </div>
    `
}
const langList = document.querySelector(".container2__langList").innerHTML = output;

}


// const slider = document.querySelector(".container2__langList");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", e => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2;
//   slider.scrollLeft = scrollLeft - walk;
// });