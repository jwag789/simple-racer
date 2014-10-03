// var playerOnePos = 1;
// var playerTwoPos = 1;
// var playerOneScore = 0;
// var playerTwoScore = 0;
var game = true;


// var updatePlayerPosition = function(player, position){
//   $('#player' + player + ' td').removeClass('active');
//   $('#player' + player + ' td:eq(' + (position) + ')').addClass("active");
// }

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
  player1.position = 1;
  player2.position = 1;
}

player1 = new Player('#player1', 'Mew');
player2 = new Player('#player2', 'Celebi');

function Player(element_id, name){
  this.el = $(element_id).selector;
  this.position = 0;
  this.name = name;
  this.check = function(){
    if ($(this.el + ' td:last-child').hasClass("active")){
      console.log("checked");
      $(".winner").html("<h2>" + this.name + " wins!</h2>")
      game = false;
      $(".reset").show();
    }
  }
  this.move = function(position){
    $(this.el + ' td').removeClass('active');
    $(this.el + ' td:eq(' + (this.position) + ')').addClass("active");
    this.check();
  }
}

$(document).ready(function(){

  $(document).on('keyup', function(event){
    if (game===true){

      if(event.keyCode==81){
        player1.move(player1.position);
        // checkWinner(1);
        player1.position += 1;
      }

      if(event.keyCode==80){
        player2.move(player2.position);
        // checkWinner(2);
        player2.position += 1;
      }
    }
    
  })

  $('button').on('click', resetGame)

})