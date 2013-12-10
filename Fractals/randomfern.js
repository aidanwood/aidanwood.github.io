function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randFern(start1, start2, start3, start4)
{
	var i = 1;
	while(i<1000000)
	{
		//r = random(1,100);
		r = 15;
		
		if(r ==1)
		{
			nextP[0] = 0;
			nextP[1] = 0.16*start1[1];
			ctx.fillRect(nextP1[0],nextP1[1],5,5);
			start1 = nextP1;
			i+=1;
		}
		else if(r >= 15 && r <= 100)
		{
			nextP2[0] = (.85*start2[0])+(0.04*start2[1]);
			nextP2[1] = (-0.04*start2[0])+(.85*start2[1])+1.6;
			ctx.fillRect(nextP2[0],nextP2[1],5,5);
			start2 = nextP2;
			i+=1;
		}
		else if(r>=2 && r<=7)
		{
			nextP3[0] = (0.2*start3[0]) - (.26*start3[1]);
			nextP3[1] = (.23*start3[0]) + (.22*start3[1]) + 1.6;
			ctx.fillRect(nextP3[0],nextP3[1],5,5);
			start3 = nextP3;
			i+=1;
		}
		else if(r>=8 && r<=14)
		{
			nextP4[0] = (-0.15*start4[0]) + (.28*start4[1]);
			nextP4[1] = (.26*start4[0])+(.24*start4[1])+.44;
			ctx.fillRect(nextP4[0],nextP4[1],5,5);
			start4 = nextP4;
			i+=1;
		}
	}
}