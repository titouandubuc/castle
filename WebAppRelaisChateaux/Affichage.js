var fs=require('fs');
var json1=require('./Final.json');
var i;
for(i=0;i<41;i++){
	var tableau =document.getElementById('tab');
	tab.innerHTML+='<tr> '+"<td>"+json1.table[i].Nom+"</td>"+"<td>"+json1.table[i].Restaurant+"</td>"+"<td>"+json1.table[i].Prix+"</td>"+'<tr>';

}