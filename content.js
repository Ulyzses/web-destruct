function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const anchors = [...document.querySelectorAll('a')];
const html = document.querySelector('html');

if (anchors.length) {
    shuffle(anchors);

    const half = anchors.slice(0, Math.ceil(anchors.length / 3));

    console.log(half);

    half.forEach(anchor => {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('href', '/');
        anchor.style.color = 'red';

        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.replaceState({}, '', '/');
            html.innerHTML = '';

            alert("Oh no you've pressed the self-destruct button");

            // Create body element
            var bodyElement = document.querySelector("body");
            bodyElement.style.margin = "0px";

            // Create div element
            var divElement = document.createElement("div");
            divElement.style.position = "absolute";
            divElement.style.width = "100%";

            // Create video element
            var videoElement = document.createElement("video");
            videoElement.style.width = "100%";
            videoElement.style.height = "100%";
            videoElement.style.maxHeight = "100vh";
            videoElement.style.maxWidth = "100vw";
            videoElement.style.objectFit = "cover";
            videoElement.style.display = "flex";
            videoElement.setAttribute("poster", "https://y.yarn.co/7e2bcd6e-cc54-4757-bab3-aec233032457_screenshot.jpg");
            videoElement.setAttribute("autoplay", "");

            // Create source element
            var sourceElement = document.createElement("source");
            sourceElement.setAttribute("src", "https://y.yarn.co/7e2bcd6e-cc54-4757-bab3-aec233032457.mp4");
            sourceElement.setAttribute("type", "video/mp4");

            // Append source to video, video to div, and div to body
            videoElement.appendChild(sourceElement);
            divElement.appendChild(videoElement);
            bodyElement.appendChild(divElement);

            html.style.boxSizing = "border-box";
            html.style.margin = "0px";
        });
    });
}