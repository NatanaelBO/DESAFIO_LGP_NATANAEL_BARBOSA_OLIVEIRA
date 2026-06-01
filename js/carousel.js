let carouselArr = [];

class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;  
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;
            Carousel._show(0); 
            Carousel._interval = setInterval(() => Carousel.Next(), 8000);
        } else {
            throw "Method Start needs an Array variable.";
        }
    }

    static _show(index) {
        const item = Carousel._arr[index];

        const carouselDiv = document.getElementById("carousel");
        carouselDiv.style.backgroundImage = "url('img/" + item.image + "')";
        carouselDiv.style.backgroundSize = "cover";
        carouselDiv.style.backgroundPosition = "center";

        const titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = "<a href='" + item.url + "'>" + item.title + "</a>";

        carouselDiv.style.cursor = "pointer";         
        carouselDiv.onclick = () => window.location.href = item.url;
    }

    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel._show(Carousel._sequence);
        Carousel._resetInterval();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel._show(Carousel._sequence);
        Carousel._resetInterval();
    }

    static _resetInterval() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(() => Carousel.Next(), 8000);
    }
}