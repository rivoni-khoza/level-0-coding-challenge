function numberTotime(num){

let hour = (num /60)

let seconds = (hour * 3600) % 3600;
let minutes = seconds / 60;
console.log(hour, "hour" ,minutes,"minutes" );
}numberTotime(80)