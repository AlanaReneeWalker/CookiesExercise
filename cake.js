$(document).ready(function(){
  if(location.search){
    params = location.search.split("?")[1]
    answer = params.split("=")[1]
    Cookies.set("answer", answer) name,{expires: 60}
  }
  if(Cookies.get("answer")) {
    $("#question").hide()
    $("#answer_span").html(Cookies.get("answer"))
    }
})