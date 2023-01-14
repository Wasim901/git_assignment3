
let num = 13;

for(let i = 2; i<=num; i--){
  if(num%i==0){
    count++;
  }
}
(count = 1)?console.log("Yes"):console.log("No");
