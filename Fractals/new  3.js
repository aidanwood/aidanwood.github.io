function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randFern(startP)
{
	var i = 1;
	while(i<1000000)
	{
		//r = random(1,100);
		r = 15;
		
		if(r ==1)
		{
			nextP[0] = 0;
			nextP[1] = 0.16*startP[1];
			ctx.fillRect(nextP[0],nextP[1],5,5);
			startP = nextP;
			i+=1;
		}
		else if(r >= 15 && r <= 100)
		{
			nextP[0] = (.85*startP[0])+(0.04*startP[1]);
			nextP[1] = (-0.04*startP[0])+(.85*startP[1])+1.6;
			ctx.fillRect(nextP[0],nextP[1],5,5);
			startP = nextP;
			i+=1;
		}
		else if(r>=2 && r<=7)
		{
			nextP[0] = (0.2*startP[0]) - (.26*startP[1]);
			nextP[1] = (.23*startP[0]) + (.22*startP[1]) + 1.6;
			ctx.fillRect(nextP[0],nextP[1],5,5);
			startP = nextP;
			i+=1;
		}
		else if(r>=8 && r<=14)
		{
			nextP[0] = (-0.15*startP[0]) + (.28*startP[1]);
			nextP[1] = (.26*startP[0])+(.24*startP[1])+.44;
			ctx.fillRect(nextP[0],nextP[1],5,5);
			startP = nextP;
			i+=1;
		}
	}
}