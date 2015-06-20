'use strict';

var ProductViewModel = function(){

  var self = this;

  //Domain data
  
  // self.edif = ko.observable('R1');
  // self.num = ko.observable(101);
  // self.nom = ko.observable('R1 101');
  self.productList = ko.observableArray();
  //Behaviour

   self.showList = function(){

     self.getAll();
   };


  self.getAll = function(){
    var url = 'https://padrinounab.herokuapp.com/api/get';
    
    $.ajax({

        url: 	url,
        type: 	'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            console.log(data);
            self.productList(data);
        },
        error: function(xhr, type){
            console.error(xhr);
            console.error(type);
        }
    });

  };


    var viewModel = {
        numberOfClicks : ko.observable(0),
        incrementClickCounter : function() {
            var previousCount = this.numberOfClicks();
            this.numberOfClicks(previousCount + 1);
        }
    };


  self.save = function(){
    alert('hello');
  };



};
