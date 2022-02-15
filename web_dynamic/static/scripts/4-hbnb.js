// Listen for changes on each input checkbox tag

$(document).ready(function () {
    let check_box = {}
    $(document).on('change', 'input[type="checkbox"]', function () {
      if (this.checked) {
        check_box[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete check_box[$(this).attr('data-id')]
      }
      let listUp = Object.values(check_box);
      if (listUp.length > 0) {
        $('div.amenities h4').text(listUp).join(', ');
      }
      $('div.amenities h4').html('&nbsp;');
    });
  
    const url = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(url, function (data, status) {
      console.log(data);
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
  
    const url_place = 'http://0.0.0.0:5001/api/v1/places_search/';

    $('button').click(function(){

    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      contentType: 'application/json',
      data: '{}',
      success: function (data) {
        for (let currentPlace of data) {
          $('.places').append('<article> <div class="title"> <h2>' + currentPlace.name + '</h2><div class="price_by_night">' + '$' + currentPlace.price_by_night + '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.max_guest + ' Guests</div><div class="number_rooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_rooms + ' Bedrooms</div><div class="number_bathrooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_bathrooms + ' Bathroom </div></div> <div class="user"></div><div class="description">' + '$' + currentPlace.description + '</div></article>');
        }
      }
      });
    });
});
