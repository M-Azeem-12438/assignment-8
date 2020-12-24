var a=parseInt(prompt("enter marks in chemistry out of 100 = "));
var b=parseInt(prompt("enter marks in physics out of 100 = "));
var c=parseInt(prompt("enter marks in mathematics out of 100= "));
d=(a+b+c)/3;
if(d>80)
{
console.log( "average markes = ", d," you are above standard admission granted ");
}
if(d<80)
{
console.log("average markes = ", d,"you are not above standard so admission not granted");

}