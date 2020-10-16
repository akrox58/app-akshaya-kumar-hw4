$(document).ready(function() {
  function showConfirmation() {
    $('#error').text('');
    $('#correct').text("Validation successful");
    $("#printerMenu").hide();

  }
    
  function showError(field) {
    message = field;
    if(field == "fname")
      message = "First name";
    else if(field == "lname")
      message = "Last name";
    else if(field == "email")
      message = "Email Address";
    else if(field == "notes")
      message = "Notes";
    $('#correct').text('');
    $('#error').text(message + " cannot be empty");
  }
    
  $('#myForm').submit(function(e) {
      e.preventDefault()
      fields = $('#myForm').serializeArray();
      isSuccess = true;
      for(index in fields) {
        value = fields[index].value;
        fieldName = fields[index].name;
        if (value === undefined || value == "") {
          isSuccess = false;
          console.log("Failed!")
          showError(fieldName)
          break;
        }
      }
      
      if(isSuccess) {
        console.log("Success!")
        showConfirmation()
      }
  });
}); 
  
  
  
  