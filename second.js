
let map =  new Map();
map.set(1 , "one");
map.set(2 , "two");
map.set(3 , "three");
map.set(4 , "four");
map.set(5 , "five");
map.set(6 , "six");
map.set(7 , "seven");
map.set(8 , "eight");
map.set(9, "nine");
map.set(10 , "ten");
map.set(11 , "eleven");
map.set(12 , "twelve");
map.set(13 , "thirteen");map.set(14 , "fourteen");map.set(15 , "fifteen");map.set(16 , "sixteen");
map.set(17 , "seventeen");map.set(18 , "eighteen");map.set(19 , "nineteen");map.set(20 , "twenty");
map.set(30 , "thirty");map.set(40 , "fourty");map.set(50 , "fifty");map.set(60 , "sixty");
map.set(70 , "seventy");map.set(80 , "eighty");map.set(90 , "ninety");map.set(100 , "hunderd");
map.set(1000 , "one Thausand");


const printInWords = function( n){
    if( n === 1000) return map.get(1000);
    let output  = "";
    let count  = 0 ;
    let currNo  = 0 ;

    while(n > 0){
        if(count === 2){
            if( currNo%10 == 0){
                output = map.get(currNo-(currNo%10))+" "+ output;
            }else{
                output = map.get(currNo-(currNo%10))+" "+ map.get(currNo%10)+" "+ output;
            }
           
           count = 0 ;
           currNo = n%10;
           currNo = 1;
        }else{
            if(count == 0 ){
                currNo = n%10;  
            }else{
                currNo = (n%10)*10 + parseInt(currNo);
            }
          count++;
        }
      n = parseInt(n/10); 
      
    }
  output = map.get(currNo)+" "+ output;  
  return output;
}
let n = 170;
    n = parseInt(n);
console.log(printInWords(n));
