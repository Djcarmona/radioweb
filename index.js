var ta_rodando_musica;


//feito com bootblocks.com.br
  ta_rodando_musica = false;

//feito com bootblocks.com.br
  $("body").css("height", "100%");
  $("html").css("height", "100%");
  $("body").css("background-image", "url(assets/fundo.jpg)");
  $("body").css("background-repeat", "no-repeat");
  $("body").css("background-position", "center center");
  $("body").css("background-size", "cover");
  $("#cabecalho").css("display", "flex");
  $("#cabecalho").css("justify-content", "center");
  $("#cabecalho").css("background-color", "#1e1e1e");
  $("#controles").css("background-color", "rgba(0, 0, 0, 0)");
  $("#controles").css("display", "flex");
  $("#controles").css("justify-content", "center");
  $("#"+'player').hide();
  $("#"+'controles').css("margin-left", 0+ "px");
  $("#"+'controles').css("margin-right", 0+ "px");
  $("#"+'controles').css("margin-top", 190+ "px");
  $("#"+'controles').css("margin-bottom", 0+ "px");

//feito com bootblocks.com.br
  $("#contato").css("display", "flex");
  $("#contato").css("justify-content", "center");
  document.getElementById('contato').style.position = "fixed";
  document.getElementById('contato').style.bottom = "0px";
  document.getElementById('contato').style.left = "0";
  document.getElementById('contato').style.right = "0";
  document.getElementById('contato').style.zIndex = "20";
  $("#"+'whats_img').css("margin-left", 10+ "px");
  $("#"+'whats_img').css("margin-right", 10+ "px");
  $("#"+'whats_img').css("margin-top", 5+ "px");
  $("#"+'whats_img').css("margin-bottom", 0+ "px");
  document.getElementById('contato').style['cursor'] = 'pointer';

$(document).on("click", "#contato", function(){
  let msg_uri_encoded = window.encodeURIComponent('Olá Retro!');
  window.open("https://api.whatsapp.com/send?phone=" + ('+55' + '51981683866') + "&text=" + msg_uri_encoded, "_blank");
});

$(document).on("click", "#play_btn", function(){
  if (!ta_rodando_musica) {
    ta_rodando_musica = true;
    document.getElementById('player').play();
    $("#play_btn").attr("src", "assets/" + 'pause.png');
  } else {
    ta_rodando_musica = false;
    document.getElementById('player').pause();
    $("#play_btn").attr("src", "assets/" + 'play.png');
  }
});

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });