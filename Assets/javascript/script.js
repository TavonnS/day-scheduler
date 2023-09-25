$(function () {

  var currentTime = dayjs().hour();
  
  var date = dayjs().format("dddd, MMMM D")
  
  $("#currentDay").text(date + "th");


  $(".time-block").each(function() {
  var id = $(this).attr("id");
  $("#"+id+" .description").val(localStorage.getItem(id));
  });
  
  $(".time-block").each(function() {
    if(currentTime == $(this).attr("id")) {
      $(this).addClass("present") }
    else if (currentTime > $(this).attr("id")) {
      $(this).addClass("past") }
      else {
        $(this).addClass("future")
      }
    })
  
  $(".saveBtn").each(function() {
    $(this).on("click", function(){
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text)
    });
  
  });

})
