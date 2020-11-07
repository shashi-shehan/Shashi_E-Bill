
	
	function BilCal(){
		var BillNo=document.getElementById("BillNo").value;
		var Date_F=document.getElementById("Date_F").value;
		var Date_T=document.getElementById("Date_T").value;
		
		var Used_Units=document.getElementById("Used_Units").value;
		
		var charge=0;
	
	if(Used_Units<=60)
	{
		charge=7.85*Used_Units;
	}
	else if(Used_Units<=90)
	{
		charge=(60*7.85)+((Used_Units-60)*10);
	}
	else if(Used_Units<=120)
	{
		charge=(60*7.85)+(30*10)+((Used_Units-90)*27.75);
	}
	else
	{
		charge=(60*7.85)+(30*10)+(30*27.75)+((Used_Units-120)*32);
	}
	
	window.alert("Bill No :"+BillNo+"\n"+ "Date from: "+Date_F+" to : "+Date_T+ "\n"+ "Used Units : "+Used_Units+"\n"+"Bill amount : "+charge);
	}
	
	function Clear_Form()
	{
		var BillNo=document.getElementById("BillNo").value="";
		var Date_F=document.getElementById("Date_F").value="";
		var Date_T=document.getElementById("Date_T").value="";
		
		var Used_Units=document.getElementById("Used_Units").value="";
		
	}
	
