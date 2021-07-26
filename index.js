//Tickets starts
function call()
{
// document.getElementById("myBtn").addEventListener("click",function()
// {
//   var myBox=document.getElementById("myDiv");
//   if(myBox.style.display=="none")
//   {
//     myBox.style.display="block"
//   }
//   else{
//     myBox.style.display="none"
//   }
// })
  
  // var a;
  // if(a==1)
  // {
  //   document.getElementById("id").style.display="inline";
  //   return a;
  // }
  // else{
  //   document.getElementById("id").style.display="none";
  // }
const url='https://newaccount1627181840813.freshdesk.com/api/v2/tickets';
const promise = fetch(url,{method:'GET',headers: {'Authorization': 'Basic ' + btoa('xJFqgLfqTTzNkn3qP22y:X')}});
promise.then(function(res)
{
return res.json();
}).then(function(data)
{
 //console.log(data);
 var rs="";

 //let  statusCode={ 2:"open",3:"pending",4:"Ressolved",5:"Closed"};

for(var i in data)
{
  //let priorityCode={1:"Low",2:"Medium",3:"High",4:"Urgent"}
  //console.log(datas) ;
  // //return datas;
  rs+="<tr>"
  rs+="<td>" +`<input type="checkbox" id="myCheck">`+ "</td>";
  
  if(data[i].status==2)
  {
    data[i].status="open";
  }
 else  if(data[i].status==3)
  {
    data[i].status="pending";
  }
  else if(data[i].status==4)
  {
    data[i].status="Resolved";
  }
else if (data[i].status==5)
{
  data[i].status="Closed";
}
  rs+="<td>" +data[i].status+ "</td>";//val called
  if(data[i].priority==1)
  {
    data[i].priority="Low";
  }
  else if(data[i].priority==2)
  {
    data[i].priority="Medium";
  }
  else if(data[i].priority==3)
  {
    data[i].priority="High";
  }
if (data[i].priority==4)
{
  data[i].priority="Urgent";
} 
rs+="<td>" +data[i].priority+ "</td>";//val called
rs+="<td>"+data[i].requester_id+"</td>";
rs+="<td>" +`<button> Edit`+ "</td>";
rs+="</tr>"
}
document.getElementById("result").innerHTML=rs; 
})
}

//Tickets closed session



//Contacts starts

function myFunction()
{
const url='https://newaccount1627181840813.freshdesk.com/api/v2/contacts';
const promise = fetch(url,{method:'GET',headers: {'Authorization': 'Basic ' + btoa('xJFqgLfqTTzNkn3qP22y:X')}});
promise.then(function(res)
{
return res.json();
}).then(function(output)
{
 var ts="";
for(var i in output)
{
ts+="<tr>"
ts+="<td>" +`<input type="checkbox" id="myCheck">`+ "</td>";
ts+="<td>" +output[i].email+ "</td>";//val called
ts+="<td>"+output[i].name+"</td>";
ts+="<td>"+output[i].mobile+"</td>";
ts+="<td>" +`<button  onclick="myFunction1"> Edit`+ "</td>";
ts+="</tr>"

}
document.getElementById("result1").innerHTML=ts; 
})
}

//<input type="checkbox" id="myCheck" onclick="Function()">
// var table=document.getElementById("table"),rIndex;
// for(var i=1;i<table.rows.length;i++)
// {
// table.rows[i].onclick=function()
// {
// rIndex=this.rowIndex;
// document.getElementById("email").value=this.cells[0].innerHTML;
// };
// }

// function myFunction1()
// {
// table.rows[rIndex].cells[0].innerHTML=document.getElementByID ("email")
// }

