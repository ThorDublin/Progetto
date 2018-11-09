	
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
  	<meta name="description" content="Pagina di benvenuto">
	<meta name="keywords" content="Progetto modulo 306">
  	<meta name="date" content="10.10.2018">
  	<meta charset="UTF-8">
	<title>Registrazione</title>
	<!--<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">-->
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="form2"> 
		<div id="signup">   
			<form method="post" action="PaginaRiassuntiva.php">
				<h1>Registrati</h1>
					
					<label>
						Nome:<span class="req">*</span>
					</label>
					<div class="field-wrap">
						<input type="text" id="nome" value="<?php echo (isset($name)) ? $name : "" ?>" name="nome" onkeydown="Name()" onload="Name()" onchange="Name()"/>
					</div>
					<label>
						Cognome:<span class="req">*</span>
					</label>
					<div class="field-wrap">
						<input type="text" id="cognome" value="<?php echo (isset($lastname)) ? $lastname : "" ?>" name="cognome" onkeydown="lastName()" onload="lastName()" onchange="lastName()"/>
					</div>
					<label>
						Data di nascita:<span class="req">*</span>
					</label>
					<div class="field-wrap">
						<input type="date" id="data" value="<?php echo (isset($date)) ? $date : "" ?>" name="data" onkeydown="date()" onload="date()" onchange="date()"/>
					</div>
					<label>
							Indirizzo:<span class="req">*</span>
						</label>
					<div class="field-wrap">
						
						<input type="text" id="indirizzo" value="<?php echo (isset($address)) ? $address : "" ?>" name="indirizzo" onkeydown="address()" onload="address()" onchange="address()"/>
					</div>
					<label>
							No. Civico:<span class="req">*</span>
						</label>
					<div class="field-wrap">
						
						<input type="text" id="civico" value="<?php echo (isset($civic)) ? $civic : "" ?>" name="civico" onkeydown="civic()" onload="civic()" onchange="civic()"/>
					</div>
					<label>
							Città:<span class="req">*</span>
						</label>
					<div class="field-wrap">
						
						<input type="text" id="citta" value="<?php echo (isset($city)) ? $city : "" ?>" name="citta" onkeydown="city()" onload="city()" onchange="city()"/>
					</div>
					<label>
							Nap:<span class="req">*</span>
						</label>
					<div class="field-wrap">
						
						<input type="text" id="nap" value="<?php echo (isset($nap)) ? $nap : "" ?>" name="nap" onkeydown="nap()" onload="nap()" onchange="nap()"/>
					</div>
						<label>
							No. Telefono:<span class="req">*</span>
						</label>
					
					<div class="field-wrap">
						<input type="text" id="numero" value="<?php echo (isset($phone)) ? $phone : "" ?>" name="numero" onkeydown="phone()" onload="phone()" onchange="phone()"/>
					</div>
					<label>
							E-mail:<span class="req">*</span>
						</label>
					<div class="field-wrap">
						
						<input type="text" id="mail" value="<?php echo (isset($email)) ? $email : "" ?>"  name="mail" onkeydown="Email()" onload="Email()" onchange="Email()"/>
					</div>
					<label>
							Genere(sesso):<span class="req">*</span>
						</label>
					<div class="field-wrap">
						<input list="genere" name="genere" value="<?php echo (isset($gender)) ? $gender : "" ?>"  id="genere" onkeydown="gender()" onload="gender()" onchange="gender()"/>
						<datalist id="genere">
							<option value="M">
							<option value="F">
							<option value="O">
						</datalist>
					</div>
					<label>
							Hobby:
						</label>
					<div class="field-wrap">
						
						<input type="text" id="hobby" value="<?php echo (isset($hobby)) ? $hobby : "" ?>"  name="hobby" onkeydown="hobby()" onload="hobby()" onchange="hobby()"/>
					</div>
					<label>
							Professione:
						</label>
					<div class="field-wrap">
						
						<input type="text" id="lavoro" value="<?php echo (isset($work)) ? $work : "" ?>" name="lavoro" onkeydown="work()" onload="work()" onchange="work()"/>
					</div>
					<div class="top-row">
						<div class="field-wrap">
							<button type="submit" class="button button-block" id="avanti" disabled>Avanti</button>
						</div>
					
						<div class="field-wrap">
						  <button class="button button-block" type="button" onclick="remove()">Cancella</button>
						</div>
					</div>
			</form>
		</div>
    </div> <!-- /form -->
	<!--<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>-->
	<script  src="js/index.js"></script>
	<script  src="js/convalidator.js"></script>
</body>
</html>
