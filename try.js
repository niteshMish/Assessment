let arr  = [ 1,2,3,4,5,6,7,8,9,10];
let k = 9;
k = k % arr.length;
const rotateArr = function(){
   arr.reverse();
   console.log(arr);
   rotation(0 , arr.length - k - 1  , arr);
   rotation(arr.length - k  , arr.length -1 , arr);
};
const rotation = function( i , j , arr){
    while( i < j ){
        // do swaping 
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i++;
        j--;
    }
}
rotateArr();
console.log(arr);

