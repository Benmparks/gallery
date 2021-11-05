# Web Gallery
A web service and front end to build simple gallery websites for photo portfolio purposes.  Front end built on Bootstrap, JQuery and using Fancybox for modal.

The concept of the project is to be able to drop image files into a folder, have the server retrieve a list of them and return it to the front end
where the images are linked in the gallery and using Fancybox displayed in the modal.  The thought process is to make it as portable as possible
and have it be reusable on multiple pages to display different gallery types.

All photo images in the "galleries" folder provided copyright Ben Parks Photography.

A full demonstration is available on https://www.benparksphotography.com

TODOs:

- Move away from JQuery and implement building the gallery and interactions via React
- Update version of Fancybox to the latest version written in raw JS
- Implement SQL database that allows for image descriptions and more robust image management
