function clicking () {
	var line = "_ctl0__ctl0_rptQuestions__ctl14_rblAnswer_4";
	for (var i=14; i<=18; i++) {
		var str = "_ctl0__ctl0_rptQuestions__ctl14_rblAnswer_4";
		var num = i + "";
		var result = str.replace(/14/, num);
		document.getElementById(result).click();
	}
	for (var i=20; i<=36; i++) {
		var str = "_ctl0__ctl0_rptQuestions__ctl14_rblAnswer_4";
		var num = i + "";
		var result = str.replace(/14/, num);
		document.getElementById(result).click();
	}
	for (var i=37; i<=38; i++) {
		var str = "_ctl0__ctl0_rptQuestions__ctl14_rblAnswer_0";
		var num = i + "";
		var result = str.replace(/14/, num);
		document.getElementById(result).click();
	}
	document.getElementById("_ctl0__ctl0_rptQuestions__ctl3_rblAnswer_1").click();
	document.getElementById("_ctl0__ctl0_rptQuestions__ctl4_rblAnswer_3").click();
	document.getElementById("_ctl0__ctl0_rptQuestions__ctl5_rblAnswer_3").click();
	document.getElementById("_ctl0__ctl0_rptQuestions__ctl6_rblAnswer_2").click();
	document.getElementById("_ctl0__ctl0_btnSave").click();
	//ISLAM&AKERKE
}
clicking();