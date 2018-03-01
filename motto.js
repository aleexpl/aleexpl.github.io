
	var timer = setInterval(refresh, 3000);

	var motto = [
	"Alumno de informática", 
	"Estudio en IES Henri Matisse",
	"Me interesa la programación",
	"y sus aplicaciones en la educación",
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
