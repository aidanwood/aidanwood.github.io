<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<title> Scoreboard</title>
   <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
<script type="text/javascript>
document.onload = function {

}
</script>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 10px;
                padding-bottom: 40px;
				padding-left: 20px;
				padding-right: 40px;
				
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
	<body>
	<img src="scoreboard.jpg" width="100" height="100">
	<h4> Great White Shark<a href="http://en.wikipedia.org/wiki/Great_white_shark"<i class="icon-globe"></i></a>: </h4><?php echo $_COOKIE["score1"]; ?>
	<h4> Polar Bear<a href="http://en.wikipedia.org/wiki/Polar_bear"<i class="icon-globe"></i></a>:  </h4><?php echo $_COOKIE["score2"]; ?>
	<h4> Honey Badger<a href="http://en.wikipedia.org/wiki/Honey_badger"<i class="icon-globe"></i></a>:  </h4><?php echo $_COOKIE["score3"]; ?>
	<h4> Wolverine<a href="http://en.wikipedia.org/wiki/Wolverine"></i></a>:  </h4><?php echo $_COOKIE["score4"]; ?>
	<h4> Blue Whale<a href="http://en.wikipedia.org/wiki/Blue_whale"<i class="icon-globe"></i></a>:  </h4><?php echo $_COOKIE["score5"]; ?>
	<h4> Fire Ant Colony<a href="http://en.wikipedia.org/wiki/Fire_ant"<i class="icon-globe"></i></a>:  </h4><?php echo $_COOKIE["score6"]; ?>
</body>
</html>