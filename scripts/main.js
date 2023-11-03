function changeImage() {
    var image = document.getElementById('kitten');
    if (image.src.endsWith('images/young_spoons.jpg')) {
        image.src = 'images/adult_spoons.jpg';
    } else {
        image.src = 'images/young_spoons.jpg';
    }
}

function showText() {
    var paragraph = document.getElementById('pop-up-text');  
    paragraph.innerHTML = "Hi! Our names are Cody and Casey and we are two Pomeranian puppies that live next door to Spoons"
}

function hideText() {
    var paragraph = document.getElementById('pop-up-text');
    paragraph.innerHTML = ""
}

