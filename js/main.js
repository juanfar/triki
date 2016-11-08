var board = new Array(3);
var ball = new Array(3);
var cross = new Array(3);
var turn;
var empate = 0;

function ClearCell(x,y) {
	board[x][y] = 0;
	ball[x][y] = 0;
	cross[x][y] = 0;
	cell = document.getElementById("c" + x + y);
	cell.innerHTML = "";
	cell.style.backgroundColor = "transparent";
}

function ClearBoard() {
	for (i=0; i<3; i++)
		for (j=0; j<3; j++) {
			ClearCell(i,j);
		}
}

function PaintCell (x,y) {
	cell = document.getElementById("c" + x + y);
	cell.innerHTML = "<img class='animated bounceIn' src=img/"+turn+".png>";
	board[x][y] = 1;

	empate += board[x][y];

	p1 = document.getElementById("p1");
	p2 = document.getElementById("p2");


	if (turn == "bola"){
		p1.style.transform = "none";
		p1.style.opacity = "0.1";
		p2.style.transform = "scale(1.4,1.4)";
		p2.style.opacity = '1';
		turn = "equis";
		ball[x][y] = 1;
	}
	else {
		p2.style.transform = "none";
		p2.style.opacity = "0.1";
		p1.style.transform = "scale(1.4,1.4)";
		p1.style.opacity = '1';
		turn = "bola";
		cross[x][y] = 1;
	}
	
	triki();

}

function SelectCell(x, y) {
	if (board[x][y] == 0)
		PaintCell(x, y);
	else
		swal("Error!","Selecciona una casilla vacia!", "error");
}

function autoplay() {
	for (i=0; i<3; i++) board[i] = new Array(3);

	for (i=0; i<3; i++) ball[i] = new Array(3);

	for (i=0; i<3; i++) cross[i] = new Array(3);
	
	turn = "bola";

	ClearBoard();
}

autoplay();

/*var np = document.getElementById("np");

np.addEventListener('click', autoplay);*/