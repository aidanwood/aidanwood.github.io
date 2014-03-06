function split(initial)
{
	return (initial-45)/2;
}

function spweights(split)
{
	var info = new Array();
	info = [2.5, 5, 10, 25, 35, 45];
	var weights = new Array();
	if(split >= 45)
	{
		weights[5] = 1;
		
	}
	else
	{
		weights[5] = 0;
	}
	if(split >= 35 && split < 45)
	{
		weights[4] = 1;
	}
	else
	{
		weights[4] = 0;
	}
}