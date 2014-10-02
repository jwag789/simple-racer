var playerOnePos = 1;
var playerTwoPos = 1;
var game = true;

var updatePlayerPosition = function(player, position){
  $('#player' + player + ' td').removeClass('active');
  $('#player' + player + ' td:eq(' + (position) + ')').addClass("active");
}

var checkWinner = function(player){
  if ($('#player' + player + ' td:last-child').hasClass("active")){
    game = false;
  }
}

$(document).ready(function(){

  $(document).on('keyup', function(event){
    if (game===true){
      
      if(event.keyCode==81){
        updatePlayerPosition(1, playerOnePos);
        checkWinner(1);
        playerOnePos += 1;
      }

      if(event.keyCode==80){
        updatePlayerPosition(2, playerTwoPos);
        checkWinner(2);
        playerTwoPos += 1;
      }
    }
    
  })

})