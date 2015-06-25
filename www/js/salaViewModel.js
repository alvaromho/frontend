'use strict';

var SalaViewModel = function(){

  var self = this;

  //Domain data
  self.name = ko.observable('');
  self.price = ko.observable();
  self.salaList = ko.observableArray();

  //Behaviour
  self.isEditMode = ko.observable(false);
  self.isCreateMode = ko.observable(false);
  self.isPopMode= ko.observable(true);

  self.isCreateAndEditVisible = ko.computed(function(){
    return self.isEditMode() || self.isCreateMode();
  }, self);

  self.isListVisible = ko.computed(function(){
    return !self.isEditMode() && !self.isCreateMode();
  }, self);

  self.isDeleteVisible = ko.computed(function(){
    return self.isEditMode();
  }, self);

  self.isPopVisible = ko.computed(function(){
    return self.isPopMode();
  }, self);


  self.showList = function(){
    self.isCreateMode(false);
    self.isEditMode(false);
    self.getAll();
  };



  self.showCreate = function(){
    self.isCreateMode(true);
    self.isEditMode(false);
  };

  self.showEdit = function(){ // Cambiar a show imagen
    self.isCreateMode(false);
    self.isEditMode(true);
    //self.isPopVisible(true);
  };

  self.showPopup = function(){ // Cambiar a show imagen
    self.isCreateMode(false);
    self.isEditMode(false);
    console.log(" Deberia estar mostrando el pop up");
    self.isPopMode(true);
  };

  self.getAll = function(){
    var url = 'http://backendfinal.herokuapp.com/api/room';

    $.ajax({

        url:  url,
        type:   'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            console.log(data);
            self.salaList(data);
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