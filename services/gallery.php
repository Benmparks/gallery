<?php

function buildGallery($name) {
	
	//create a new array to populate with image 
	$images = array();
	//the name of the folder we'll be pulling images from
	$folder = "../galleries/" . $name;

	if(is_dir($folder)) {
		$files = scandir($folder);
		
		foreach ($files as $key => $value) {
			$url = $folder . "/" . $value;
			$isImage = getimagesize($url) ? true : false;
			
			if(!$isImage) {
				unset($files[$key]);	
			}
		}
		
		$images = array_values($files);
		
	} else {
		$images = NULL;
	}
	
	return $images;
}