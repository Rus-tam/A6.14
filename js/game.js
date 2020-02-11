const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  $('#button-initial').click( function() {
    $('.container').css('display', 'block');
    firstHitTime = getTimestamp();
  })

  $('.target').removeClass('target');
  let divSelector = randomDivId();
  $(divSelector).addClass("target").append(hits+1);
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $('.game-field').css('display', 'none');
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    $(event.target).text('');
    hits = hits + 1;
    round();
  } 
}

function init() {
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
