var hello = ["Hello there!", "Nice to meet you!", "Hi", "I love you <3", "I am awesome!", "Click me!", "Why you cry?", "Don't worry, be happy :)"]

$(".bubble").hide();

$("#pusheen").click(doSomething)

function doSomething() {
  $(".bubble").html("");
  console.log("clicked");
  $(".bubble").show();
  $(".bubble").append(hello[Math.floor(Math.random() * 7)])
}

