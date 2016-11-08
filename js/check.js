var gana_b = false;
var gana_c = false;
var puntos_b = 0;
var puntos_c = 0;
var puntos_ball;
var puntos_cross;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");



function triki () {

	if (ball[0][0] + ball[1][0] + ball[2][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+"0");
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');

		}
		gana_b = true;
	}

	else if (ball[0][1] + ball[1][1] + ball[2][1] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+"1");
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_b = true;
	}

	else if (ball[0][2] + ball[1][2] + ball[2][2] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+"2");
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_b = true;
	}
	else if (ball[0][2] + ball[0][1] + ball[0][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c0"+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_b = true;
	}

	else if (ball[1][2] + ball[1][1] + ball[1][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c1"+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_b = true;
	}
	else if (ball[2][2] + ball[2][1] + ball[2][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c2"+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_b = true;
	}
	else if (ball[0][0] + ball[1][1] + ball[2][2] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_b = true;
	}

	else if (ball[0][2] + ball[1][1] + ball[2][0] == 3){
		j=2;
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+j);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
			j--;
		}
		gana_b = true;
	}
	//*********************************//////////////***************////////////

	else if (cross[0][0] + cross[1][0] + cross[2][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+"0");
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');

		}
		gana_c = true;
	}

	else if (cross[0][1] + cross[1][1] + cross[2][1] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+"1");
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_c = true;
	}

	else if (cross[0][2] + cross[1][2] + cross[2][2] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+"2");
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_c = true;
	}
	else if (cross[0][2] + cross[0][1] + cross[0][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c0"+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_c = true;
	}

	else if (cross[1][2] + cross[1][1] + cross[1][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c1"+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_c = true;
	}
	else if (cross[2][2] + cross[2][1] + cross[2][0] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c2"+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_c = true;
	}
	else if (cross[0][0] + cross[1][1] + cross[2][2] == 3){
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+i);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
		}
		gana_c = true;
	}

	else if (cross[0][2] + cross[1][1] + cross[2][0] == 3){
		j=2;
		for(i=0; i<3; i++) {
			el = document.getElementById("c"+i+j);
			el.style.backgroundColor = "red";
			el.classList.add('animated', 'tada');
			j--;
		}
		gana_c = true;
	}

	Ganador();
}

function Ganador() {

	if(gana_b) {
		tabla = document.getElementById("board");
		tabla.style.pointerEvents = 'none';
		puntos_b++;
		puntos_ball = document.getElementById("puntos_ball");
		puntos_ball.innerHTML = puntos_b;
		p2.style.transform = "none";
		p1.style.opacity = "1";
	}

	if(gana_c) {
		tabla = document.getElementById("board");
		tabla.style.pointerEvents = 'none';
		puntos_c++;
		puntos_cross = document.getElementById("puntos_cross");
		puntos_cross.innerHTML = puntos_c;
		p1.style.transform = "none";
		p2.style.opacity = "1";
	}

	if (empate == 9 && !gana_b && !gana_c) {
		tabla = document.getElementById("board");
		puntos_cross = document.getElementById("puntos_cross");
		puntos_ball = document.getElementById("puntos_ball");
		puntos_b++;
		puntos_c++;
		puntos_cross.innerHTML = puntos_c;
		puntos_ball.innerHTML = puntos_b;
		swal("Han empatado!")
		p2.style.transform = "none";
		p2.style.opacity = "1";
		p1.style.transform = "none";
		p1.style.opacity = "1";
	}
		
}


var np = document.getElementById("np");

np.addEventListener('click', ClearBoard);