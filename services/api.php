<?php
	header("Content-Type:application/json");
	require 'gallery.php';
	
	//Check to see that we have proper input
	if(!empty($_GET['name'])) {
		$gallery = $_GET['name'];
		$images = buildGallery($gallery);
		
		if(empty($images)) {
			response(200, $gallery . " not found", NULL);
		} else {
			response(200, $gallery . " loaded!", $images);
		}
	} else {
		response(400, "Invalid request", NULL);	
	}
	
	function response($status,$status_message,$data) {
			header("HTTP/1.1 ".$status);
	
			$response['status']=$status;
			$response['status_message']=$status_message;
			$response['data']=$data;
	
			$json_response = json_encode($response);
			echo $json_response;
	}
?>