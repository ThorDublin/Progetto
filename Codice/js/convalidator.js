
	var avanti = [false, false, false, false, false, false, false, false, false, false, true, true];
	function controllo(){
		var counter = 0;
		for(var i = 0; i < avanti.length; i++){
			if(avanti[i] == "true"){
				counter++;
			}
		}
		if(counter == 12){
			document.getElementById("avanti").disabled = true;
		}else{
			document.getElementById("avanti").disabled = false;
		}
	}
	
function Name(){
	var name = document.getElementById("nome").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKXWwxabcdefghilmnopqrstuvzyjk ";
	var len = name.length;
	if(len > 0 && len <= 50){
		var control = false;
		for(var i=0; i<name.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(name[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("nome").style.borderColor = "red";
				avanti[0] = false;
				break;
			}else{
				document.getElementById("nome").style.borderColor = "#1ab188";
				avanti[0] = true;
			}
		}
	}else{
		//nome vuoto
		document.getElementById("nome").style.borderColor = "red";
		avanti[0] = false;
	}
	controllo();
}
function lastName(){
	var lastname = document.getElementById("cognome").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKXWwxabcdefghilmnopqrstuvzyjk ";
	var len = lastname.length;
	if(len > 0 && len <= 50){
		var control = false;
		for(var i=0; i<lastname.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(lastname[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("cognome").style.borderColor = "red";
				avanti[1] = false;
				break;
			}else{
				document.getElementById("cognome").style.borderColor = "#1ab188";
				avanti[1] = true;
			}
		}
	}else{
		//nome vuoto
		document.getElementById("cognome").style.borderColor = "red";
		avanti[1] = false;
	}
	controllo();
}
function date(){
    var now = new Date();
	var insert = document.getElementById("data").value;
	var born = new Date(insert);
	if(document.getElementById("data").value != ""){
		if (born.getFullYear() > now.getFullYear()){
			document.getElementById("data").style.borderColor = "red";
			avanti[2] = false;
		}else if(born.getFullYear() == now.getFullYear()){
			if (born.getMonth() > now.getMonth()) {
				document.getElementById("data").style.borderColor = "red";
				avanti[2] = false;
			}else if(born.getMonth() == now.getMonth()){
				if (born.getDate() > now.getDate()) {
					document.getElementById("data").style.borderColor = "red";
					avanti[2] = false;
				}else{
					document.getElementById("data").style.borderColor = "#1ab188";
					avanti[2] = true;
				}
			}
		}else{
			document.getElementById("data").style.borderColor = "#1ab188";
			avanti[2] = true;
		}
	}else{
		document.getElementById("data").style.borderColor = "red";
		avanti[2] = false;
	}
	controllo();
}
function address(){
	var address = document.getElementById("indirizzo").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKXWwxabcdefghilmnopqrstuvzyjk ";
	var len = address.length;
	if(len > 0 && len <= 50){
		var control = false;
		for(var i=0; i<address.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(address[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("indirizzo").style.borderColor = "red";
				avanti[3] = false;
				break;
			}else{
				document.getElementById("indirizzo").style.borderColor = "#1ab188";
				avanti[3] = true;
			}
		}
	}else{
		//nome vuoto
		document.getElementById("indirizzo").style.borderColor = "red";
		avanti[3] = false;
	}
	controllo();
}
function civic(){
	var civic = document.getElementById("civico").value;
	var alls = "ABCDEFGHILMNOPQRSTUVZYJKXWwxabcdefghilmnopqrstuvzyjk1234567890";
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKXWwxabcdefghilmnopqrstuvzyjk";
	var numbs = "1234567890";
	var len = civic.length;
	var letters = 0;
	if(len > 0 && len <= 4){
		var control = false;
		for(var i=0; i<civic.length;i++){
			for(var j = 0; j < chars.length; j++){
				if(civic[i] == chars[j]){
					letters++;
				}
			}
		}
		if(letters == 0){
			if(civic.length < 4){
				for(var i=0; i<civic.length;i++){
					for (var j=0; j < numbs.length; j++) {
						if(civic[i] == numbs[j]){
							control = true;
							break;
						}else{
							control = false;
						}
					}
					if(!control){
						document.getElementById("civico").style.borderColor = "red";
						avanti[4] = false;
						break;
					}else{
						document.getElementById("civico").style.borderColor = "#1ab188";
						avanti[4] = true;
					}
				}
			}else{
				document.getElementById("civico").style.borderColor = "red";
				avanti[4] = false;
			}
		}else if(letters == 1){
			for (var j=0; j < chars.length; j++) {
				if(civic[civic.length-1] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("civico").style.borderColor = "red";
				avanti[4] = false;
			}else{
				document.getElementById("civico").style.borderColor = "#1ab188";
				avanti[4] = true;
			}
		}else{
			document.getElementById("civico").style.borderColor = "red";
			avanti[4] = false;			
		}
	}else{
		//nome vuoto
		document.getElementById("civico").style.borderColor = "red";
		avanti[4] = false;
	}
	controllo();
}
function city(){
	var city = document.getElementById("citta").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKXWwxabcdefghilmnopqrstuvzyjk ";
	var len = city.length;
	if(len > 0 && len <= 50){
		var control = false;
		for(var i=0; i<city.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(city[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("citta").style.borderColor = "red";
				avanti[5] = false;
				break;
			}else{
				document.getElementById("citta").style.borderColor = "#1ab188";
				avanti[5] = true;
			}
		}
	}else{
		//nome vuoto
		document.getElementById("citta").style.borderColor = "red";
		avanti[5] = false;
	}
	controllo();
}
function nap(){
	var nap = document.getElementById("nap").value;
	var chars = "1234567890";
	var len = nap.length;
	if(len > 0 && len <= 5){
		var control = false;
		for(var i=0; i<nap.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(nap[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("nap").style.borderColor = "red";
				avanti[6] = false;
				break;
			}else{
				document.getElementById("nap").style.borderColor = "#1ab188";
				avanti[6] = true;
			}
		}
	}else{
		//nome vuoto
		document.getElementById("nap").style.borderColor = "red";
		avanti[6] = false;
	}
	controllo();
}
function phone(){
	var phone = document.getElementById("numero").value; 
	var chars = "1234567890+ "; 
	var count = 0;
	var control = true;
	phone = phone.replace(/\s/g,'');
	var len = phone.length; 
	for(var i = 0; i < len; i++){
		count++;
		if(phone[i] == "+"){
			count--;
		}
	}
	for(var i = 1; i < len;i++){
		if(phone[i] == "+"){
			control = false;
			break;
		}
	}
	if(control){
		if(count > 9 && count <= 13){
			var control = false;
			for(var i=0; i<len;i++){
				for (var j=0; j < chars.length; j++) {
					if(phone[i] == chars[j]){
						control = true;
						break;
					}else{
						control = false;
					}
				}
				if(!control){
					document.getElementById("numero").style.borderColor = "red";
					avanti[7] = false;
					break;
				}else{
					document.getElementById("numero").style.borderColor = "#1ab188";
					avanti[7] = true;
				}
			}
		}else{
			document.getElementById("numero").style.borderColor = "red";
			avanti[7] = false;
		}
	}else{
		document.getElementById("numero").style.borderColor = "red";
		avanti[7] = false;
	}
	controllo();
}
function Email(){
	var email = document.getElementById("mail").value.toLowerCase();
	var chars = "1234567890abcdefghilxmnopqrstuvzyjkw.@";
	var len = email.length;
	if(len > 0 && len <= 50){
		var control = false;
		for(var i=0; i<email.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(email[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				break;
			}
		}
		if(control){
			control = true;
			for(var i = 1; i<email.length-1; i++){
				if(email[i-1] == "." && email[i] == "."){
					control=false;
					break;
				}
				control =true;
			}
			if(control){
				var c = email.search("@");
				if(c == -1){
					document.getElementById("mail").style.borderColor = "red";
					avanti[8] = false;
					//alert("manca \"@\", sintassi: <username>@<mail>.<dominio>");
				}else if(c < 1){
					document.getElementById("mail").style.borderColor = "red";
					avanti[8] = false;
					//alert("manca l'username, sintassi: <username>@<mail>.<dominio>");
				}else{
					var username = email.slice(0,c);
					var mado = email.slice(c+1, len);
					var lenmado = mado.length;
					if(lenmado > 0){
						var mc = mado.search("@");
						if(mc>=0){
							document.getElementById("mail").style.borderColor = "red";
							avanti[8] = false;
							//alert("solo una \"@\" consentita, sintassi: <username>@<mail>.<dominio>");
						}else{
							control = false;
							var point = 0;
							var count = 0;

							for(var i = 0; i < mado.length; i++){
								if(mado[i] == "."){
									count++;
								}
							}
							if(count == 1){
								for(var i = 0; i < mado.length; i++){
									if(mado[i] == "."){
										control = true;
										point = i;
										break;
									}
								}
								var mail = mado.slice(0,point);
								//controlla mail
								if(mail.length > 0){
									var domain = mado.slice(point+1, lenmado);
									//controlla domain
									if(domain.length > 0){
										//Email Valida
										//alert("Email valida: "+email);
										document.getElementById("mail").style.borderColor = "#1ab188";
										avanti[8] = true;
									}else{
										document.getElementById("mail").style.borderColor = "red";
										avanti[8] = false;
										//alert("parte dominio mancante, sintassi: <username>@<mail>.<dominio>");
									}
								}else{
									document.getElementById("mail").style.borderColor = "red";
									avanti[8] = false;
									//alert("parte mail mancante, sintassi: <username>@<mail>.<dominio>");
								}
							}else{
								document.getElementById("mail").style.borderColor = "red";
								avanti[8] = false;
								//alert("permesso solo 1 carattere \".\" dopo la \"¨@\", sintassi: <username>@<mail>.<dominio>");
							}
						}
					}else{
						document.getElementById("mail").style.borderColor = "red";
						avanti[8] = false;
						//alert("email incompleta, sintassi: <username>@<mail>.<dominio>");
					}
				}
			}else{
				document.getElementById("mail").style.borderColor = "red";
				avanti[8] = false;
				//alert("il carattere \".\" non può essere ripetuto di fila, sintassi: <username>@<mail>.<dominio>");

			}
		}else{
			document.getElementById("mail").style.borderColor = "red";
			avanti[8] = false;
			//alert("caratteri speciali non consentiti, sintassi: <username>@<mail>.<dominio>");
		}
	}else{
		document.getElementById("mail").style.borderColor = "red";
		avanti[8] = false;
		//alert("inserire la email, sintassi: <username>@<mail>.<dominio>");
	}
	controllo();
}
function gender(){
	var gender = document.getElementById("genere").value;
	var chars = "MFO";
	var len = gender.length;
	if(len == 1){
		var control = false;
		for(var i=0; i<gender.length;i++){
			for (var j=0; j < chars.length; j++) {
				if(gender[i] == chars[j]){
					control = true;
					break;
				}else{
					control = false;
				}
			}
			if(!control){
				document.getElementById("genere").style.borderColor = "red";
				avanti[9] = false;
				break;
			}else{
				document.getElementById("genere").style.borderColor = "#1ab188";
				avanti[9] = true;
			}
		}
	}else{
		//nome vuoto
		document.getElementById("genere").style.borderColor = "red";
		avanti[9] = false;
	}
	controllo();
}
function hobby(){
	var hobby = document.getElementById("hobby").value;
	var len = hobby.length;
	if(len <= 500){
		document.getElementById("hobby").style.borderColor = "#1ab188";
		avanti[10] = true;
	}else{
		document.getElementById("hobby").style.borderColor = "red";
		avanti[10] = false;
	}
	controllo();
}
function work(){
	var work = document.getElementById("lavoro").value;
	var len = work.length;
	if(len <= 500){
		document.getElementById("lavoro").style.borderColor = "#1ab188";
		avanti[11] = true;
	}else{
		document.getElementById("lavoro").style.borderColor = "red";
		avanti[11] = false;
	}
	controllo();
}
function remove(){
	document.getElementById("nome").value = "";
	document.getElementById("cognome").value = "";
	document.getElementById("data").value = "";
	document.getElementById("indirizzo").value = "";
	document.getElementById("civico").value = "";
	document.getElementById("citta").value = "";
	document.getElementById("nap").value = "";
	document.getElementById("numero").value = "";
	document.getElementById("mail").value = "";
	document.getElementById("genere").value = "";
	document.getElementById("hobby").value = "";
	document.getElementById("lavoro").value = "";
	avanti = [false, false, false, false, false, false, false, false, false, false, true, true];
}