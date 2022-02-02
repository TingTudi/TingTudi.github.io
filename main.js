// Register Code
let registerSubmit = () => {
    const fname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (fname.length == 0 || email.length == 0 || password.length == 0) {
        alert("Please fill in all fields");
    }else if (email.includes("@") == false) {
        alert("Please enter a valid email");
    }    
    else {
        alert("This is what would be saved in a text file if we could use node.js:\n" + email + ", " + fname + ", " + password);
    }
}

// Game code
let canvas = document.getElementById("canvas");

// Drop bombs
var img = new Image;
img.src = 'img/explosion.png';

document.addEventListener('mousedown', function(e) {
    var rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    canvasWidth = canvas.offsetWidth;
    canvasHeight = canvas.offsetHeight;

    if(x < 0 || y < 0 || x > canvasWidth || y > canvasHeight){

    } else {
        e = e || window.event;
        var tag = document.createElement('img');
        console.log(e);
        tag.src = img.src;
        tag.style.position = 'absolute';
        tag.style.height = '50px';
        tag.style.width = '50px';
        tag.id = "temp"
        tag.style.top = (e.pageY || e.clientY) - 30 + 'px';
        tag.style.left = (e.pageX || e.clientX) - 25 + 'px';
        this.body.appendChild(tag);
       
    }
    setTimeout(function() {
        document.getElementById("temp").remove()
    }, 500);
}, false)

// Make flags appear
var intervalID = window.setInterval(createFlag, 500);

function createFlag() {
    var img = new Image;
    img.src = 'img/france.png';
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 10, 10, 50, 40)
}