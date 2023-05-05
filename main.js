function startClassifier() 
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MQ7U_Abf3/model.json' , modelReady  );
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1 ;
        random_number_g = Math.floor(Math.random() * 255) + 1 ;
        random_number_b = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label ;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+ (results[0].confidence*100).toFixed(2)+"%" ;

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," +random_number_b +")" ;
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," +random_number_b +")" ;

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('sheep');
        img3 = document.getElementById('cow');

        if (results[0].label == "dog"){
            img.src = 'dgif.gif' ;
            img1.src = 'cat.jpg' ;
            img2.src = 'sheep.jpg' ;
            img3.src = 'cow.jpg' ;
        }else if (results[0].label == "cat"){
            img.src = 'd2.jpg' ;
            img1.src = 'catgif.gif' ;
            img2.src = 'sheep.jpg' ;
            img3.src = 'cow.jpg' ;
        }
        else if (results[0].label == "sheep"){
            img.src = 'd2.jpg' ;
            img1.src = 'cat.jpg' ;
            img2.src = 'sgif.gif' ;
            img3.src = 'cow.jpg' ;
       
        }
        else {
            img3.src = 'cgif.gif' ;
            img.src = 'd2.jpg' ;
            img1.src = 'cat.jpg' ;
            img2.src = 'sgif.gif' ;
        
       
        }
    }
    

    
}