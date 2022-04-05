prediction_1=null;
prediction_2=null;
Webcam.set(
{
    width:300,
    height:300,
    image_format:'png',
    png_quality:100
}
); 
cam=document.getElementById("camera");
Webcam.attach('#camera'); 

function capture(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri +'"/>';
    });
} 
console.log('ml5 version',ml5.version); 
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BMJ4FIsjX/model.json',model_loaded);
function model_loaded(){
    console.log('model loaded');
} 
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first speech prediction is " + prediction_1;
    speak_data_2="The second speech prediction is " + prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}