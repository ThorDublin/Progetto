<?php 
	if (isset($_POST['nome'])){
		$name = $_POST['nome']; 
		$lastname = $_POST['cognome'];
		$date =$_POST['data']; 
		$address = $_POST['indirizzo']; 
		$civic = $_POST['civico']; 
		$city = $_POST['citta']; 
		$nap = $_POST['nap']; 
		$phone = $_POST['numero']; 
		$email = $_POST['mail']; 
		$gender = $_POST['genere']; 
		$work = $_POST['lavoro']; 
		$hobby = $_POST['hobby']; 
	}else{
		$name = "";
		$lastname = "";
		$date = "";
		$address = "";
		$civic = "";
		$city = "";
		$nap = "";
		$phone = "";
		$email = "";
		$gender = "";
		$work = "";		
		$hobby = "";
	}
	?>
<!DOCTYPE html>
<html>

<head>
	<meta name="author" content="Thor Düblin">
  	<meta name="description" content="Pagina riassuntiva">
	<meta name="keywords" content="Progetto modulo 306">
  	<meta name="date" content="24.10.2018">
  	<meta charset="UTF-8">
	<title>Riassunto</title>
	<!--<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">-->
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	
	<div class="form2">
		<form method="post" action="TabellaRiassuntiva.php">
			<h1>Pagina Riassuntiva</h1>
			<label>
						Nome
					</label>
					<div class="field-wrap">
						<input readonly type="text" id="nome" value="<?php echo (isset($name)) ? $name : "" ?>" name="nome" onkeydown="Name()" onchange="Name()"/>
					</div>
					<label>
						Cognome
					</label>
					<div class="field-wrap">
						<input readonly type="text" id="cognome" value="<?php echo (isset($lastname)) ? $lastname : "" ?>" name="cognome" onkeydown="lastName()" onchange="lastName()"/>
					</div>
					<label>
						Data di nascita
					</label>
					<div class="field-wrap">
						<input readonly type="date" id="data" value="<?php echo (isset($date)) ? $date : "" ?>" name="data" onkeydown="date()" onchange="date()"/>
					</div>
					<label>
							Indirizzo
						</label>
					<div class="field-wrap">
						
						<input readonly type="text" id="indirizzo" value="<?php echo (isset($address)) ? $address : "" ?>" name="indirizzo" onkeydown="address()" onchange="address()"/>
					</div>
					<label>
							No. Civico
						</label>
					<div class="field-wrap">
						
						<input readonly type="text" id="civico" value="<?php echo (isset($civic)) ? $civic : "" ?>" name="civico" onkeydown="civic()" onchange="civic()"/>
					</div>
					<label>
							Città
						</label>
					<div class="field-wrap">
						
						<input readonly type="text" id="citta" value="<?php echo (isset($city)) ? $city : "" ?>" name="citta" onkeydown="city()" onchange="city()"/>
					</div>
					<label>
							Nap
						</label>
					<div class="field-wrap">
						
						<input readonly type="text" id="nap" value="<?php echo (isset($nap)) ? $nap : "" ?>" name="nap" onkeydown="nap()" onchange="nap()"/>
					</div>
						<label>
							No. Telefono
						</label>
					
					<div class="field-wrap">
						<input readonly type="text" id="numero" value="<?php echo (isset($phone)) ? $phone : "" ?>" name="numero" onkeydown="phone()" onchange="phone()"/>
					</div>
					<label>
							E-mail
						</label>
					<div class="field-wrap">
						
						<input  readonly type="text" id="mail" value="<?php echo (isset($email)) ? $email : "" ?>"  name="mail" onkeydown="Email()" onchange="Email()"/>
					</div>
					<label>
							Genere(sesso)
						</label>
					<div class="field-wrap">
						<input readonly list="genere" name="genere" value="<?php echo (isset($gender)) ? $gender : "" ?>"  id="genere" onkeydown="gender()" onchange="gender()"/>
					</div>
					<label>
							Hobby
						</label>
					<div class="field-wrap">
						
						<input readonly type="text" id="hobby" value="<?php echo (isset($hobby)) ? $hobby : "" ?>"  name="hobby" onkeydown="hobby()" onchange="hobby()"/>
					</div>
					<label>
							Professione
						</label>
					<div class="field-wrap">
						
						<input readonly type="text" id="lavoro" value="<?php echo (isset($work)) ? $work : "" ?>" name="lavoro" onkeydown="work()" onchange="work()"/>
					</div>
			<br><br>
			<div class="top-row">
				<div class="field-wrap">
					<button class="button button-block">Registrati</button>
				</div>
					
				<div class="field-wrap">
					<button type="submit" formaction="FormLogin.php" class="button button-block">Correggi</button>
				</div>
			</div>
		</form>
    </div> <!-- /form -->
	
	<!--<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>-->
	<script  src="js/index.js"></script>
	<script  src="js/convalidator.js"></script>
</body>
</html>
