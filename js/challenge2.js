$("#useBilling").click(function(){
	var home = $("#home");
	var billing = $("#billing");

	if (this.checked){
		console.log("checked");
		home.attr("disabled", "disabled");
		home.val($(billing).val());}
	else {
		console.log("not checked");
		home.val("");
		home.removeAttr("disabled");}
})