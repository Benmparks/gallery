		/* When the user clicks on the button, 
		toggle between hiding and showing the dropdown content */
		$("a.dropbtn").click(function() {
			if($("#myDropdown").is(":visible")) {
				$("#myDropdown").slideUp("slow");
			} else {
				$("#myDropdown").slideDown("slow");
			}
		});

		// Close the dropdown menu if the user clicks outside of it
		$(document).mouseup(function (e) {
			var container = $('.dropdown');
			if (!container.is($(e.target)) && container.has($(e.target)).length === 0) {
				$("#myDropdown").slideUp("slow");
			}
		});