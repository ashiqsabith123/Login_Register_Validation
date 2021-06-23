function clicked(){
    var a = document.getElementById("alert");
    a.style.display = 'block';
}

function clicke(){
    var b = document.getElementById("alert1");
    b.style.display = 'block';
}

function valu(){
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    event.preventDefault();
    
    

    if(user==""){
        console.log(user);
        var ex = document.getElementById("ecxl");
        ex.style.display = 'block';
    }

    else{
        var ex = document.getElementById("ecxl");
        ex.style.display = 'none'; 
        console.log("no")
    }

    if(pass==""){
        console.log(user);
        var ex = document.getElementById("ecxl1");
        ex.style.display = 'block';
    }

    else{
        var ex = document.getElementById("ecxl1");
        ex.style.display = 'none'; 
        console.log("no")
    }


}