random_number=((Math.random()*array_1.lenght)+1)

Element_of_array=array_1[random_number];

function draw() {
    check_sketch();
}

function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}

function clearCanvas() {
    canvas.background("white");
}

function check_sketch() {
    timer_counter=('timer_counter'+1);
    document.getElementById("timer");

    console.log("timer_counter");

    if(timer_counter>400) {
        timer_counter=0;
        timer_counter.active=false;
    }
}

function update_canavs() {
}

if(drawn_sketch=sketch) {
    answer_holder=set;
    
    score='score'+1;
    document.getElementById("score");
}

sketch="";

function preload() {
    classifier=ml5.imageClassifier('DoodleNet');
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    }

    else {
        console.log(results);
        document.getElementById('label').innerHTML='Label:'+results[0].label;

        document.getElementById('confidence').innerHTML='Confidence:'+Math.round(results[0].confidence*100)+'%';
    }
}

function classifyCanavas() {
    classifier.classify(canvas, gotResult);
}