 prediction_1 = "";
 prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
 camera= document.getElementById("camera");
 Webcam.attach('#camera');

 function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
})
 }
 console.log('ml5 version:',ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C4U1SK-KW/model.json', modelLoaded);

 function modelLoaded(){
    console.log('MODEL LOADED');
 }

 function speak (){
    var synth = windows.speechSynthesis;
    speak_data_1 = "THE FIRST PREDICTION IS THAT YOU ARE :"+prediction_1;
    speak_data_2 = "AND THE SECOND PREDICTION IS THAT YOU ARE :" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
 }
