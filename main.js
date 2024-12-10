// task1
const checkPhase=(phase)=>{
switch (phase) {
    case "Dekabr":
    case "Yanvar":
    case "Fevral":
    console.log("Qis");
    break;
    case "Mart":
    case "Aprel":
    case "May":
    console.log("Yaz");
    break;
     case "Iyun":
     case "Iyul":
     case "Avqust":
    console.log("Yay");
    break;
    case "Sentyabr":
    case "Oktyabr":
    case "Noyabr":
    console.log("Payiz");
    break;
    
    default:
    console.log("bele bir fesil yoxdur");
    
}
}

checkPhase("Mart")



// task2
 const checkSpeed=(speed)=>{
  if(speed<=70){
  console.log("Suret mehdudiyyetine uygundur!");
  }if(speed>=71 && speed<=100){
   const penalty=(speed-70)+10;
   console.log(`Suret heddinin asdiginiza gore ${penalty} AZN  cerime odeyeceksiniz!`);
 
 }else{
    console.log("Tehlukeli suret 200AZN cerime");
   
 }

}

checkSpeed(81)


// task3
const checkDateOfBirth=(data)=>{
   switch (data) {
    case "21Mart-20Aprel":
    console.log("Qoc");   
    break;
    case "21Aprel-20May":
    console.log("Buga");   
    break;
    case "20May-21Iyun":
    console.log("Ekizler");   
    break;
    case "21Iyun-20Iyul":
    console.log("Xerceng");   
    break;
    default:
    console.log("Bele bir burc yoxdur!");
    
   }
}

checkDateOfBirth("21Mart-20Aprel")


// task4
const checkWork=(hours)=>{
    const salary=20;
    const additon=25;
     const standartHours=8
    if(hours<=8){
    const dailySalary=hours*20;
    console.log(`Emek haqqi ${dailySalary} AZN!`);
  
}else {
const common=(hours-standartHours)*25+standartHours*20
console.log(common);

}
}

checkWork(10)