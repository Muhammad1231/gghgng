function startClassification()
{
    navigator.mediaDevices.getUserMedia({aidio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}