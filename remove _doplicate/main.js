var output = document.getElementById('output');
var myArray = ['HTML' , 'CSS' , 'JAVASCRIPT' , 'PUG' , 'HTML' , 'JAVA', 'HTML' , 'CSS'];
// خانه آخر آرایه = myArray[count] 
var count = myArray.length - 1;
var temp;
output.innerHTML = myArray;
function removeDoplicate(arr){
    for ( i = 0; i < myArray.length; i++) {
        for ( j = i+1; j < myArray.length; j++) {
            if( myArray[i] == myArray[j]){
                temp = myArray[j];
                myArray[j] = myArray[count];
                myArray[count] = temp;
                myArray.pop();
                i--;
                console.log(myArray);
                count--;
            }
            else{
                continue;
            }
        }
    }
    output.innerHTML +='<br>' + myArray;

}