//1zad
$(function(){
    //a)
    $("#1").click(function(){
	var id = $("footer div").last().index();
	$("footer").append('<div>');
	$("footer div").last().append('<p>');
	$("footer div p").last().text(id+2);
    })

    //b)
    $("#2").click(function(){
	$("footer").children().first().remove();
    })

    //c)
    $("#3").click(function(){ 
	$("footer div").eq(2).css("background","green");
    })

    //
    $("#4").click(function(){
    	$("footer div p").text("nowy tekst");
    })
    
});

//2zad
var cars = new Array();
var auto1 = new Auto(1995, 20000, 1000);
var auto2 = new Auto(1996, 30000, 1000);
var auto3 = new Auto(1997, 40000, 1000);
cars.push(auto1);
cars.push(auto2);
cars.push(auto3);

$(function(){
    for(var i=0; i<cars.length; i++){
	$('#table').append(
	    "<tr><td>"+cars[i].rok+
		"</td><td>"+cars[i].przebieg+
		"</td><td>"+cars[i].cena_wyjsciowa+
		"</td><td>"+cars[i].cena_koncowa+		
		"</td></tr>");
    }
})


//3zad
function myHamburger() {
    var x = document.getElementsByTagName("NAV")[0];
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
console.log("do zadania 4 działa");
//4zad
$(function(){
    var acc = document.getElementsByClassName("accordion");
    console.log(acc);
    for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	    console.log("Lisnery zaladowane");
	    for (let j of acc){
		j.classList.remove("active");
		console.log("active usuwane");
		j.nextElementSibling.style.maxHeight = null;
	    };
	    this.classList.toggle("active");
	    console.log("active dodany");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	    } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
		console.log("wys zwiększona");
	    }
	});
    }
})
