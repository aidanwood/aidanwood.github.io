<?php
$score1 = echo $_POST["score1"];
$score2 = echo $_POST["score2"];
$score3 = echo $_POST["score3"];
$score4 = echo $_POST["score4"];
$score5 = echo $_POST["score5"];
$score6 = echo $_POST["score6"];

setcookie('score1',$score1,time() + (86400 * 5)); 
setcookie('score2',$score2,time() + (86400 * 5)); 
setcookie('score3',$score3,time() + (86400 * 5)); 
setcookie('score4',$score4,time() + (86400 * 5)); 
setcookie('score5',$score5,time() + (86400 * 5)); 
setcookie('score6',$score6,time() + (86400 * 5)); 

?>
<html>
<head>
<script src="passwordcheck.js">
</script>
</head>
 <body>

 <form action="scoreboard.php" method="post">
 <b>Great White Shark--></b>
Number of Stars: <input type="text" name="score1">
 <br>
<b>Polar Bear--></b>
 Number of Stars: <input type="text" name="score2">
 <br>
<b>Honey Badger--></b>
 Number of Stars: <input type="text" name="score3">
 <br>
<b>Wolverine--></b>
 Number of Stars: <input ="text" name="score4">
 <br>
<b>Blue Whale--></b>
 Number of Stars: <input type="text" name="score5">
 <br>
<b>Fire Ant Colony--></b>
 Number of Stars: <input type="text" name="score6">
 <br>
 <b>Password:</b> <input type="password" id="password" name="password">
 <br>
 <input type="submit" id="submit">
 </form>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 <script>
 window.onLoad = function() {
$("#password").change(function() {
valid = checkForm(document.getElementById("password"));
console.log("change event fired");
 if(valid)
 {
 document.getElementById("submit").removeAttribute("disabled");
 } else {
document.getElementById("submit").setAttribute("disabled", "");}});
}

 </script>
 

 </body>
 </html> 
