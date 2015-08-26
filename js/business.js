if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","xml/business.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
x=xmlDoc.getElementsByTagName("Course");

function infor(i)
{
course=(x[i].getElementsByTagName("Id")[0].childNodes[0].nodeValue);
title=(x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue);

txt="  ID:"+course+"<br>"+title+"<br>" ;



document.getElementById("div"+i).innerHTML=txt;
}