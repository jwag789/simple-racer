var playerOnePos = 1;
var playerTwoPos = 1;
var playerOneScore = 0;
var playerTwoScore = 0;
var game = true;


var updatePlayerPosition = function(player, position){
  $('#player' + player + ' td').removeClass('active');
  $('#player' + player + ' td:eq(' + (position) + ')').addClass("active");
}

var checkWinner = function(player){
  if ($('#player' + player + ' td:last-child').hasClass("active")){
    $(".winner").html("<h2>Player " + player + " wins!</h2>")
    game = false;
    $(".reset").show();
  }
}

var resetGame = function(){
  $('td').removeClass('active');
  $('td:first-child').addClass('active');
  $('.winner').html("");
  $('button').hide();
  game = true;
  playerOnePos = 1;
  playerTwoPos = 1;
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

  $('button').on('click', resetGame)

})