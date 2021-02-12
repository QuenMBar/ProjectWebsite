// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//         dodger.style.left = `${left - 1}px`;
//     }
// }

// function moveDodgerRight() {
//     const rightNumbers = dodger.style.left.replace("px", "");
//     const right = parseInt(rightNumbers, 10);

//     if (right < 360) {
//         dodger.style.left = `${right + 1}px`;
//     }
// }

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
// });

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft();
//     }
// });

const topCupcakesList = [
    {
        name: "",
        img: "./img/Cupcake-1.jpg",
        description: "",
    },
    {
        name: "Creamcheese",
        img: "./img/creamCheese.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
    {
        name: "Creamcheese",
        img: "./img/Cupcake-1.jpg",
        description: "Here is a cupcake",
    },
];

let currentPage = 0;
const cupName = document.getElementById("cupName");
const cupImg = document.getElementById("cupImg");
const cupDisc = document.getElementById("cupDisc");

function setToPage(pageNum) {
    cupName.innerHTML = topCupcakesList[pageNum].name;
    cupDisc.innerHTML = topCupcakesList[pageNum].description;
    cupImg.src = topCupcakesList[pageNum].img;
}

setToPage(0);

function nextPage() {
    currentPage++;
    setToPage(currentPage);
}

function backPage() {
    currentPage--;
    setToPage(currentPage);
}

document.getElementById("nextbutton").addEventListener("click", function () {
    nextPage();
});

document.getElementById("backbutton").addEventListener("click", function () {
    backPage();
});
