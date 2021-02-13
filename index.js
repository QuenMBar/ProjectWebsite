const topCupcakesList = [
    {
        name: "Best Flavors",
        img: "./img/Cupcake-1.jpg",
        description: "This is a list of all the cupcake flavors that you should try.",
    },
    {
        name: "Red Velvet and Cream Cheese",
        img: "./img/red-velvet.jpg",
        description: "A always popular cupcake that can be found at any establishment.",
    },
    {
        name: "Chocolate Peanut Butter",
        img: "./img/Chocolate-with-Peanut-Butter.jpg",
        description: "Taking all the advantages of chocolate, and adding peanut butter into the mix.",
    },
    {
        name: "Cookies and Cream",
        img: "./img/Cookies-and-Cream.jpg",
        description: "A classic flavor that tastes good no matter if it's ice cream or cupcakes.",
    },
    {
        name: "Salted Caramel",
        img: "./img/salted-caremel.jpg",
        description: "You'll either love it or hate it, there is no in-between.",
    },
    {
        name: "Chocolate",
        img: "./img/chocolate.jpg",
        description: "Simple and delicious.  This cupcake will never go out of style.",
    },
    {
        name: "Lemon",
        img: "./img/lemon.jpg",
        description: "A perfect cupcake for a hot summer day.  It tastes healthy and refreshing.",
    },
    {
        name: "Cinnamon",
        img: "./img/cinimon.jpg",
        description: "A cupcake that you cannot go wrong with.  It tastes like it sounds, great.",
    },
    {
        name: "Pumpkin",
        img: "./img/pumpkin.jpg",
        description: "A great cupcake for the fall.",
    },
    {
        name: "Raspberry",
        img: "./img/raspberry.jpg",
        description: "A good cupcake to pair with lemon cupcakes on summer days.",
    },
    {
        name: "Vanilla",
        img: "./img/Vanilla.jpg",
        description: "The classic cupcake that will be around as long as cupcakes exist.",
    },
];

let currentPage = 0;
const cupName = document.getElementById("cupName");
const cupImg = document.getElementById("cupImg");
const cupDisc = document.getElementById("cupDisc");

function setToPage(pageNum) {
    if (topCupcakesList[pageNum].name != "") {
        cupName.innerHTML = "Flavor: " + topCupcakesList[pageNum].name + " Cupcakes!";
    } else {
        cupName.innerHTML = "";
    }
    cupDisc.innerHTML = topCupcakesList[pageNum].description;
    cupImg.src = topCupcakesList[pageNum].img;
}

setToPage(0);

function nextPage() {
    if (currentPage < 10) {
        currentPage++;
        setToPage(currentPage);
    }
}

function backPage() {
    if (currentPage > 0) {
        currentPage--;
        setToPage(currentPage);
    }
}

document.getElementById("nextButton").addEventListener("click", function () {
    nextPage();
});

document.getElementById("backButton").addEventListener("click", function () {
    backPage();
});
