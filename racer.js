var playerOnePos = 1;
var PlayerTwoPos = 1;

var updatePlayerPosition = function(player, position){
  $('#player' + player + ' td').removeClass('active');
  $('#player' + player + ' td:eq(' + (position) + ')').addClass("active");
}

$(document).ready(function(){

  (document).on('keyup', function(event){
    
    if(event.keyCode==81){
      updatePlayerPosition(1, playerOnePos);
      playerOnePos += 1;
    }

    if(event.keyCode==80){
      updatePlayerPosition(2, playerTwoPos);
      playerTwoPos += 1;
    }
    
  })

})