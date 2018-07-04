$(function(){

	//Slides dos menus
	$('li').hover(function(){
		$(this).find('.submenu').slideDown('slow');
	},
		function(){
			$(this).find('.submenu').fadeToggle('medium');
	});


	//LightBox dos itens
	$('.itens a').bind('click', function(){
		var img = $(this).find('img').attr('src');

		$('.bgBox').css('display', 'block');
		$('.contentBox button').css('display', 'block');
		$('.contentBox img').attr('src', img);
		$('.contentBox').fadeIn('fast');
	});

	//Finalização do background e lightbox clicando na div do light. 
	$('.contentBox').bind('click', function(){
		$('.contentBox').fadeOut('fast');
		$('.bgBox').fadeOut('fast');

	});

	/*
		Finalização do background e lightbox clicando na div do background.
		Foi necessário criação dos dois devido há não funcionalidade testada de uma só mesclando as duas classes.
	*/
	$('.bgBox').bind('click', function(){
		// $(this).css('display', 'none');
		$(this).fadeOut('fast');
		$('.contentBox').fadeOut('fast');
	})


	//Abrir menu no modo mobile.
	$('.innerTop .buttonShow').bind('click', function(){
			$('.menuMobile').slideDown('fast');
		},
			function(){
				$('.menuMobile').fadeToggle('medium');
		});

	//Fechar menu ao clicar no X.
	$('.menuMobile span').bind('click', function(){
			$('.menuMobile').slideDown('slow');
		},
			function(){
				$('.menuMobile').fadeToggle('medium');
	})



})