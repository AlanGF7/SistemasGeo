function iniciarMapa(){


  var coordenadas = {  lat: 21.152639, lng:  -101.711598 };

  var propiedades = {
      center: coordenadas,
      zoom: 12
  };

  var map1 = new google.maps.Map(document.getElementById('map1'),propiedades);

  var marker = new google.maps.Marker({
      position: coordenadas,
      map: map1
  });

  marker.addListener('click', function(){
      map1.setZoom(8);
      map1.setCenter(marker.getPosition());
  });


  /*     MAPA2       */

  var map2 = new google.maps.Map(document.getElementById('map2'),propiedades);

  var marker2 = new google.maps.Marker({
      position: coordenadas,
      map: map2
  });

  map2.addListener('center_changed', function(){

      window.setTimeout( function(){
          map2.panTo(marker2.getPosition());
      },3000);

  });



  /*     MAPA3       */

  var map3 = new google.maps.Map(document.getElementById('map3'),propiedades);



  map3.addListener('zoom_changed', function(){

      var infowindow = new google.maps.InfoWindow({
          content : 'Cambia el zoom',
          position : coordenadas
      });

      infowindow.open(map3);

      nivelZoom = map3.getZoom();
      infowindow.setContent('Zoom:'+nivelZoom);

  });


  /*     MAPA4      */

  var map4 = new google.maps.Map(document.getElementById('map4'),propiedades);


  map4.addListener('click', function(e){
      console.log(e.latLng);

      estableceMarcador(e.latLng);
  });

  function estableceMarcador(latLng){

      var marker = new google.maps.Marker({
          position: latLng,
          map: map4
      });

      mapa4.panTo(latLng);

  }

  /*     MAPA5      */

  var map5 = new google.maps.Map(document.getElementById('map5'),propiedades);

  var infowindow = new google.maps.InfoWindow({
      content : 'Haz click para obtener las coordenadas',
      position : coordenadas
  });

  infowindow.open(map5);

  map5.addListener('click', function(evento){
      infowindow.close();

      infowindow = new google.maps.InfoWindow({ position: evento.latLng });
      infowindow.setContent(evento.latLng.toString());
      infowindow.open(map5);

  });

  /*     MAPA6   */

  var mapa6 = new google.maps.Map(document.getElementById('map6'),propiedades);

  google.maps.event.addDomListener(mapa6, 'click', function(){
      window.alert(' Se hizo click en el mapa');
  });

  var boton = document.getElementById('btnCentrar');
  google.maps.event.addDomListener(boton, 'click', function(){
       mapa6.panTo(coordenadas);
  });
}