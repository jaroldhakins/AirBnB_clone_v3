// Listen for changes on each input checkbox tag

let check_box = {}
$(document).ready(function () {
  $('input:checkbox').click(function () {
    if (this.checked) {
      check_box[$(this).data('id')] = check_box[$(this).data('name')];
    } else {
      delete check_box[$(this).data('id')];
    }
    $('div.amenities h4').html(function () {
      let list_updated = [];
      Object.keys(check_box).forEach(function (k) {
        list_updated.push(check_box[k]);
      });
      return (list_updated);
    });
  });
});
