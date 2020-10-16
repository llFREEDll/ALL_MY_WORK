
//		(function(){
		function UpdateDate() { 
 		var date= new Date(),
 		hours=date.getHours(),
 		ampm,
 		minuts=date.getMinutes(),
 		seconds=date.getSeconds(),
 		weekDay=date.getDay(),
 		day=date.getDate(),
 		month=date.getMonth(),
		
		 year=date.getFullYear();

 		var pHour=document.getElementById('hour'),
 		pAmpm=document.getElementById('ampm'),
 		pMinut=document.getElementById('minut'),
 		pSeconds=document.getElementById('seconds'),
 		pWeekDay=document.getElementById('dayWeek'),
 		pDay=document.getElementById('day'),
 		pMonth=document.getElementById('month'),
 		pYear=document.getElementById('year');

		 var weekArray=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
		 var months =['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVENBER','DECEMBER'];
		 pWeekDay.textContent=weekArray[weekDay];
		 pDay.textContent=day;
		 pHour.textContent=hours;
		 pMonth.textContent=months[month];
		 pYear.textContent=year;

		 if(hours==0){
		 hours=12;
		 ampm='AM';
		 }
		else if(hours>=12){
		hours=hours-12;
		ampm='PM'
		}
		else ampm='AM';
		pHour.textContent=hours;
		pAmpm.textContent=ampm;
		if(minuts<10)
			minuts="0"+minuts;
		if(seconds<10)
			seconds="0"+minuts;
		pMinut.textContent=minuts;
		pSeconds.textContent=seconds;
	};
	var interval=setInterval(UpdateDate,1000);
//}())