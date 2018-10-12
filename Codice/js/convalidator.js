function Email(){
	var email = document.getElementById("mail").value;
	var chars = "1234567890abcdefghilmnopqrstuvzyjk.@";
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
					//alert("manca \"@\", sintassi: <username>@<mail>.<dominio>");
				}else if(c < 1){
					document.getElementById("mail").style.borderColor = "red";
					//alert("manca l'username, sintassi: <username>@<mail>.<dominio>");
				}else{
					var username = email.slice(0,c);
					var mado = email.slice(c+1, len);
					var lenmado = mado.length;
					if(lenmado > 0){
						var mc = mado.search("@");
						if(mc>=0){
							document.getElementById("mail").style.borderColor = "red";
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
									}else{
										document.getElementById("mail").style.borderColor = "red";
										//alert("parte dominio mancante, sintassi: <username>@<mail>.<dominio>");
									}
								}else{
									document.getElementById("mail").style.borderColor = "red";
									//alert("parte mail mancante, sintassi: <username>@<mail>.<dominio>");
								}
							}else{
								document.getElementById("mail").style.borderColor = "red";
								//alert("permesso solo 1 carattere \".\" dopo la \"¨@\", sintassi: <username>@<mail>.<dominio>");
							}
						}
					}else{
						document.getElementById("mail").style.borderColor = "red";
						//alert("email incompleta, sintassi: <username>@<mail>.<dominio>");
					}
				}
			}else{
				document.getElementById("mail").style.borderColor = "red";
				//alert("il carattere \".\" non può essere ripetuto di fila, sintassi: <username>@<mail>.<dominio>");

			}
		}else{
			document.getElementById("mail").style.borderColor = "red";
			//alert("caratteri speciali non consentiti, sintassi: <username>@<mail>.<dominio>");
		}
	}else{
		document.getElementById("mail").style.borderColor = "red";
		//alert("inserire la email, sintassi: <username>@<mail>.<dominio>");
	}
}

function Name(){
	var name = document.getElementById("nome").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKabcdefghilmnopqrstuvzyjk ";
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
				break;
			}else{
				document.getElementById("nome").style.borderColor = "#1ab188";
			}
		}
	}else{
		//nome vuoto
		document.getElementById("nome").style.borderColor = "red";
	}
}

function lastName(){
	var lastname = document.getElementById("cognome").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKabcdefghilmnopqrstuvzyjk ";
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
				break;
			}else{
				document.getElementById("cognome").style.borderColor = "#1ab188";
			}
		}
	}else{
		//nome vuoto
		document.getElementById("cognome").style.borderColor = "red";
	}
}

function address(){
	var address = document.getElementById("indirizzo").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKabcdefghilmnopqrstuvzyjk ";
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
				break;
			}else{
				document.getElementById("indirizzo").style.borderColor = "#1ab188";
			}
		}
	}else{
		//nome vuoto
		document.getElementById("indirizzo").style.borderColor = "red";
	}
}

function city(){
	var city = document.getElementById("citta").value;
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKabcdefghilmnopqrstuvzyjk ";
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
				break;
			}else{
				document.getElementById("citta").style.borderColor = "#1ab188";
			}
		}
	}else{
		//nome vuoto
		document.getElementById("citta").style.borderColor = "red";
	}
}

function civic(){
	var civic = document.getElementById("civico").value;
	var alls = "ABCDEFGHILMNOPQRSTUVZYJKabcdefghilmnopqrstuvzyjk1234567890";
	var chars = "ABCDEFGHILMNOPQRSTUVZYJKabcdefghilmnopqrstuvzyjk";
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
						break;
					}else{
						document.getElementById("civico").style.borderColor = "#1ab188";
					}
				}
			}else{
				document.getElementById("civico").style.borderColor = "red";
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
			}else{
				document.getElementById("civico").style.borderColor = "#1ab188";
			}
		}else{
			document.getElementById("civico").style.borderColor = "red";		
		}
	}else{
		//nome vuoto
		document.getElementById("civico").style.borderColor = "red";
	}
}