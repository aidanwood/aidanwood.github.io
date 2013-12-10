function distance(Point1, Point2)
{
d = math.sqrt(((Point1[0]-Point2[0])(Point1[0]-Point2[0]))+((Point1[1]-Point2[1])(Point1[1]-Point2[1])))
return d;
}
function midpoint(Point1, Point2)
{
var mid = new Array();
mid[0] = ((Point1[0]+Point2[0])/2);
mid[1] = ((Point1[1]+Point2[1])/2);
return mid;
}
function replication(pointA, pointB, pointC, canvas)
{
	disab = distance(pointA, pointB);
	disbc = distance(pointB, pointC);
	disca = distance(pointC, pointA);
	midab = midpoint(pointA, pointB);
	midbc = midpoint(pointB, pointC);
	midca = midpoint(pointC, pointA)
	
}
function createA(pointA, pointB, pointC)
{
	var c = document.getElementById("canvas1");
	var ctx=c.getContext("2d");
	mid1 = midpoint(pointA, pointB);
	mid2 = midpoint(pointB, pointC);
	mid3 = midpoint(pointC, pointA);

	ctx.moveTo(mid1[0],mid1[1]);
	ctx.lineTo(mid2[0],mid2[1]);
	ctx.stroke();
	ctx.moveTo(mid1[0],mid1[1]);
	ctx.lineTo(mid3[0],mid3[1]);
	ctx.stroke();
	ctx.moveTo(mid3[0],mid3[1]);
	ctx.lineTo(mid2[0],mid2[1]);
	ctx.stroke();
	
	return mid1;
}
function createB(pointA, pointB, pointC)
{
	var c = document.getElementById("canvas1");
	var ctx=c.getContext("2d");
	mid1 = midpoint(pointA, pointB);
	mid2 = midpoint(pointB, pointC);
	mid3 = midpoint(pointC, pointA);

	ctx.moveTo(mid1[0],mid1[1]);
	ctx.lineTo(mid2[0],mid2[1]);
	ctx.stroke();
	ctx.moveTo(mid1[0],mid1[1]);
	ctx.lineTo(mid3[0],mid3[1]);
	ctx.stroke();
	ctx.moveTo(mid3[0],mid3[1]);
	ctx.lineTo(mid2[0],mid2[1]);
	ctx.stroke();
	
	return mid2;
}
function createC(pointA, pointB, pointC)
{
	var c = document.getElementById("canvas1");
	var ctx=c.getContext("2d");
	mid1 = midpoint(pointA, pointB);
	mid2 = midpoint(pointB, pointC);
	mid3 = midpoint(pointC, pointA);

	ctx.moveTo(mid1[0],mid1[1]);
	ctx.lineTo(mid2[0],mid2[1]);
	ctx.stroke();
	ctx.moveTo(mid1[0],mid1[1]);
	ctx.lineTo(mid3[0],mid3[1]);
	ctx.stroke();
	ctx.moveTo(mid3[0],mid3[1]);
	ctx.lineTo(mid2[0],mid2[1]);
	ctx.stroke();
	
	return mid3;
}
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generatetri(PointA, PointB, PointC, startP)
{
	var i = 1;
	while(i < 1000000)
	{
		var r = random(1,3);
		if(r == 1)
		{
			 nextP = midpoint(PointA, startP);
			 ctx.fillRect(nextP[0],nextP[1],1,1);
			 startP = nextP;
			 i+=1;
			 
		}
		else if(r == 2)
		{
			nextP = midpoint(PointB, startP);
			ctx.fillRect(nextP[0], nextP[1], 1, 1);
			startP = nextP;
			i+=1;
		}
		else if(r == 3)
		{
			nextP = midpoint(PointC, startP);
			ctx.fillRect(nextP[0], nextP[1], 1, 1);
			startP = nextP;
			i+=1;
		}
	}
}
function generatesq(PointA, PointB, PointC, PointD, startP)
{
	var i = 1;
	while(i < 10000)
	{
		var r = random(1,4);
		if(r == 1)
		{
			 nextP = midpoint(PointA, startP);
			 ctx.fillRect(nextP[0],nextP[1],1,1);
			 startP = nextP;
			 i+=1;
			 
		}
		else if(r == 2)
		{
			nextP = midpoint(PointB, startP);
			ctx.fillRect(nextP[0], nextP[1], 1, 1);
			startP = nextP;
			i+=1;
		}
		else if(r == 3)
		{
			nextP = midpoint(PointC, startP);
			ctx.fillRect(nextP[0], nextP[1], 1, 1);
			startP = nextP;
			i+=1;
		}
		else if(r == 4)
		{
			nextP = midpoint(PointD, startP);
			ctx.fillRect(nextP[0], nextP[1], 1, 1);
			startP = nextP;
			i+=1;
		}
	}
}
function maketriangle(pointA, pointB, pointC)
{
	ctx.moveTo(pointA[0],pointA[1]);
	ctx.lineTo(pointB[0],pointB[1]);
	ctx.stroke();
	ctx.moveTo(pointB[0],pointB[1]);
	ctx.lineTo(pointC[0],pointC[1]);
	ctx.stroke();
	ctx.moveTo(pointC[0],pointC[1]);
	ctx.lineTo(pointA[0],pointA[1]);
	ctx.stroke();

}