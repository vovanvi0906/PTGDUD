var massMark = 95;
var heightMark = 1.88;
 
var massJohn = 85;
var heightJohn = 1.76;

var BMIMark = (massMark/heightMark*heightMark)
var BMIJohn = (massJohn/heightJohn*heightJohn)

console.log("Weight Mark: " + massMark)
console.log("Height Mark: " + heightMark)
console.log("Weight John: " + massJohn)
console.log("Height John: " + heightJohn)


console.log("BMI cua Mark: " + BMIMark);
console.log("BMI cua John: " + BMIJohn);

var markHighterBMI = BMIMark > BMIJohn
console.log("Mark co BMI cao hon John hay khong ?  " + markHighterBMI)
