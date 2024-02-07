$(document).ready(function(){
  var apiKey = 'NnTjzsSmDSK4pcys6fBBI5O9ptu64KorblDPRpBXEbZnWTe4PRMGbVq6';
  var apiUrl = 'https://api.pexels.com/v1/search?query=';

  // Funzione per caricare le foto in base alla query
  function loadPhotos(query) {
    $.ajax({
      url: apiUrl + query,
      headers: {
        'Authorization': apiKey
      },
      success: function(data) {
        $('#results').empty(); // Svuota i risultati precedenti
        var photos = data.photos;
        photos.forEach(function(photo) {
          $('#results').append(
            '<div class="col-md-4 mb-4">' +
              '<div class="card">' +
                '<img src="' + photo.src.large + '" class="card-img-top" alt="' + photo.photographer + '">' +
                '<div class="card-body">' +
                  '<p class="card-title">' + photo.photographer + '</p>' +
                  '<p class="card-text">' + photo.photographer_url + '</p>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        });
      }
    });
  }

  // Carica le foto di natura al clic sul pulsante
  $('#natureButton').click(function() {
    loadPhotos('nature');
  });

  // Carica le foto di città al clic sul pulsante
  $('#cityButton').click(function() {
    loadPhotos('summer');
  });
  $('#clearButton').click(function() {
    $('#results').empty();
    lastQuery = ''; // Resettare l'ultima query
  });
});
