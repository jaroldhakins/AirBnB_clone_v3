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
});
