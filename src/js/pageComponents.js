var getList = function(data) {
	var listString = "";
	for(var key in data) {
		if(key) {
			compObj = data[key];
			console.log(compObj);
			listString = "<li class='nav-item'><a class='nav-link mainList-item' href='#pageTop'>" + Object.keys(compObj) + "</a>" +
			"<ul class='nav nav-pills sublists flex-column'>"; 
			for(var innerKey in compObj) {
				console.log(compObj[innerKey]);
				for(var i = 0; i < compObj[innerKey].length; i++) {
					console.log(compObj[innerKey][i].name);
					listString += "<li class='nav-item'><a class='nav-link item' href='#pageTop' data-value='" + 
					compObj[innerKey][i].class + "'>"+compObj[innerKey][i].name+"</a></li>";
				}
				listString += "</ul>";
			}
			$('aside').find('.mainList').append(listString); 
		}
	}

	var appendComponent = function(component, HTML, CSS) {
		var componentCode = "<style>"+CSS+"</style>" + HTML;

		$('[id^=content]').empty();
		$('#content3, #content4, #content5').append("<div class='code'></div>");

		$('#content1').append(componentCode);
		$('#content3').find('.code').text(HTML).lineLine();
		$('#content4').find('.code').text(CSS).lineLine();

		var JSurl = $('.' + component).data('js-file');

		if(JSurl) {
			$.get(JSurl).then(function(JS) {
				var l = new Loader();
				l.require([JSurl], function() {
					$('#content5').find('.code').text(JS).lineLine();
				});	
			}).fail(function() {
				alert('Could not fetch JS file');
			});
		}
	};

	var displayComponents = function(component) {

		var HTMLurl = "data/" + component + "/html.txt";
		var CSSurl = "data/" + component + "/css.css"

		$.get(HTMLurl).then(function(HTML) {
			$.get(CSSurl).then(function(CSS) {
				appendComponent(component, HTML, CSS);
			}).fail(function() {
				alert('Could not fetch CSS');
			});
		}).fail(function() {
			alert('Could not fetch component files');
		});
	};

	$('a.mainList-item').on('click', function() {
		$(this).toggleClass(' active');
		$('.heading').find('h1').empty().append($(this).text());
		/*$('.tab-pane').empty();*/
		$('.sec-heading').find('h2').empty();
		$(this).next('.sublists').toggle();
		return false;
	});

	$('.sublists').ready(function() {
		var gridClass;
		$('aside').find('a.item').on('click', function() {
			gridClass = $(this).data('value');
			$('.sec-heading').find('h2').empty().append($(this).text());
			displayComponents(gridClass);
			return false;
		});
	});
};

var getJSONContent = function() {
	$.ajax({
		url: 'data/componentsList.json',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			getList(data);
		}, error: function() {
			alert("Could not fetch Components");
		}
	});
};

getJSONContent();