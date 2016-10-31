var hello = ["Hello there!", "Nice to meet you!", "Hi", "I love you <3", "I am awesome!", "Click me!", "Don't worry, be happy :)"]

$(".bubble").hide();

$("#pusheen").click(saySomething)

function saySomething() {
  $(".bubble").html("");
  console.log("clicked");
  $(".bubble").show();
  $(".bubble").append(hello[Math.floor(Math.random() * 6)])
}

$(window).keypress(function(e) {
  if (e.keyCode == 32) {
    console.log('Space pressed');
    $(".bubble").hide();
    
  }
});

