const correctImages = [
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898678200348692/Clipped_image_20240116_200837.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898678816903268/Clipped_image_20240116_201131.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898679425085562/Clipped_image_20240116_201316.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898679924199474/Clipped_image_20240116_201323.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898680406540349/Picsart_24-01-16_20-14-03-357.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898681178304613/Picsart_24-01-16_20-15-18-599.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898855040598037/Clipped_image_20240116_201546.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898856135299232/Picsart_24-01-16_20-17-03-279.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898856911257650/Clipped_image_20240116_201722.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898858144370718/Clipped_image_20240116_201753.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898858744168609/Clipped_image_20240116_202022.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196898859792732190/Clipped_image_20240116_202015.png"
];

const incorrectImages = [
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899287695634502/Clipped_image_20240116_201237.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899288266047508/Clipped_image_20240116_201247.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899289666957342/Clipped_image_20240116_201553.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899290036043816/Clipped_image_20240116_201619.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899290459672606/Clipped_image_20240116_201626.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899290950414416/Clipped_image_20240116_201822.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899291306917978/Clipped_image_20240116_201804.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899291676020777/Clipped_image_20240116_201914.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899292275814582/Picsart_24-01-16_20-21-24-454.png",
    "https://cdn.discordapp.com/attachments/756248386805563414/1196899328942415963/Clipped_image_20240116_201950.png"
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
}


function incorrect() {
    var popup = document.getElementById('incorrect');

    var popupImage = document.getElementById('inc');
    var r = Math.floor(Math.random() * incorrectImages.length);
    console.log(r);
    popupImage.src = incorrectImages[r];

    popup.classList.add('visible');
    setTimeout(function() {
        popup.classList.remove('visible');
    }, 2000);
}