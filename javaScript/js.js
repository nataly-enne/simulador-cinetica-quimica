var ult = null;
function resposta(a) {
	if(ult!=null){
	ult.style.backgroundColor='#FFFFFF';
	}
	a.style.backgroundColor='#B0C4DE';
	ult = a;
}
function verifica(a) {
	if(document.getElementById('certo')==ult){
		ult.style.backgroundColor="#98FB98";
        setCookie("perg"+num_perg, 1)
	}else{
		ult.style.backgroundColor="#FF7256";
		document.getElementById('certo').style.backgroundColor="#98FB98";
        setCookie("perg"+num_perg, 0)
	}
    verificarErros();
}
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
} 

function verificarErros(){
    acertos = 0;
    erros = 0;
    for(i = 1 ; i < 15; i++){
        if (getCookie("perg"+i) === "1"){
            acertos++;
        } else if(getCookie("perg"+i) === "0"){
            erros++;
        }
    }
    document.getElementById("vd").innerHTML = acertos;
    document.getElementById("vm").innerHTML = erros;
}