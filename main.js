const correctImages = [
 "https://cdn.discordapp.com/attachments/756248386805563414/1365524424463482900/Screenshot_20250425_220623_Photos.jpg?ex=680d9f39&is=680c4db9&hm=273c1e049ec7a3c04c3c9099ee2bcd201c63ace7b03b33536d703be59b1e620c&"    
];

const incorrectImages = [
"https://media.discordapp.net/attachments/756248386805563414/1365524231051280465/Screenshot_20231204_130102_Gallery.jpg?ex=680d9f0a&is=680c4d8a&hm=b9cd39d3d77322fbe8832ca68bbab414c433a19379b0aa522de2c2acda0449f8&=&format=webp&width=818&height=960"
];


function correct() {
    var popup = document.getElementById('correct');

    var popupImage = document.getElementById('cor');
    var r = Math.floor(Math.random() * correctImages.length);
    popupImage.src = correctImages[r];
    
    popup.classList.add('visible');
    setTimeout(function() {
        popup.classList.remove('visible');
    }, 2000);
    updateScore(1);
}


function incorrect() {
    var popup = document.getElementById('incorrect');

    var popupImage = document.getElementById('inc');
    var r = Math.floor(Math.random() * incorrectImages.length);
    popupImage.src = incorrectImages[r];

    popup.classList.add('visible');
    setTimeout(function() {
        popup.classList.remove('visible');
    }, 2000);
    updateScore(0)
}

function updateScore(update) {
    var text = document.getElementById("score").textContent;
    var numbers = text.split('/');
    var score = parseInt(numbers[0]);
    var total = parseInt(numbers[1]);

    score += update;
    total += 1;

    document.getElementById('score').innerHTML = score + "/" + total;
}
