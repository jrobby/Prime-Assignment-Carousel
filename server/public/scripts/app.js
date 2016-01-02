var indx = 0;
var students;

$(document).ready(function(){
    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data){

            students = data.people;

            makeCarousel(students);

            $("#next").on('click', nextClick);
            $("#prev").on('click', prevClick);

            newShowcase();
            timer();
            }
        })
    }

function makeCarousel(array){
    assignIndxs(array);
   $("#peopleContainer").append('<div class="carousel"></div>');
    $(".carousel").append('<button class="bttn" id="prev">PREV</button>');
    $(".carousel").append('<button class="bttn" id="next">NEXT</button>');

}

function nextClick () {
    $('#'+indx).fadeOut("fast");
    if (indx!==students.length-1) {
        indx++;
    } else {
        indx=0;
    }
    newShowcase();
}

function prevClick() {
    $('#'+indx).fadeOut("fast");
    if (indx!==0) {
        indx--;
    } else {
        indx=students.length-1;
    }
    newShowcase();
}


function timer() {
    setInterval(
        function(){
            nextClick();
        }, 10000
    );
}

function assignIndxs (things) {
    for (var i = 0; i < things.length; i++) {
        $('#peopleContainer').append('<div class="index-point" id=' + i + '>' +
                                        '<br>' +
                                        '<p>' + things[i].name + '</p>'+
                                        '<br>' +
                                        '<p>' + things[i].location + '</p>' +
                                        '<br>' +
                                        '<p>' + things[i].animal + '</p>' +
                                        '<br>' +
                                        //'<img src="' + things[i].img + '" alt="'+things[i].animal+'"/>');
                                    '</div>');
        $('#'+i).hide();
    }
}

function newShowcase() {
    $('#'+ indx).fadeIn();
}


