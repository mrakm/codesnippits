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
const makeClick=(selector,index=0)=>{
    //console.log("155")

   document.querySelectorAll(selector).length?document.querySelectorAll(selector)[index].click():null;
}
const selectWithText=(selectingText,tag,index=0)=>{
    function getElementsByText(str, tag = 'a') {
        return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
    }
    if(getElementsByText(selectingText,tag).length){
    
    getElementsByText(selectingText,tag)[index].click()
    getElementsByText(selectingText,tag)[index].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
    
}
const selectFromAttibute=(selectingText,index=0)=>{
    document.querySelectorAll(`[${selectingText}]`).length?document.querySelectorAll(`[${selectingText}]`)[index].click():null;
}
const fillFromAttibute=(selectingText,value,index=0)=>{
    document.querySelectorAll(`[${selectingText}]`).length?document.querySelectorAll(`[${selectingText}]`)[index].innerHTML=`<p>${value}</p>`:null;
}
// let p1=startAutomation(()=>{
//     selectWithText("Manish Kumar","h4");
// },1000);
// let p2=startAutomation(()=>{
//     selectFromAttibute('aria-label="Write a message…"');
// },1000);
// let p3=startAutomation(()=>{
//     fillFromAttibute('aria-label="Write a message…"',"hello how are you sir");
// },1000);

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
//  runSerial([p1,p2,p3])
  let startClickingOnConnect=(numberOnconnection)=>{
      let s=[];
      for (let i=0;i<numberOnconnection;i++){
          s.push(
            startAutomation(()=>{
            selectWithText('Connect',"span");
            },1000)
          )
      }
    return s;
  }
  let s=startClickingOnConnect(10)
  console.log(s)
  runSerial(s)
