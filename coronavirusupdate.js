// ==UserScript==
// @name         COrona Vaccine
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://selfregistration.cowin.gov.in/*
// @icon         https://www.google.com/s2/favicons?domain=gov.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   function cheackIfCoronaVaccineAvailable() {
	 function getElementsByText(str, tag = 'a') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
  }
   if(getElementsByText("Age 18+",'span').length>6){

        var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
	 let popupAudioPlayer=new Audio(mp3_url);
     let counter = 8;

    const customPlay = function() {
      popupAudioPlayer.play();
      counter--;

      if (counter === 0) {
        popupAudioPlayer.removeEventListener('ended', customPlay);
      }
    };

    popupAudioPlayer.addEventListener('ended', customPlay);

    popupAudioPlayer.currentTime = 0;
    popupAudioPlayer.loop = false;
    customPlay();




   }
       else{
       if(getElementsByText("Get OTP","ion-button").length>0){
          var mp3_url2 = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
	 let popupAudioPlayer=new Audio(mp3_url2);
     let counter = 2;

    const customPlay = function() {
      popupAudioPlayer.play();
      counter--;

      if (counter === 0) {
        popupAudioPlayer.removeEventListener('ended', customPlay);
      }
    };

    popupAudioPlayer.addEventListener('ended', customPlay);

    popupAudioPlayer.currentTime = 0;
    popupAudioPlayer.loop = false;
    customPlay();

       }else{
	   document.querySelector(".pin-search-btn").click();
        //   Age 18+
           getElementsByText("Age 18+",'label')[0].click();
       var mp3_url1 = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';

       (new Audio(mp3_url1)).play();
       }
   }

}

 setInterval(cheackIfCoronaVaccineAvailable, 60000);
})();
