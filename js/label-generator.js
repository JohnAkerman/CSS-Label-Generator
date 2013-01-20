/*

	Label Generator by John Akerman
	GitHub: https://github.com/JohnAkerman/CSS-Label-Generator
	Thanks for downloading :D

*/

var cssElements = Array();
var outputCSS = "", outputHTML = "";

cssElements['width'] = 300;
cssElements['height'] = 100;
cssElements['borderColor'] = "#3156c6";
cssElements['backgroundColor'] = "#5683f7";
cssElements['borderWidth'] = 5;
cssElements['fontSize'] = 25;
cssElements['fontWeight'] = "bold";
cssElements['fontColor'] = "white";
cssElements['backgroundTrans'] = "transparent";
cssElements['message'] = "Label Generator";
cssElements['borderQuestion'] = 1;
cssElements['box-shadow'] = 0;
cssElements['position'] = "right";
cssElements['textshadowQuestion'] = 1;
cssElements['text-shadow']  = "0px 1px 1px rgba(0,0,0,0.4);"
cssElements['msgTop'] = 33;

function makeHTML() {
	
	outputHTML = "<div class='labelContainer'><div class='labelArrow'></div><div class='labelBox'><span class='labelMessage'>"+cssElements['message']+"</span></div></div>";
	$("#labelOutput").html(outputHTML);
}

function makeCSS() {

	cssElements['labelBoxLeft'] = Math.round(cssElements['height'] / 2);

	outputCSS = ".labelBox {\n";
	outputCSS += "\twidth: " + cssElements['width'] + "px;\n";
	outputCSS += "\theight: " + cssElements['height'] + "px;\n";
	outputCSS += "\tposition: absolute;\n";

	if (cssElements['position'] == "left")
		outputCSS += "\tleft: " + cssElements['labelBoxLeft'] + "px;\n";

	outputCSS += "\ttop: 0;\n";
	outputCSS += "\tdisplay: block;\n";		
	outputCSS += "\tbackground-color: " + cssElements['backgroundColor'] + ";\n";


	if (parseInt(cssElements['box-shadow']) == 1) {
		outputCSS += "\tbox-shadow: rgba(0,0,0,0.3) 0 1px 1px;\n";
		outputCSS += "\t-moz-box-shadow: rgba(0,0,0,0.3) 0 1px 1px;\n";
		outputCSS += "\t-webkit-box-shadow: rgba(0,0,0,0.3) 0 1px 1px;\n";
	}

	outputCSS += "}\n";

	if (parseInt(cssElements['borderQuestion']) == 1) {
		outputCSS += ".labelBox:before {\n";
		outputCSS += "\twidth: " + (cssElements['width'] + cssElements['borderWidth'] + 1) + "px;\n";
		outputCSS += "\theight: " + (cssElements['height'] + cssElements['borderWidth'] + cssElements['borderWidth']) + "px;\n";
		outputCSS += "\tposition: absolute;\n";

		if (cssElements['position'] == "right")
			outputCSS += "\tleft: -" + cssElements['borderWidth'] + "px;\n";
		else 
			outputCSS += "\tleft: -1px;\n";

		outputCSS += "\tdisplay: block;\n";
		outputCSS += "\ttop: -" + cssElements['borderWidth'] + "px;\n";
		outputCSS += "\tbackground-color: " + cssElements['borderColor'] + ";\n";
		outputCSS += "\tcontent: '';\n";
		outputCSS += "\tz-index: -1;\n";
		outputCSS += "}\n";
	}

	outputCSS += ".labelArrow {\n";
	outputCSS += "\twidth: 0;\n";
	outputCSS += "\theight: 0;\n";
	outputCSS += "\tborder-top: " + cssElements['labelBoxLeft'] + "px solid " + cssElements['backgroundTrans'] + ";\n";
	outputCSS += "\tborder-bottom: " + cssElements['labelBoxLeft'] + "px solid " + cssElements['backgroundTrans'] + ";\n";
	
	if (cssElements['position'] == "right") {
		outputCSS += "\tborder-left: " + cssElements['labelBoxLeft'] + "px solid " + cssElements['backgroundColor'] + ";\n";
		outputCSS += "\tleft: " + cssElements['width'] + "px;\n";
	}
	else
		outputCSS += "\tborder-right: " + cssElements['labelBoxLeft'] + "px solid " + cssElements['backgroundColor'] + ";\n";

	outputCSS += "\tbackground-color: " + cssElements['backgroundTrans'] + ";\n";
	outputCSS += "\tposition: relative;\n";
	outputCSS += "}\n";

	if (parseInt(cssElements['borderQuestion']) == 1) {
		outputCSS += ".labelArrow:before {\n";
		outputCSS += "\tcontent: '';\n";
		outputCSS += "\twidth: 0;\n";
		outputCSS += "\theight: 0;\n";
		outputCSS += "\tborder-top: " + (cssElements['borderWidth'] + cssElements['labelBoxLeft'] ) + "px solid " + cssElements['backgroundTrans'] + ";\n";
		outputCSS += "\tborder-bottom: " + (cssElements['borderWidth'] + cssElements['labelBoxLeft']) + "px solid " + cssElements['backgroundTrans'] + ";\n";

		if (cssElements['position'] == "right")
			outputCSS += "\tborder-left: " + (cssElements['labelBoxLeft'] + cssElements['borderWidth'] + 1) + "px solid " + cssElements['borderColor'] + ";\n";
		else
			outputCSS += "\tborder-right: " + (cssElements['labelBoxLeft'] + cssElements['borderWidth']) + "px solid " + cssElements['borderColor'] + ";\n";

		outputCSS += "\tbackground-color: " + cssElements['backgroundTrans'] + ";\n";
		outputCSS += "\tposition: absolute;\n";
		outputCSS += "\ttop: -" + (cssElements['borderWidth'] + cssElements['labelBoxLeft']) + "px;\n";
		
		if (cssElements['position'] == "right") {
			outputCSS += "\tleft: -" + (cssElements['labelBoxLeft'] - 1) +  "px;\n";
		} else {
			outputCSS += "\tleft: -" + (cssElements['borderWidth'] + 1) +  "px;\n";
		}
		outputCSS += "\tz-index: -1;\n";
		outputCSS += "}\n";
	}

	outputCSS += ".labelMessage{\n";
	outputCSS += "\tdisplay: block;\n";
	outputCSS += "\tposition: relative;\n";
	outputCSS += "\ttext-align: center;\n";
	outputCSS += "\tfont-size: " + cssElements['fontSize'] + "px;\n";
	outputCSS += "\tfont-weight: " + cssElements['fontWeight'] + ";\n";
	outputCSS += "\tfont-family: Arial, sans-serif;\n";
	outputCSS += "\tcolor: " + cssElements['fontColor'] + ";\n";
	outputCSS += "\ttop: " + cssElements['msgTop'] + "px;\n";
	
	if (parseInt(cssElements['textshadowQuestion']) == 1) {
		outputCSS += "\ttext-shadow: " + cssElements['text-shadow'] + ";\n";
	}

	outputCSS += "}\n";

	$("#activeStyle").replaceWith("<style id='activeStyle' type='text/css'>" + outputCSS + "</style>");
	$("#cssOutput #code").html(outputCSS);
}


