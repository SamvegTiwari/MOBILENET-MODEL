Webcam.set({
 width:310,
 height:300,
 image_format:"png",
 png_quality:90,

 constraints:{
 facingMode:"environment"
 }

});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function captureimg(){
 Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML="<img id='Capture_img' src='" + data_uri+ "'>"
 })  
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("Mobilenet", model_loaded);

function model_loaded(){
 console.log("model has been loaded successfully")   
}

function Snap_img(){
 img=document.getElementById("Capture_img");
 classifier.classify(img, got_results)
}

function got_results( error, result){
  if (error){
  console.error(error);
  } else{
  console.log(result);   
  document.getElementById("box1").innerHTML=result[0].label;
  document.getElementById("box2" ).innerHTML= result[1].label;
  }


}