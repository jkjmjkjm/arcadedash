function startLoading() {
    const element = document.getElementById("loadingScreen")
    element.hidden = false; element.style.transition = "opacity 0.3s"; element.style.opacity = 0; setTimeout(() => element.style.opacity = 1, 10);
}
function stopLoading() {
    const element = document.getElementById("loadingScreen")
    element.style.transition = "opacity 0.3s"; element.style.opacity = 0; setTimeout(() => element.hidden = true, 300);

}

function fetchURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText)
        }
    };
    xhr.send();
}


function startDoing() {
    //Check if Hack Club API is alive
    fetchURL("https://hackhour.hackclub.com/ping", (response) => {
        alert(response);
        stopLoading();
    })
}

document.addEventListener("DOMContentLoaded", startDoing)