$(document).ready(function() {

	$("head").append("<style id='activeStyle' type='text/css'></style>");
	
	makeHTML();
	makeCSS();

	$('#width').slider({
		value: 300,
		min: 10,
		max: 500,
		slide: function(event, ui) {
			cssElements['width'] = ui.value;
		    makeCSS();
		}
	});	

	$('#height').slider({
		value: 100,
		min: 10,
		max: 200,
		slide: function(event, ui) {
			cssElements['height'] = ui.value;
		    makeCSS();
		}
	});	

	$('#position').slider({
		value: 0,
		min: 0,
		max: 1,
		slide: function(event, ui) {
			if (ui.value == 0)
		    	cssElements['position'] = "left";
		    else
		    	cssElements['position'] = "right";

		    makeCSS();
		}
	});				

	$('#borderQuestion').slider({
		value: 1,
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssElements['borderQuestion'] = ui.value;
		    if (ui.value == 0) {
		    	$("#borderColor").attr("disabled", "disabled");
		    	$("#borderColor").addClass("disabledBox");
		    } else {
		    	$("#borderColor").removeAttr("disabled"); 
		    	$("#borderColor").removeClass("disabledBox");
		    }
		    makeCSS();
		}
	});	

	$('#borderWidth').slider({
		value: 5,
		min: 1,
		max: 50,
		slide: function(event, ui) {
		    cssElements['borderWidth'] = ui.value;
		    makeCSS();
		}
	});	

	$('#fontSize').slider({
		value: 25,
		min: 9,
		max: 80,
		slide: function(event, ui) {
		    cssElements['fontSize'] = ui.value;
		    makeCSS();
		}
	});	

	$('#msgTop').slider({
		value: 33,
		min: 0,
		max: 100,
		slide: function(event, ui) {
		    cssElements['msgTop'] = ui.value;
		    makeCSS();
		}
	});	

	$('#textshadowQuestion').slider({
		value: 1,
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssElements['textshadowQuestion'] = ui.value;
		    if (ui.value == 0) {
		    	$("#text-shadow").attr("disabled", "disabled");
		    	$("#text-shadow").addClass("disabledBox");
		    } else {
		    	$("#text-shadow").removeAttr("disabled"); 
		    	$("#text-shadow").removeClass("disabledBox");
		    }
		    makeCSS();
		}
	});

	$('#tester').slider({
		value: 30,
		min: 9,
		max: 80,
		slide: function(event, ui) {
		    cssElements['fontSize'] = ui.value;
		    makeCSS();
		}
	});	

	$("#borderColor").val(cssElements['borderColor']);
	$("#backgroundColor").val(cssElements['backgroundColor']);
	$("#fontColor").val(cssElements['fontColor']);
	$("#message").val(cssElements['message']);
	$("#text-shadow").val(cssElements['text-shadow']);

	$(".settings input").change(function() {
		cssElements[$(this).attr("id")] = $(this).val();
		makeHTML();
		makeCSS();
	});
});