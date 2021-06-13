let time = 6000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#home-image img")
    max = images.length;
    var slider;

    function clearSelected(){
        clearInterval(slider);
        images[currentImageIndex].classList.remove("selected")
    }

    function setSelected(){
        images[currentImageIndex].classList.add("selected")
        start()
    }

    function next(){
        clearSelected()

        if(currentImageIndex >= (max-1)){
            currentImageIndex = 0
        } else {currentImageIndex++}

        setSelected()
    }

    function back(){
        clearSelected()

        if(currentImageIndex == 0){
            currentImageIndex = max -1
        } else {currentImageIndex--}

        setSelected()
    }
 
    function nextImage(){
        images[currentImageIndex].classList.remove("selected")
        currentImageIndex++

        if(currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex].classList.add("selected")
    }
  
    function start(){
        slider = setInterval(() => {
            nextImage()
        }, time)
    }

    window.addEventListener("load",start)


