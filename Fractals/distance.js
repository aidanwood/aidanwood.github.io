function distance(Point1, Point2)
{
d = math.sqrt(((Point1[0]-Point2[0])(Point1[0]-Point2[0]))+((Point1[1]-Point2[1])(Point1[1]-Point2[1])))
return d;
}


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