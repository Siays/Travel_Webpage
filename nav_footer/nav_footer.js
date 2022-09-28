function topnav() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        };
		
function scrollFunction() {
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    document.getElementById("logo1").style.maxHeight = "0px";
  } else {
    document.getElementById("logo1").style.maxHeight = "100px";
	}
}

window.onscroll = function(){scrollFunction();};