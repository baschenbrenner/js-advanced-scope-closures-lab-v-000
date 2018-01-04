function produceDrivingRange(blockRange) { return function(street1, street2)
   {
     let numBlocks = turnNumberedStreetToNumber(street1) - turnNumberedStreetToNumber(street2)
     if (numBlocks < 0) {numBlocks = numBlocks * -1}
  if (numBlocks > blockRange)
  {return `${numBlocks-blockRange} blocks out of range`}
  else
  {return `within range by ${blockRange-numBlocks}`}
}}


function produceTipCalculator(percentageAsDecimal) {return function(bill)
  {
    return bill * percentageAsDecimal
  }

}

function createDriver(){
  let DriverId = 0
  // return the class
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }

    
  }
}

function turnNumberedStreetToNumber(street) {
  let array = []
  for (const char of street) {array.push(char)}
  let new_array = array.filter(char => {return Math.floor(char/10) === 0})
  return new_array.reduce(function getSum(total, num) {return total + num;})
}
