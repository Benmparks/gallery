    	
    	function buildGallery(name) {
    		
			const url = "services/api.php?name=" + name;
			
			fetch(url, {method: 'get'}).then(response => response.json())
				.then(jsonData => {
				 	images = jsonData.data;
        			
        			for(let i = 0; i < images.length; i++) {
						const imgURL = "galleries/" + name + "/" + images[i];
						const img = $('<img>').attr('src', imgURL);						
						
						img.on('load', function() {
							var width = $(this).get(0).naturalWidth;
							var height = $(this).get(0).naturalHeight;
							var link = $('<a></a>').attr('href', imgURL).attr('data-fancybox', 'gallery').append(this);
							
							if(height > width) {
								link.addClass("portrait");	
							}
							
							$("#gallery .float-cont").append(link);
						});
					}
				}).catch(err => console.log("Error!"))
				//TODO: Better error handling		
			}