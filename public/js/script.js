function add_bar(){
    console.log("add progress bar on frontend")
    let statuses = document.getElementsByClassName('status-box');
    let my_headers_of_result = document.getElementsByClassName('my-headers');
    for(var i=0;i<my_headers_of_result.length;i++){
      my_headers_of_result[i].style.visibility = "hidden";
    }
    console.log(statuses)
    for(elem of statuses){
        console.log(elem)
        elem.style.display ="none"
    }
    let myurls = document.getElementsByClassName('url-box');
    console.log(myurls)
    for(elem of myurls){
        console.log(elem.value)
        
    }
    let my_progress = document.getElementById('myProgress');
    let my_bar = document.getElementById('myBar');
    console.log(my_progress,my_bar);
    my_progress.style.display="block";
    my_bar.style.display="block";
    setInterval(() => {
        move();
    }, 10);
    
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}