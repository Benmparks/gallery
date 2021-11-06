# Web Gallery
A web service and front end to build simple gallery websites for photo portfolio purposes.  Front end built on Bootstrap, JQuery, and using Fancybox for modal.

The concept of the project is to be able to drop image files into a folder, have the server retrieve a list of them and return it to the front end
where the images are linked in the gallery and using Fancybox displayed in the modal.  The thought process is to make it as portable as possible
and have it be reusable on multiple pages to display different gallery types.

All photo images in the "galleries" folder provided copyright Ben Parks Photography.

How to use:

- Create a new folder in the "galleries" directory and add your images
- Within your HTML file make sure you include the following snippet somewhere on the page.  This is where your gallery will load:

<div class="row no-gutters content">
    <div class="col-sm-12" id="gallery">
        <div class="lds-dual-ring"></div>
            <div class="float-cont">
                    	
            </div>
         </div>
    </div>
</div>

- At the bottom of your HTML file after loading gallery.js and JQuery call the gallery loader with "name" replaced with the name of the folder you want to 
target in the "galleries" directory.  You will need to keep the quotes around the value you want to pass.

<script type="text/javascript">
		$(document).ready(function() {
			buildGallery("name");		
		});
</script>

A full demonstration is available on https://www.benparksphotography.com

TODOs:
- Move away from JQuery and implement building the gallery and interactions via React and raw JS
- Update version of Fancybox to the latest version written in raw JS
- Implement functionality to read descriptions or other information from a JSON file in the directory for those who may not want to have database administration
- Implement SQL database that allows for image descriptions and more robust image management
