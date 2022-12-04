var weight = Number(prompt(`how much do you weigh? (enter your value in kg)`));
var height = Number(prompt(`how tall are you? (enter in meter, round your value up to one decimal)`));
var BMI = Number(weight/((height)**2));

if (BMI >= 18 & BMI <=25){
    alert(`you are healthy, keep up the good work!`);
}
else if (BMI > 25){
    alert(`you are obese. train your body and keep diet!`);
}

else if (BMI < 18){
    alert(`you are thin, gain more weight!`)
}

else{
    alert(`don't lose yourself, bro! it is easy. just follow the rules. just enter numbers`);
}

