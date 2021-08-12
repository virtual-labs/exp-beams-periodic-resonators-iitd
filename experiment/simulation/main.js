function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2-6      

}



function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        

}



// function navNext3()

// {

//         document.getElementById("canvas3").style.visibility="hidden";

//         document.getElementById("canvas4").style.visibility="visible";


// }




function ok2()
{

var eID = document.getElementById("mat1");
var colorVal = eID.options[eID.selectedIndex].value;

document.getElementById('img4').src=colorVal;
document.getElementById('smsg').innerHTML="&nbsp;";

}

var freq = 0;

function showh()
{
	freq = document.getElementById("mat1").value;
	if (freq == "images/h1.png")
	{
	document.getElementById("beam1").style.visibility="visible";
	document.getElementById("s1b").style.visibility="visible";
	document.getElementById("hammer1").style.visibility="visible";
	document.getElementById("hammerarrow1").style.visibility="visible";
	document.getElementById("cond2").style.visibility="visible";
	document.getElementById('smsg').innerHTML="&nbsp;";
	}
	else if (freq == "images/h3.png")
	{
	document.getElementById("beam1").style.visibility="visible";
	document.getElementById("s1b").style.visibility="visible";
	document.getElementById("hammer1").style.visibility="visible";
	document.getElementById("hammerarrow1").style.visibility="visible";
	document.getElementById("cond2").style.visibility="visible";
	document.getElementById('smsg').innerHTML="&nbsp;";
	}

	else if (freq == "images/h5.png")
	{
	document.getElementById("beam1").style.visibility="visible";
	document.getElementById("s1b").style.visibility="visible";
	document.getElementById("hammer1").style.visibility="visible";
	document.getElementById("hammerarrow1").style.visibility="visible";
	document.getElementById("cond2").style.visibility="visible";
	document.getElementById('smsg').innerHTML="&nbsp;";
	}

	// if (freq !== 0)
	// {
	// document.getElementById("beam1").style.visibility="visible";
	// document.getElementById("s1b").style.visibility="visible";
	// document.getElementById("hammer1").style.visibility="visible";
	// document.getElementById('smsg').innerHTML="&nbsp;";
	// }
	else
	{
		document.getElementById('smsg').innerHTML="Select Frequency";
	}

}




function showgraph()

{
	freq = document.getElementById("mat1").value;

	document.getElementById("cond2").style.visibility="hidden";
	document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="freehand1 2s forwards";
    document.getElementById("vibhit1").style.visibility="visible";
	document.getElementById("vibhit2").style.visibility="visible";
	document.getElementById("vibhit1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit2").style.animation="shake 0.5s infinite";

    setTimeout(function()
            {

if (freq == "images/h1.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/casea.gif";
		document.getElementById('cname').innerHTML="Graph for Frequency 1";

	}
else if (freq == "images/h2.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/caseb.gif";
		document.getElementById('cname').innerHTML="Graph for Frequency 2";
		
	}

else if (freq == "images/h3.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/casec.gif";
		document.getElementById('cname').innerHTML="Graph for Frequency 2";
		
	}

else if (freq == "images/h4.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/cased.gif";
		document.getElementById('cname').innerHTML="Graph for Frequency 4";
		
	}

else if (freq == "images/h5.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/casee.gif";
		document.getElementById('cname').innerHTML="Graph for Frequency 3";
	}

else
	{
		document.getElementById('smsg').innerHTML="Select Frequency";
	}
	
},3000);
}

function reset()

{
	location.reload();
}


