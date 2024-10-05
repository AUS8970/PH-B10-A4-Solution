function calculateTax(income, expense){
  if(typeof income !== 'number' || typeof expense !== 'number' || 0 >= income || 0 >= expense || income < expense){
    return "Invalid Input";
  }
  const tax = income - expense;
  return tax * .20;
}


function sendNotification(email) {
  if(typeof email !== 'string' || !email.includes('@')){
    return "Invalid Email"
  }
  const [userName, domainName] = email.split('@');
  return userName + ' sent you an email from ' + domainName;
}


function checkDigitsInName(name) {
  if(typeof name !== 'string'){
    return "Invalid Input";
  }
  return /\d/.test(name);
}



function calculateFinalScore(obj){
  const { name, testScore, schoolGrade, isFFamily } = obj;
  if(typeof obj !== 'object' || typeof name !== 'string' || typeof testScore !== 'number'  || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean' || testScore > 50 || schoolGrade > 30){
    return "Invalid Input";
  };
  let finalScore = testScore + schoolGrade;
  if(isFFamily){
    finalScore += 20;
  };
  return finalScore >= 80;
} 


function  waitingTime(waitingTimes, serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return "Invalid Input";
  }
  let completed = waitingTimes.length;
  let reduce = waitingTimes.reduce((sum, time) => sum + time);
  return (serialNumber - completed - 1) * (Math.round(reduce / completed));
}