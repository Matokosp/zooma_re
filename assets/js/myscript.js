// GIF RESET

var img = document.createElement("img"),
    imageUrl = "http://i73.photobucket.com/albums/i231/charma13/love240.gif";
img.src = imageUrl;
document.body.appendChild(img);

window.restartAnim = function () {
    img.src = "";
    img.src = imageUrl;
}
