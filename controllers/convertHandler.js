/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function (input) {
    var result = input.match(/[a-z]+|[^a-z]+/gi);//serperate the number and the word to the array

    if (result.length == 1) {
      return result = 1;
    }
    var subResult = result[0].split(/\//); // if the number is "3.5/4", subResult will be ["3.5","4"]
    var notANumber = isNaN(result[0]);
    if (notANumber == true && subResult.length == 2) {
      result[0] = Number(subResult[0]) / Number(subResult[1]);
    } else if (notANumber == true) {
      result[0] = "invalid Number"
    }
    return result[0];
  };

  this.getUnit = function (input) {
    var result = input.match(/[a-z]+|[^a-z]+/gi);
    if (result.length == 1) {
      return result[0];
    }
    var resultUnit = result[1].toLowerCase();
    if (resultUnit === "gal" ||resultUnit === "lbs" ||resultUnit === "l" ||resultUnit === "kg" || resultUnit ==="mi" ||resultUnit === "km") {
      return resultUnit;
    } else{
    return resultUnit = "invalid Unit";}
  };

  this.getReturnUnit = function (initUnit) {
    var result;
    switch (initUnit) {
      case "gal":
        result = 'l';
        break;
      case "l":
        result = 'gal';
        break;
      case "mi":
        result = 'km';
        break;
      case "km":
        result = 'mi';
        break;
      case "lbs":
        result = 'kg';
        break;
      case "kg":
        result = 'lbs';
        break;



    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;
    var unitObject = {
      gal: "Gallon", lbs: "pound", l: "Liter", kg: "Kilogram", mi: "Mile", km: "Kilometre"
    };
    var keysOfObject = Object.keys(unitObject); //received the array of the keys of unitObject
    var index1 = keysOfObject.indexOf(unit); 
    result = unitObject[keysOfObject[index1]];


    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result;
    switch (initUnit) {
      case "gal":
        result = galToL * Number(initNum);
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = lbsToKg * Number(initNum);
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = miToKm * Number(initNum);
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }
    return result.toFixed(7);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
  
    var result;
    if (initNum=="invalid Number"||initUnit=="invalid Unit"){
      return result="invalid string";
    }
   //initNum=initNum.toFixed(5);
    returnNum=Number(returnNum).toFixed(5);
    var unitObject = {
      gal: "Gallon", lbs: "pound", l: "Liter", kg: "Kilogram", mi: "Mile", km: "Kilometre"
    };
    var keysOfObject = Object.keys(unitObject); //received the array of the keys of unitObject
    var index1 = keysOfObject.indexOf(initUnit); 
    var initUnitDetail = unitObject[keysOfObject[index1]];
    var index2 = keysOfObject.indexOf(returnUnit);
    var returnUnitDetail = unitObject[keysOfObject[index2]];

   result=`${initNum} ${initUnitDetail} converts to ${returnNum} ${returnUnitDetail}`

    return result;
  
  };

}

module.exports = ConvertHandler;
