var myLinks = document.querySelectorAll(".myLinks");
        var pics = document.querySelectorAll(".all");

        for(var i=0; i<myLinks.length; i++){
            myLinks[i].onclick = function(e){
                e.preventDefault();
                for(var j=0; j<pics.length; j++){
                    if(pics[j].classList.contains(this.getAttribute("data-car"))){
                        pics[j].style.display = "block";
                    }
                    else{
                        pics[j].style.display = "none";
                    }
                }
            };
        }