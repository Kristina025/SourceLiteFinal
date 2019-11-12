var request = new XMLHttpRequest();

function firstAPI() {
    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.onload = function() {
        object = JSON.parse(request.response)
        image = object.message 
        console.log(image)
        document.getElementById('pic').setAttribute("src", image)
        document.getElementById("pic").style.display="block";
        document.getElementById("Card-Image").style.display="block";
    }
    request.send()
}