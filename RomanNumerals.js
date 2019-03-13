function convertToRoman(num) {
  let romanNum = [];

  //Thousands
  while(num>=1000){
    romanNum.push("M");
    num-=1000;
  }
  //Hundreds
  if(num>=900){
    romanNum.push("CM");
    num-=900;
  }
  else if(num>=500){
    romanNum.push("D");
    num-=500;
  }
  else if(num>=400){
    romanNum.push("CD");
    num-=400;
  }
  while(num>=100){
      romanNum.push("C");
      num-=100;
    }
  //Tens
  if(num>=90){
    romanNum.push("XC");
    num-=90;
  }
  else if(num>=50){
    romanNum.push("L");
    num-=50;
  }
  else if(num>=40){
    romanNum.push("XL");
    num-=40;
  }
  while(num>=10){
      romanNum.push("X");
      num-=10;
    }
  //Ones
  if(num>=9){
    romanNum.push("IX");
    num-=9;
  }
  else if(num>=5){
    romanNum.push("V");
    num-=5;
  }
  else if(num>=4){
    romanNum.push("IV");
    num-=4;
  }
  while(num>=1){
      romanNum.push("I");
      num-=1;
    }
  //Convert array to string and return;
  return romanNum.join("");
}

convertToRoman(798); // Returns DCCXCVIII
