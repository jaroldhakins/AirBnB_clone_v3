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
});
