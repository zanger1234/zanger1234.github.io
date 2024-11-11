$("#btn_contact").click(function(){
    //Collecting data
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    
    //AJAX sending data to php code
    if(name && email){
    $.post("mail.php",
        {
            visitor_name: name,
            visitor_email: email,
            visitor_message: message,
        },
        function(response){
            //Response from PHP in alert 
            alert(response);
        }
    );
    }
});