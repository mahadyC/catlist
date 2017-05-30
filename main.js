$('document').ready(function() {
    var model = {
        currentCat: null,
        cats: [
            {
                clickCount: 0,
                name: 'mini',
                image: 'image/cat.jpg'
            },
            {
                clickCount: 0,
                name: 'bini',
                image: 'image/cat1.jpg'
            },
            {
                clickCount: 0,
                name: 'sini',
                image: 'image/cat2.jpg'
            },
            {
                clickCount: 0,
                name: 'gini',
                image: 'image/cat3.jpg'
            },
            {
                clickCount: 0,
                name: 'yini',
                image: 'image/cat4.jpg'
            }
        ]
        // names: ['mini', 'bini', 'sini', 'gini', 'yini'],
        // images: ['image/cat.jpg', 'image/cat1.jpg', 'image/cat2.jpg', 'image/cat3.jpg', 'image/cat4.jpg'],
        // counter: [0, 0, 0, 0, 0]
    };

    var catListView = {
        // listview/list of images rendering function
        render: function(){
            var cat,cats;
            cats = octopus.getCats();
        for (var i = 0; i < cats.length; i++) {
            cat = cats[i]; //cat variable pointing to the cat in the mentioned array index
            var catListElement = $('<li id= "'+ cat.name +'"><h2>' + cat.name + '</h2><h3>ClickNum:' + cat.clickCount + ' </h3><img src="' + cat.image + '"></li>');
            //Add click event listener to each list items
            catListElement.click((function(catCopy){
                 return function(){
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
            $('ul').append(catListElement);
            
        }
    }
        // item: $('li'),
        // heading: '',
        // image: '',
        // clickCounter: ''
    };

    var catView = {
       
        render: function(){
              // Incrementing function
              var currentCat = octopus.getCurrentCat();
              
            // render function for the selected/clicked image
            $('#headingId').remove();
            $('#catName').remove();
            $('#image1').remove();

            $('div').append('<h2 id="catName">'+ currentCat.name + '</h2>');
            $('div').append('<h2 id="headingId">Number of clicks:' + currentCat.clickCount + '</h2>');
            $('div').append('<img id="image1" src="' + currentCat.image + '">');

            $('#image1').click(function(){
                    octopus.incrementCounter();
              });
            console.log(currentCat.clickCount);

            $('#admin').click(function(){
                $('section').show();
            });

            $('#cancel').click(function(){
                $('section').hide();
            });
            $('#save').click(function(){
                currentCat.name = $('#catNameInput').val();
                console.log($('#catNameInput').val() );
            });
        }
    };


    var octopus = {
        init: function(){
            catListView.render();
        },
        setCurrentCat: function(cat){
            model.currentCat = cat;
        },
        getCurrentCat: function(){
            return model.currentCat;
        },
        incrementCounter: function(){
            model.currentCat.clickCount++;
            catView.render();
        },
        getCats: function(){
            return model.cats;
        }

    };
    octopus.init();


    // var items = [$('#mini'), $('#bini'), $('#sini'), $('#gini'), $('#yini')];
    // console.log(items[0]);
    // var counter1 = 0;
    // var counter2 = 0;
    // var counter3 = 0;
    // var counter4 = 0;
    // var counter5 = 0;


    // items[0].click(function(){
    //     counter1 = counter1 + 1;
    //     $('#headingId').remove();
    //     $('#catName').remove();
    //     $('#image1').remove();
    //     $('div').append('<h2 id="catName">Mini</h2>');
    //     $('div').append('<h2 id="headingId">Number of clicks:' + counter1 + '</h2>');
    //     $('div').append('<img id="image1" src="https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426">');
    // });

    // items[1].click(function(){
    //     counter2 = counter2 + 1;
    //     $('#headingId').remove();
    //     $('#catName').remove();
    //     $('#image1').remove();
    //     $('div').append('<h2 id="catName">Bini</h2>');
    //     $('div').append('<h2 id="headingId">Number of clicks:' + counter2 + '</h2>');
    //     $('div').append('<img id="image1" src="https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426">');

    // });

    // items[2].click(function(){
    //     counter3 = counter3 + 1;
    //     $('#headingId').remove();
    //     $('#catName').remove();
    //     $('#image1').remove();
    //     $('div').append('<h2 id="catName">Sini</h2>');
    //     $('div').append('<h2 id="headingId">Number of clicks:' + counter3 + '</h2>');
    //     $('div').append('<img id="image1" src="https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426">');

    // });

    // items[3].click(function(){
    //     counter4 = counter4 + 1;
    //     $('#headingId').remove();
    //     $('#catName').remove();
    //     $('#image1').remove();
    //     $('div').append('<h2 id="catName">Gini</h2>');
    //     $('div').append('<h2 id="headingId">Number of clicks:' + counter4 + '</h2>');
    //     $('div').append('<img id="image1" src="https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426">');

    // });

    // items[4].click(function(){
    //     counter5 = counter5 + 1;
    //     $('#headingId').remove();
    //     $('#catName').remove();
    //     $('#image1').remove();
    //     $('div').append('<h2 id="catName">Yini</h2>');
    //     $('div').append('<h2 id="headingId">Number of clicks:' + counter5 + '</h2>');
    //     $('div').append('<img id="image1" src="https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426">');

    // });


});
