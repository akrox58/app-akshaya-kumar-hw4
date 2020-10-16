$(document).ready(function() {
  function showConfirmation() {
    $('#failure').text('');
    $('#success').text("Validation successful");
  }
    
  function showError(field) {
    message = field;
    if(field == "fname")
      message = "First Name";
    else if(field == "lname")
      message = "Last Name";
    else if(field == "email")
      message = "Email Address";
    else if(field == "notes")
      message = "Notes";
    $('#success').text('');
    $('#failure').text(message + " cannot be empty");
  }
    
  $('#registrationForm').submit(function(e) {
      e.preventDefault()
      fields = $('#registrationForm').serializeArray();
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
  
  
  
  