(function($){
	$(document).ready(function(){

		$(".faq li a").hover(
			function(){
				$(this).parent().addClass("hover");
			},
			function(){
				$(this).parent().removeClass("hover");
		});

		$(".faq li a").click(function() {
			if($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			} else {
				$(this).parent().addClass("active");
			}
		});

		$("#country-select").change(function(){
			if ($(this).val() == "sweden") {
				$("#modal-country").show();
				$(".country-pointer").toggleClass("hide");
				$(".country-pointer a").addClass("active");
			};
			if($(this).val() == 0) return false;
		});

		$("#modal-country-close").click(function() {
			$("#modal-country").hide();
			$(".country-pointer a").removeClass("active");
		});

		$(".anchor").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top - 51 + "px"
			}, {
				duration: 1000
			});
			return false;
		});

		$("#programm-select-a").click(function() {
			$("#fullmap").toggle();
			$(this).toggleClass("active");
		});



		/* Появление ссылки "Вверх" и прокрутка к началу страницы по клику на нее */
		if ($(window).scrollTop()>="750") $(".up-arrow").fadeIn("slow")
			$(window).scroll(function(){
				if ($(window).scrollTop()<="750") $(".up-arrow").fadeOut("slow")
			else $(".up-arrow").fadeIn("slow")
		});
		$(".up-arrow").click(function(){$("html,body").animate({scrollTop:0},"slow")});


		var x = $(window).width();
		var sbelem = $(".scrollbar-rail");
		$(window).resize(function(){
			x = $(window).width();
		});

		if (sbelem.length > 0) {
			if (x > 752) {
				$(".scrollbar-rail").scrollbar({
					autoScrollSize: false,
					ignoreMobile: false
				});
			}
		}

		if (x > 460) {
			checkMaxHeight('.flat .item');
		}
		

		$(window).resize(function(){
			if (x > 460) {
				checkMaxHeight('.flat .item');
			}
		});


		/* Показываем прилипающее к верхней границе браузера меню */
		var stickyNavTop;
		if (x > 752) {
			stickyNavTop = 100;
		} else {
			stickyNavTop = 0;
		}
		var $navbar = $(".navbar-default");
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop > stickyNavTop) {
				$navbar.animate({height: "show"}, 300, function(){
					$(this).addClass('navbar-fixed-top navbar-sticky');
					if (x > 768) {
						$("#content").css("padding-top", "140px");
					} else {
						$("#content").css("padding-top", "40px");
					}	
				});
			} else {
				$navbar.removeClass('navbar-fixed-top navbar-sticky').removeAttr("style");
				$("#content").css("padding-top", "0px");
			}
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});


		
		




		/* Инициализация popover для иконок в новости */
		$('.popover-1').popover({placement: 'top', trigger:'click', content: 'Для каго'});
		$('.popover-2').popover({placement: 'top', trigger:'click', content: 'Дзе'});
		$('.popover-3').popover({placement: 'top', trigger:'click', content: 'Калi'});
		$('.popover-4').popover({placement: 'top', trigger:'click', content: 'Мова'});
		$('.popover-5').popover({placement: 'top', trigger:'click', content: 'Дэдлайн'});
		$('.popover-6').popover({placement: 'top', trigger:'click', content: 'Сайт'});

		/* Скрываем popover по клику */
		$('body').on('click', function (e) {
		    $('[data-toggle="popover"]').each(function () {
		        //the 'is' for buttons that trigger popups
		        //the 'has' for icons within a button that triggers a popup
		        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
		            $(this).popover('hide');
		        }
		    });
		});

		$('.popover-team-3').popover({placement: 'top', trigger:'click', html:true, content: '<div class="name">Ганка Барадзiна</div><p>Каардынатар адукацыйных праектау.</p><div class="quote">«З багатым не варта судзіцца, а з дужым біцца»</div>'});
		$('.popover-team-1').popover({placement: 'top', trigger:'click', html:true, content: '<div class="name">Ганка Барадзiна</div><p>Каардынатар адукацыйных праектау.</p><div class="quote">«З багатым не варта судзіцца, а з дужым біцца»</div>'});
		$('.popover-team-12').popover({placement: 'top', trigger:'click', html:true, content: '<div class="name">Ганка Барадзiна</div><p>Каардынатар адукацыйных праектау.</p><div class="quote">«З багатым не варта судзіцца, а з дужым біцца»</div>'});
		$('.popover-partner-12').popover({placement: 'top', trigger:'click', html:true, content: '<div class="name">Hoster.by</div><p>Хостинг-провайдер, крупнейший регистратор и технический администратор национальной доменной зоны .BY с февраля 2012 года. Выбор хостинга из более чем 20 тарифных планов и регистрация доменов в более чем 160 доменных зонах.</p><div class="site"><a href="">www.hoster.by</a></div>'});
		$('.en-popover-partner-12').popover({placement: 'top', trigger:'click', html:true, content: '<div class="name">Hoster.by</div><p>Hosting provider, the largest Registrar and technical administrator the national domain zone .BY since February 2012. Choice hosting from more than 20 tariff plans and domain registration in more than 160 domain areas.</p><div class="site"><a href="">www.hoster.by</a></div>'});
		$('.en-popover-team-3').popover({placement: 'top', trigger:'click', html:true, content: '<div class="name">Ganka Baradzina</div><p>Coordinator of educational projects</p><div class="quote">"With the rich should not be judged, and with a strong beat"</div>'});

		/* Показываем блок с дополнительными опциями поиска*/
		$('#btn-search-addt').click(function(){
			$('#btn-search-addt').hide();
			$('.search-addt').show(300);
		});
		/* Скрываем блок с дополнительными опциями поиска*/
		$('#btn-search-addt-2').click(function(){
			$('#btn-search-addt').show();
			$('.search-addt').hide(300);
		});
		/*  Пример валидации форм */
		$('#subscribe-form').submit(function(){
			var error = false;
			if($('#subscribe-form-email').val() == ""){
				error = true;
				$('#subscribe-form-email').parent().addClass("has-error");
			}else{
				$('#subscribe-form-email').parent().removeClass("has-error");
			}
			return false;
		});
		$("#subscribe-form-email").focus(function () {
			$('#subscribe-form-email').parent().removeClass("has-error");
		});
		$("#btn-send-profile").click(function() {
			$("#modal-profile").toggleClass("hide");
		});
		$("#modal-profile-close").click(function() {
			$("#modal-profile").toggleClass("hide");
		});

	});

function checkMaxHeight(element){
	var maxHeight = 0;
	$(element).css("height", "auto");
	$(element).each(function(){
		var blockHeight = parseInt($(this).height());
		if ( blockHeight > maxHeight ) {
			maxHeight = $(this).height();
		}
	});
	$(element).css("height", maxHeight);
}

})(jQuery);