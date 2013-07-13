<html>
<head>
<script src="passwordcheck.js">
</script>
</head>
 <body>

 <form action="scoreboard.php" method="post">
 <b>Great White Shark--></b>
 Amount to Be Added: <input type="text" name="score1">
 <br>
<b>Polar Bear--></b>
 Amount to Be Added: <input type="text" name="score2">
 <br>
<b>Honey Badger--></b>
 Amount to Be Added: <input type="text" name="score3">
 <br>
<b>Wolverine--></b>
 Amount to Be Added: <input ="text" name="score4">
 <br>
<b>Blue Whale--></b>
 Amount to Be Added: <input type="text" name="score5">
 <br>
<b>Fire Ant Colony--></b>
 Amount to Be Added: <input type="text" name="score6">
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
