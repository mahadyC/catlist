$('document').ready(function() {
    var model = {
        currentCat: null,
        hideAdminPanel: true,
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
        
    };

    var catListView = {
        // listview rendering function
        render: function(){
            
            var cat,cats;
            cats = octopus.getCats();
            $('ul').empty();
        
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
        
    };

    var catView = {
       
        render: function(){
              
              var currentCat = octopus.getCurrentCat();
              
            $('#headingId').remove();
            $('#catName').remove();
            $('#image1').remove();

            $('div').append('<h2 id="catName">'+ currentCat.name + '</h2>');
            $('div').append('<h2 id="headingId">Number of clicks:' + currentCat.clickCount + '</h2>');
            $('div').append('<img id="image1" src="' + currentCat.image + '">');

            $('#image1').click(function(){
                    octopus.incrementCounter();
              });
            
        }
    };

    var adminView = {
        
        init: function(){
            $('#admin').click(function(){
                octopus.showAdminPanel();
            });

            $('#cancel').click(function(){
                octopus.hideAdminPanel();
            });
            $('#save').click(function(){
                octopus.editCurrentCat();
                octopus.hideAdminPanel();
                catListView.render();
            });
        }
    };


    var octopus = {
        
        init: function(){
            catListView.render();
            adminView.init();
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
        },
        editCurrentCat: function(){
            model.currentCat.name = $('#catNameInput').val();
            model.currentCat.clickCount = $('#clickCount').val();
            catView.render();
            catListView.render();
        },
        showAdminPanel: function(){
            if(model.hideAdminPanel){
               $('section').show();
               model.hideAdminPanel = false; 
            }
            
        },
        hideAdminPanel: function(){
            if (!model.hideAdminPanel) {
                $('section').hide();
                model.hideAdminPanel = true;
            }
            
        }

    };
    octopus.init();

});
