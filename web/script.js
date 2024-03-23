let requestCount = 0;

function submitRequest(event) {
    event.preventDefault();
    const input = document.getElementById("username");
    const userName = input.value;

    document.getElementById("myName").innerHTML
        = "Hi, " + userName + ", here is a random image for you..."
    requestCount++;
     setTimeout(() => {
        document.getElementById("myName").innerHTML = "";
        fetchPhoto(requestCount);
     }, 3000);

}

function fetchPhoto(requestCount) {
    fetch('https://source.unsplash.com/random/400x400?sig={requestCount}')
    .then((response) => {
        const img = document.createElement("img");
        img.src = response.url
        document.getElementById('photo').innerHTML = "";
        document.getElementById('photo').append(img);
    })
    .catch(err => {
        console.error("Error fetching photo:", err);
    });
}