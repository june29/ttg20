$(function() {
  function filter() {
    $('#result li').removeClass('hidden');

    var query = $('#name').val();
    var regex = new RegExp(query);

    $('#result li').each(function() {
      if (!$(this).text().match(regex)) {
        $(this).addClass('hidden');
      }
    })
  }

  $.getJSON('./numbers.json?' + (new Date()).getTime(), function(numbers) {
    var array = new Array();

    $.each(numbers, function(name, number) {
      array.push([name, number]);
    });

    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        for (var k = j + 1; k < array.length; k++) {
          if (array[i][1] + array[j][1] + array[k][1] == 20) {
            $('#result').append(
              $('<li/>').text(
                array[i][0] + '(' + array[i][1] + ') - ' +
                array[j][0] + '(' + array[j][1] + ') - ' +
                array[k][0] + '(' + array[k][1] + ')'
              )
            );
          }
        }
      }
    }
  });

  $('#name').on('keyup',   filter);
  $('#name').on('keydown', filter);
  $('#name').on('change',  filter);
});
