/**
 * 
 */
import org.querki.jquery._



$("#indoor").click(function() {
	$.post("/image/:indoor");
	

});

//const field = document.getElementById("av-year")
////const text = document.getElementById("text-for-av-temp")
//
//field.onkeydown = (event) => {
//	if(event.key ==='Enter') {
//		const year = field.value;
////		fetch("/averageYearlyHigh/"+year).then(response => {
////			return response.text();
////		}).then(res => {
////			text.innerHTML = res
////		});
//		//$("#text-for-av-temp").load("/averageYearlyHigh/"+year)
//	}
//}
//
//$("#contact").onClick => {
//	$("#PageContent").load("views.html.contact")
//	
//}
