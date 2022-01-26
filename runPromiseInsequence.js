const startAutomation=(fn,delay)=>{
return function(e){
    let ss=(e==undefined)?0:e+1;
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         fn()
          resolve(ss)
      },delay)
   })
}
}
const makeClick=(selector)=>{
    //console.log("155")

   document.querySelectorAll(selector).length?document.querySelectorAll(selector).click():null;
}
let p1=startAutomation(()=>{makeClick()},1000);
let p2=startAutomation(()=>{makeClick()},1000);
let p3=startAutomation(()=>{makeClick()},1000);
let p4=startAutomation(()=>{makeClick()},1000);
function runSerial(tasks) {
    var result = Promise.resolve(0);
    tasks.forEach(task => {
      result = result.then((e) => { 
          console.log(e)
          return task(e)
        });
    });
    return result;
}
runSerial([p1,p2,p3,p4])
  
