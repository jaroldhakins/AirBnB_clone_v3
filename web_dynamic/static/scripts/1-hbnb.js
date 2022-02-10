// Listen for changes on each input checkbox tag

let check_box = {}
$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':check_box')) {
      check_box[$(this).data('id')] = $(this).data('name');
    } else {
      delete check_box[$(this).data('id')];
    }
  })
  $('div.amenities h4').html(function () {
    let listUp = [];
    Object.keys(check_box).forEach(function (key) {
      listUp.push(check_box[key]);
    });
    if (listUp.length > 0) {
      return $('div.amenities h4').text(listUp.join(', '));;
    }
    return ('empty;')
  });
});
