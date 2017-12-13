
		var myIndex = 0;
    activeSlideshow();

    function activeSlideshow() {
      var i;
      var x = document.getElementsByClassName("myslides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(activeSlideshow, 2000); // Change image every 2 seconds
      x[myIndex].style.opacity = 1;
    }

