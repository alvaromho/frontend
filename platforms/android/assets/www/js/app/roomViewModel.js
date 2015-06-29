'use  strict';

var RoomViewModel = function(parent){

  var self = this;



  self.selected_room_id = ko.observable();
  self.roomList = ko.observableArray();



  self.getAll = function(){
    var url = 'http://backendfinal.herokuapp.com/api/room';

    $.ajax({

        url:  url,
        type:   'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            console.log(data);
            self.roomList(data);
        },
        error: function(xhr, type){
            console.error(xhr);
            console.error(type);
        }
    });

  };

  self.save = function(){
    alert('hello');
  };



};