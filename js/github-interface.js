var apiKey = "a35ddcdf048cedafced901a74badfaf991aded5f 
";



$(document).ready(function() {
  $('#subname').click(function() {
    var user = $('#userinput').val();
    $('#userinput').val("");
    $.get('https://api.github.com/users/user?access_token=a35ddcdf048cedafced901a74badfaf991aded5f' + apiKey).then(function(response) {
      $('.showuser').text("The user " + user + " has the following repos " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showuser').text(error.responseJSON.message);
    });
  });
});