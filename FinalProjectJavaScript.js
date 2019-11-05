var request = new XMLHttpRequest();

function firstAPI() {
    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.onload = function() {
        console.log(request.response)
    }
    request.send()
}

