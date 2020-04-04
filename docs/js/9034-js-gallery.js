/* gallery - transparency effect on hover */
$(document).ready(function()
{
	$(".gal").hover(function() {
		$(this).fadeTo("fast",0.6);
	}, function() {
		$(this).fadeTo("fast",1);
	});
});
