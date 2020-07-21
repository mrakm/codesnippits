email="";
function abc(i){
	var email1="";
		 console.log($(".EhHTokBxnf7etdz-mes94").eq(2).find("li").eq(i).innerHTML);
	$(".EhHTokBxnf7etdz-mes94").eq(2).find("li").eq(i).click();
		var checkExist = setInterval(function() {
	   if ($("[data-log-name=Email]").length) {
		 email1=$("[data-log-name=Email]")[0].title.split(" ")[3]+",";
		 email=email+email1;
		 $("[data-log-name=CloseButton]")[0].click();
			console.log(i)
		  clearInterval(checkExist);
	   }
	}, 100);
	return i;
  }
  var m=0;
  function loopon(){
	 abc(m);
	 m++;
	var mm= setTimeout(function(){loopon()} , 1000);
	 if(m>296){
		 clearInterval(mm);
		 console.log(email);
	 }
  }