var a=[1,2,"one",-35,67,-33,"ragu", "sonu",0.1];
var b=[];
var c=[];

for(i=0;i<a.length;i++){

	if(typeof a[i]=="number"){
		b.push(a[i]);
		//document.write(b);
		}
		
		
	else if(typeof a[i]==="string"){
		c.push(a[i]);
		//document.write(c);
	}
	
	// else{
			// document.write(a);
	// }

}
document.write(b);
document.write("<br>");
document.write(c);
	