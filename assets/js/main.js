//Inicio el jquery
$(document).ready(function() {
    $.ajax({
    	//Inserto la url dej json que genere
        url: 'https://pokeapi.co/api/v2/pokemon/',
        //Genero el llamado
        type: 'GET',
        //el tipo de dato
        dataType: 'JSON',
        //limito los elementos llamados
        data: {"limit": '811'},
    })
    
    .done(function(res) {
        console.log("success");
        console.log(res);
        //el for recorre todas las imagenes 
        for (var i = 1; i < 719; i++) {
        	//las imagenes de la api son recorridas por el for
            var pokeimg = $("<img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
            //finalmente le doy un append que permite que se imprima en el navegador
            $("div.pokemons").append(pokeimg);
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    })
});

/*
$(document).ready(function() {
	var dibujarGifs = function(data){
//		var gif = "";
//		var url = "";
		data.forEach(function(element){
//			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif, url));
		})
	}	

	var armarTemplate = function(gif,url){
		var t= "<div class='elemento'><img src'" + gif + "'/><a href='" + url + "'>Ver más</a></div>"
		return t;
	}
	var ajaxGif = function(gif){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokedex/1/',
			type: 'GET',
			datatype: 'json',
			data: {
//				q : gif,
//				api_key: 'dc6zaTOxFJmzC'
			}
		})
		.done(function(response){
			console.log(response);
			dibujarGifs(response.data);
		})
		.fail(function(){
			console.log("error");
		})
	}

	$("#buscar-gif").click(function(event){
		console.log("Entro");
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	})
});
*/

/*

$(document).ready(function() {
	
	var mutaciones = function(data){
		var img = "";
		data.forEach(function(element){
		$("#elementos").append(armarTemplate(img));	
		})		
	}
	var armarTemplate = function(img,url){
		var t= "<div class='elemento'><img src'" + img + "'/><a href='" +  "'>Ver más</a></div>"
		return t;
	}	
	*/
/*
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'Get',
		dataType: 'JSON',
		data: {"limit": '1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});
	
	var seePokemon = function(data){
		data.forEach(function(element){
			var pokei = element.name;
			//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
			//$("#pokemon").append("<div class='pokelinea1'><img class='pokeimg' src='http://img.pokemondb.net/artwork/"+pokeName+ ".jpg'><span class='namePoke text-center'>"+pokeName+"</span>"+"</div> ");
			$("#pokemons").append('<div class="pokemones"><img class="pokemones" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokename + ".jpg><')
		})
	}


$(document).ready(function() {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/' https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/,
		type: 'Get',
		dataType: 'json',
		data: {"limit": '811'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});

*/