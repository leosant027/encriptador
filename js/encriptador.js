function selecionar(id) {
    return document.querySelector(id)
}

function encriptar(covertir) {
    selecionar("#warning").removeAttribute("style");
    var textarea = selecionar("#texto");
    const texto = textarea.value;
    var area_default = selecionar("#default");
    var area_result = selecionar("#result");
    var texto_out = selecionar("#texto_out");
    if (texto != "") {
        var out = ""
        for (var i = 0; i < texto.length; i++) {
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')) {
                selecionar("#warning").style.color = "red";
                selecionar("#warning").style.fontSize = "16px";
                return;
            } else if ((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "") {
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if (texto[i] == 'a') {
                out += covertir["a"];
            } else if (texto[i] == 'e') {
                out += covertir["e"];
            } else if (texto[i] == 'i') {
                out += covertir["i"];
            } else if (texto[i] == 'o') {
                out += covertir["o"];
            } else if (texto[i] == 'u') {
                out += covertir["u"];
            } else {
                out += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = out;
    }

    return;

}

function desencriptar(covertir) {
    selecionar("#warning").removeAttribute("style");
    var textarea = selecionar("#texto");
    var texto = textarea.value;
    var area_default = selecionar("#default");
    var area_result = selecionar("#result");
    var texto_out = selecionar("#texto_out");
    if (texto != "") {
        for (var i = 0; i < texto.length; i++) {
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')) {
                selecionar("#warning").style.color = "red";
                selecionar("#warning").style.fontSize = "16px";
                return;
            } else if ((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "") {
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto = texto.replace(new RegExp(covertir["a"], "g"), "a");
        texto = texto.replace(new RegExp(covertir["e"], "g"), "e");
        texto = texto.replace(new RegExp(covertir["i"], "g"), "i");
        texto = texto.replace(new RegExp(covertir["o"], "g"), "o");
        texto = texto.replace(new RegExp(covertir["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

function clipboard() {
    const texto_out = selecionar("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = selecionar('#enc');
const des = selecionar('#des');
const copy = selecionar('#copiar');

var covertir = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

enc.addEventListener('click', function() { encriptar(covertir); });
des.addEventListener('click', function() { desencriptar(covertir); });
copy.addEventListener('click', function() { clipboard(); });