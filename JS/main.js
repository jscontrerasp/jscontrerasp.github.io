function initMap(){
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 41.8708, lng: -87.6505},
		zoom: 13});
	var marker = new google.maps.Marker({
		position: {lat: 41.8708, lng: -87.6505}, 
		map: map, 
        title: 'Department of Computer Science' 
	})
}