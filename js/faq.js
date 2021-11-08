const itensPerguntasERespostas = document.querySelectorAll('.item');

itensPerguntasERespostas.forEach(function(item){
	item.addEventListener('click', function(){

		const estaAtiva = item.classList.contains('ativo')
		
		itensPerguntasERespostas.forEach(function(item){
			item.classList.remove('ativo')
		})

		if(!estaAtiva) {
			item.classList.add('ativo')
		}else {
			item.classList.remove('ativo')
		}

	})
})

