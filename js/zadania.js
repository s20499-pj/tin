//1zad
function zad1(num1, num2, num3){
    var numbers = [num1, num2 ,num3];
	numbers.sort();
    return Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) === Math.pow(numbers[2], 2);
}

//2zad
function zad2(start, end, d){
    var arrayOfNumbers = [];
    for (var i = start; i <= end; i++) {
        if (i%d === 0) arrayOfNumbers.push(i);
    }
    
    if (arrayOfNumbers.length > 0) { 
        console.log(arrayOfNumbers)
    } else {
        console.log("Numbers not found")
    }
};

//3zad
function zad3(num){
    var arr =[];
    for (var i=1; i<=num; i++) {
	for( var j=1; j<=num; j++){
	    arr.push(i*j);
	}
	console.log(arr);
	arr = [];
    }
}



//4zad
function zad4(length){
    var fib = [0, 1];
    for (var i=2; i<length; i++) {
        fib.push(fib[i -2] + fib[i-1]);
    }
    console.log(fib);
}

//5zad
function zad5(x){
    for(i=1; i<=x; i++){
	console.log("*".repeat(i));
    }
}

//zad6
function zad6(height){
    var h=height;
    for(var i=0; i<height; i++){
	console.log('*'.repeat(h)+
		    ' '.repeat((i)*2) +
		    '*'.repeat(h));
	h--;
    }
    console.log('*'.repeat(height*2));
}

//7zad i 8zad

function rectangle(a, b){
    return a*b;
}
function triangle(a, height){
    return (a*height)/2;
}
function trapezium(a, b, height){
    return ((a+b)*height)/2;
}
function parallelogram(a, height){
    return a*height;
}

function zad7(figure, ...params){
    switch(figure) {
        case rectangle :
            console.log(rectangle(...params));
            break;
        case triangle:
            console.log(triangle(...params));
            break;
        case trapezium:
            console.log(trapezium(...params));
            break;
    case parallelogram:
	    console.log(parallelogram(...params));
            break;
        default:
            console.log('Something went wrong. Please try again');
    }
}

function zad8(func, ...params){
    console.log(func(...params));
}


//zad9
function zad9(height){
    function factorialize(num){ //silnia
	if (num == 0 || num == 1) 
            return 1;
	else {
            return (num * factorialize(num - 1));
	}
    };

    function newtonsSymbol(i, j){
	return factorialize(i) / (factorialize(j) * factorialize(i-j));
    }
    
    for (let i = 0; i <= height; i++){
        var insideTriangle = [];
        for (let j = 0; j <= i; j++) {
            insideTriangle.push(newtonsSymbol(i,j));
        }
	console.log(insideTriangle);
    }
}

//zad10
class Auto {
    constructor(rok=0, przebieg=0, cena=0) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena;
        this.cena_koncowa = cena;
    }

    a(){ //a
	this.cena_wyjsciowa +=1000;
	return this.cena_wyjsciowa;
    }

    get b(){ //b
	this.cena_koncowa  = this.cena_wyjsciowa - (this.rok * 1000);
	return this.cena_koncowa;
    }

    get c(){ //c
	//10=100 000km / 10 000pln
	this.cena_koncowa = this.cena_wyjsciowa - (this.przebieg / 10);
	return this.cena_koncowa;
    }

    d(przebieg, rok){ //d
	this.rok=rok;
	this.przebieg=przebieg;
	this.cena_koncowa=this.cena_wyjsciowa-(this.rok*1000)-(this.przebieg/10);
	return this.cena_koncowa;
    }
};

var auto = new Auto;

//e
var cars = [];

function e(car) {
    if (car.cena_koncowa > 10000) cars.push(this);
    return cars.length;
}
   
function f(){ //f
    cars.forEach(auto.rok += 1);
    return console.log("ok");
}
