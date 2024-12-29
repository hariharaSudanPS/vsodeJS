var red
var yellow
var green
function traffic_light(singal){
  if(singal==="red"){
    console.log("Stop")
  }
  else if(singal==="yellow" ){
    console.log("Get Ready")
  }
  else if(singal==="green"){
    console.log("Go")
  }
  else{
    console.log("singal out of service")
  }
}
traffic_light("red")
traffic_light("yellow")
traffic_light("green")
