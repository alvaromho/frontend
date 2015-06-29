var AppViewModel = function(){

    var self = this;
    
    //the devicePlatform sets the strategy for TokenStore 
    //self.tokenStore = new TokenStore();
    
    self.roomVM = ko.observable(new RoomViewModel(self));
    //self.bathroomVM = ko.observable(new BathroomViewModel(self));
    //self.printerVM = ko.observable(new PrinterViewModel(self));
    //self commentVM = ko.observable(new CommentViewModel(self));
    

    //self.isLoginVisible = ko.observable(true);
    //self.isProductsSectionVisible = ko.observable();
    self.isMenuVisible = ko.observable(true);
    self.isListVisible = ko.observable(false);
    //self.isMapVisible = ko.observable(false);


    
    // self.showRoomListSection = function(){
    //     self.hideAll();
    //     self.productsVM().getProducts();
    //     self.isProductsSectionVisible(true);
    // };
    
    // self.showLogin = function(){
    //     self.hideAll();
    //     self.isLoginVisible(true);
    // };
    self.showRoomList = function()
    {
        console.log('Show room list');
        self.hideAll();
        self.roomVM().getAll();
        self.isListMode(true);
    };

    self.showMenu = function()
    {
        self.hideAll();
        self.isMenuMode(true);
    };

    
    self.hideAll = function(){    
        //self.isLoginVisible(false);
        //self.isProductsSectionVisible(false);  
        self.isMapMode(false);
        self.isListMode(false);
        //self.isMapVisible(false); 
    };
    
};