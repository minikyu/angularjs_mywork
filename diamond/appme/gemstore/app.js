(function() {
    var app = angular.module('store', []);
    app.controller('StoreController',function($scope){
        $scope.product=gem;

    });
    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description:'...',
        canPurchase:false
    }
})();
