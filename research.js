'use strict';

window.onsubmit = submit;

let p1 = document.querySelector("#phoneFirstPart");
let p2 = document.querySelector("#phoneSecondPart");
let p3 = document.querySelector("#phoneThirdPart");

let b = document.querySelector("#highBloodPressure");
let d = document.querySelector("#diabetes");
let g = document.querySelector("#glaucoma");
let a = document.querySelector("#asthsma");
let n = document.querySelector("#none");

let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");

let i1 = document.querySelector("#firstFourDigits");
let i2 = document.querySelector("#secondFourDigits");

function submit() {
	
	let msg = "";

	if (!verifyPhone()) {
		msg = msg + "Invalid phone number\n";
	}
	if (!verifyConditions()) {
		msg = msg + "Invalid conditions selected\n";
	}
	if (!anySelected()) {
		msg = msg + "No conditions selected\n"
	}
	if (!verifyTimePeriod()) {
		msg = msg + "No time period selected\n";
	}
	if (!verifyId()) {
		msg = msg + "Invalid study id\n";
	}

	if (msg != "") {
		alert(msg);
		return false;
	}

	if (confirm("Do you want to submit the form data?")) {
		return true;
	} else {
		return false;
	}
}

function verifyPhone() {
	if (verify3DigitPhone(p1) && verify3DigitPhone(p2) && verify4DigitPhone(p3)) {
		return true;
	}
	return false;
}

function verify3DigitPhone(x) {
	if (!isNaN(x.value) && x.value >= 0 && x.value <= 999 && x.value.length == 3) {
		return true;
	}
	return false;
}

function verify4DigitPhone(x) {
	if (!isNaN(x.value) && x.value >= 0 && x.value <= 9999 && x.value.length == 4) {
		return true;
	}
	return false;
}

function verifyConditions() {
	if (n.checked && (b.checked || d.checked || g.checked || a.checked)) {
		return false;
	}
	return true;
}

function anySelected() {
	if (b.checked || d.checked || g.checked || a.checked || n.checked) {
		return true;
	}
	return false;
}

function verifyTimePeriod() {
	if (r1.checked || r2.checked || r3.checked || r4.checked) {
		return true;
	}
	return false;
}

function verifyId() {
	if (i1.value[0] != "A" || i2.value[0] != "B" || !verifyId3digits(i1) || !verifyId3digits(i2)) {
		return false;
	}
	return true;
}

function verifyId3digits(i) {
	let str = i.value.substring(1);
	if (str.length != 3 || isNaN(str)) {
		return false;
	}
	return true;
}

