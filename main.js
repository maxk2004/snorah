const correctImages = [
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898678200348692/Clipped_image_20240116_200837.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898678816903268/Clipped_image_20240116_201131.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898679924199474/Clipped_image_20240116_201323.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898680406540349/Picsart_24-01-16_20-14-03-357.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898681178304613/Picsart_24-01-16_20-15-18-599.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898855040598037/Clipped_image_20240116_201546.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898856135299232/Picsart_24-01-16_20-17-03-279.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898856911257650/Clipped_image_20240116_201722.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898858144370718/Clipped_image_20240116_201753.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898858744168609/Clipped_image_20240116_202022.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898859792732190/Clipped_image_20240116_202015.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196983716073979995/Clipped_image_20240117_020541.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196984267025154148/Picsart_24-01-17_02-07-14-159.png"
];

const incorrectImages = [
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899287695634502/Clipped_image_20240116_201237.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899288266047508/Clipped_image_20240116_201247.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899289666957342/Clipped_image_20240116_201553.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196987999238488185/Picsart_24-01-17_02-22-50-439.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196986856680730694/Picsart_24-01-17_02-18-13-830.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899290950414416/Clipped_image_20240116_201822.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899291306917978/Clipped_image_20240116_201804.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899291676020777/Clipped_image_20240116_201914.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899292275814582/Picsart_24-01-16_20-21-24-454.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196983130066792448/Picsart_24-01-17_02-03-10-473.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196984266727366776/Clipped_image_20240117_020729.png"
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