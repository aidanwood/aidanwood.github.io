<html>
<head>
<script src="passwordcheck.js">
</script>
</head>
 <body>

 <form action="http://stars.strugee.net/" method="post">
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
 
 <!--604800-->
 </body>
 </html> 
