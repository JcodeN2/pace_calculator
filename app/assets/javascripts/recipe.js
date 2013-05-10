//test1-2-3

Parse.initialize("5o4zSys3PXx1bRxApmLnlGJhzPJ8TegVes0bfeCP", "8MXhQEhJes123dssbJo3dj7bqfx0WusZ1pdQGlk0");

$(document).ready ->
 
 
  paces = [{
      idnum : 1        
      fivek : "19:00"            
      tenk : "40:00"             
      harmaranth : "01:30"                
      marathon : "03:45"                
    },
    {
      idnum : 2        
      fivek : "20:00"            
      tenk : "42:00"             
      harmaranth : "01:35"                
      marathon : "04:00"               
    }
  ]
  
  $.each paces, (index, pace) ->
    template = JST["templates/test-template"] pace
    $('.test-div').append template