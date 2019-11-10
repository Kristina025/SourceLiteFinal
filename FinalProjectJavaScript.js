var request = new XMLHttpRequest();

function firstAPI() {
    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.onload = function() {
        //need to create image element 
        object = JSON.parse(request.response)
        image = object.message 
        console.log(image)
        document.getElementById('pic').setAttribute("src", image)
    }
    request.send()
}