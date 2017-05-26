var apiKey = "a35ddcdf048cedafced901a74badfaf991aded5f";

$(document).ready(function() {
  $('#subname').click(function() {
    var user = $('#userinput').val();
    $('#userinput').val("");
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then function(response) {
      $('.showuser').text("The user is " + user + response.name +);
    });
  });
});