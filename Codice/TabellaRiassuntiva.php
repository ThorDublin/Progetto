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
  	<meta name="description" content="Pagina tabella riassuntiva">
	<meta name="keywords" content="Progetto modulo 306">
  	<meta name="date" content="24.10.2018">
  	<meta charset="UTF-8">
	<title>Tabella</title>
	<!--<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">-->
	<link rel="stylesheet" href="css/style.css">
	
	<style>
		#customers {
			font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
			border-collapse: collapse;
			width: 100%;
		}

		#customers td, #customers th {
			border: 1px solid #ddd;
			padding: 8px;
		}

		#customers tr:nth-child(even){background-color: #f2f2f2;}

		#customers tr:hover {background-color: #ddd;}

		#customers th {
			padding-top: 12px;
			padding-bottom: 12px;
			text-align: left;
			background-color: rgba(19, 35, 47, 0.9);;
			color: white;
		}
	</style>
</head>
<body>
	
	<div class="form2">
		<br>
		<h1>Tabella file CSV giornaliero</h1>
    </div> <!-- /form -->
	
	<!--<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>-->
	<script  src="js/index.js"></script>
	<script  src="js/convalidator.js"></script>
</body>
</html>
<?php 
	
	function CSV($name, $lastname, $date, $address, $civic, $city, $email, $nap, $phone, $gender, $hobby, $work)
{
    $inputs = array(
        $name,
        $lastname,
        $date,
        $address,
        $civic,
        $city,
        $email,
        $nap,
        $phone,
        $gender,
        $hobby,
        $work
    );
    
        $nomeCSV = date("Y-m-d");
        $oraCSV = date("YmdHi");
        $list = array(
            array($oraCSV, $name, $lastname, $date, $address, $civic, $city, $email, $nap, $phone, $gender, $hobby, $work)
        );
        if (!(file_exists("Registrazioni/Registrazioni_tutte.csv"))) {
            $file = fopen("Registrazioni/Registrazioni_tutte.csv", "a+");
            foreach ($list as $line) {
                fputcsv($file, $line, ";");
            }
            fclose($file);
            if (!(file_exists("Registrazioni/Registrazione_" . $nomeCSV . ".csv"))) {
                $fileToday = fopen("Registrazioni/Registrazione_" . $nomeCSV . ".csv", "a+");
                foreach ($list as $line) {
                    fputcsv($fileToday, $line, ";");
                }
                echo 
					"<table id='customers'>
                        <tr>
                            <th>Momento registrazione</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Data di nascita</th>
                            <th>Indirizzo</th>
                            <th>Numero civico</th>
                            <th>Città</th>
                            <th>Email</th>
                            <th>NAP</th>
                            <th>Numero di telefono</th>
                            <th>Genere</th>
                            <th>Hobby</th>
                            <th>Lavoro</th>
                        </tr>";
                
                $data = file("Registrazioni/Registrazione_" . $nomeCSV . ".csv");
                foreach ($data as $lines) {
                    $lineArray = explode(";", $lines);
                    list($oraCSVA, $nameA, $lastnameA, $dateA, $addressA, $civicA, $cityA, $napA, $phoneA, $emailA, $genderA, $hobbyA, $workA) = $lineArray;
                    echo "<tr>
                    <td>$oraCSVA</td>
                    <td>$nameA</td>
                    <td>$lastnameA</td>
                    <td>$dateA</td>
                    <td>$addressA</td>
                    <td>$civicA</td>
                    <td>$cityA</td>
                    <td>$napA</td>
                    <td>$phoneA</td>
                    <td>$emailA</td>
                    <td>$genderA</td>
                    <td>$hobbyA</td>
                    <td>$workA</td>
                    </tr>";
                }
                echo "</table>";
                fclose($fileToday);
            } else {
                $fileToday = fopen("Registrazioni/Registrazione_" . $nomeCSV . ".csv", "a+");
                foreach ($list as $line) {
                    fputcsv($fileToday, $line, ";");
                }
                echo 
					"<table id='customers'>
                        <tr>
                            <th>Momento registrazione</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Data di nascita</th>
                            <th>Indirizzo</th>
                            <th>Numero civico</th>
                            <th>Città</th>
                            <th>Email</th>
                            <th>NAP</th>
                            <th>Numero di telefono</th>
                            <th>Genere</th>
                            <th>Hobby</th>
                            <th>Lavoro</th>
                        </tr>";
                $data = file("Registrazioni/Registrazione_" . $nomeCSV . ".csv");
                foreach ($data as $lines) {
                    $lineArray = explode(";", $lines);
                    list($oraCSVA, $nameA, $lastnameA, $dateA, $addressA, $civicA, $cityA, $napA, $phoneA, $emailA, $genderA, $hobbyA, $workA) = $lineArray;
                    echo "<tr>
                    <td>$oraCSVA</td>
                    <td>$nameA</td>
                    <td>$lastnameA</td>
                    <td>$dateA</td>
                    <td>$addressA</td>
                    <td>$civicA</td>
                    <td>$cityA</td>
                    <td>$napA</td>
                    <td>$phoneA</td>
                    <td>$emailA</td>
                    <td>$genderA</td>
                    <td>$hobbyA</td>
                    <td>$workA</td>
                    </tr>";
                }
                echo "</table>";
                fclose($fileToday);
            }
        } else {
            $file = fopen("Registrazioni/Registrazioni_tutte.csv", "a+");
            foreach ($list as $line) {
                fputcsv($file, $line, ";");
            }
            fclose($file);
            if (!(file_exists("Registrazioni/Registrazione_" . $nomeCSV . ".csv"))) {
                $fileToday = fopen("Registrazioni/Registrazione_" . $nomeCSV . ".csv", "a+");
                foreach ($list as $line) {
                    fputcsv($fileToday, $line, ";");
                }
                echo 
					"<table id='customers'>
                        <tr>
                            <th>Momento registrazione</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Data di nascita</th>
                            <th>Indirizzo</th>
                            <th>Numero civico</th>
                            <th>Città</th>
                            <th>Email</th>
                            <th>NAP</th>
                            <th>Numero di telefono</th>
                            <th>Genere</th>
                            <th>Hobby</th>
                            <th>Lavoro</th>
                        </tr>";
                $data = file("Registrazioni/Registrazione_" . $nomeCSV . ".csv");
                foreach ($data as $lines) {
                    $lineArray = explode(";", $lines);
                    list($oraCSVA, $nameA, $lastnameA, $dateA, $addressA, $civicA, $cityA, $napA, $phoneA, $emailA, $genderA, $hobbyA, $workA) = $lineArray;
                    echo "<tr>
                    <td>$oraCSVA</td>
                    <td>$nameA</td>
                    <td>$lastnameA</td>
                    <td>$dateA</td>
                    <td>$addressA</td>
                    <td>$civicA</td>
                    <td>$cityA</td>
                    <td>$napA</td>
                    <td>$phoneA</td>
                    <td>$emailA</td>
                    <td>$genderA</td>
                    <td>$hobbyA</td>
                    <td>$workA</td>
                    </tr>";
                }
                echo "</table>";
                fclose($fileToday);
            } else {
                $fileToday = fopen("Registrazioni/Registrazione_" . $nomeCSV . ".csv", "a+");
                foreach ($list as $line) {
                    fputcsv($fileToday, $line, ";");
                }
                echo 
					"<table id='customers'>
                        <tr>
                            <th>Momento registrazione</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Data di nascita</th>
                            <th>Indirizzo</th>
                            <th>Numero civico</th>
                            <th>Città</th>
                            <th>Email</th>
                            <th>NAP</th>
                            <th>Numero di telefono</th>
                            <th>Genere</th>
                            <th>Hobby</th>
                            <th>Lavoro</th>
                        </tr>";
                $data = file("Registrazioni/Registrazione_" . $nomeCSV . ".csv");
                foreach ($data as $lines) {
                    $lineArray = explode(";", $lines);
                    list($oraCSVA, $nameA, $lastnameA, $dateA, $addressA, $civicA, $cityA, $napA, $phoneA, $emailA, $genderA, $hobbyA, $workA) = $lineArray;
                    echo "<tr>
                    <td>$oraCSVA</td>
                    <td>$nameA</td>
                    <td>$lastnameA</td>
                    <td>$dateA</td>
                    <td>$addressA</td>
                    <td>$civicA</td>
                    <td>$cityA</td>
                    <td>$napA</td>
                    <td>$phoneA</td>
                    <td>$emailA</td>
                    <td>$genderA</td>
                    <td>$hobbyA</td>
                    <td>$workA</td>
                    </tr>";
                }
                echo "</table>";
                fclose($fileToday);
            }
        }
    }
CSV($name, $lastname, $date, $address, $civic, $city, $email, $nap, $phone, $gender, $hobby, $work);
?>
