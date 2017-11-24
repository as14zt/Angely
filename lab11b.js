function numButton(){
var userNum = document.getElementById('numinput').value;
for(count=0;count<=userNum;count++){
document.getElementById('output').innerHTML+="<br />" + count;

}
}
