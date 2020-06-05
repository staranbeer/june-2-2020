const dropClick = document.getElementById('dropdownClick');

dropClick.addEventListener('click', function(){
    if(dropClick.className === "topnav"){
        dropClick.className += " responsive";

    }else{
        dropClick.className = "topnav";
    }
})