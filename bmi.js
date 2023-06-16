
document.getElementById("calculate").onclick = function(){ calcbmi(); };

function calcbmi(){
  var height = document.getElementById("height").value;
  var measure_len = document.getElementById("L").value;
  var weight = document.getElementById("weight").value;
  var measure_wgh = document.getElementById("W").value;

  // Quick validation
  if(height === "") {
      window.alert("Please enter height");
      return; // this will prevent the function from continuing
  }
  if(weight === ""){
    window.alert("Please enter weight")
    return;
  }
  if(measure_len == 0 || measure_wgh == 0){
    window.alert("Please choose the measurement")
    return;
  }

  if(measure_len == 0.5 && measure_wgh == 0.4){
    var total = (weight)/(0.01*0.01*height*height);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("bmicalci").style.display = "block";
    document.getElementById("bmio").innerHTML = total;
  }
  else if (measure_len == 0.6 && measure_wgh == 0.7){
    var total = (0.4535*weight)/(0.3048*0.3048*height*height);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("bmicalci").style.display = "block";
    document.getElementById("bmio").innerHTML = total;
  }
  else if (measure_len == 0.5 && measure_wgh == 0.7){
    var total = (0.4535*weight)/(0.01*0.01*height*height);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("bmicalci").style.display = "block";
    document.getElementById("bmio").innerHTML = total;
  }
  else{
    var total = (weight)/(0.3048*0.3048*height*height);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("bmicalci").style.display = "block";
    document.getElementById("bmio").innerHTML = total;
  }




}
