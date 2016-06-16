(function () {
    angular.module('myApp')
        .controller('addBooksController',addBooksControllerFn);
    addBooksControllerFn.$inject=['$http','$scope','$location'];
    function addBooksControllerFn ($http,$scope)
    {



        $scope.addBook = function ()
        {

            console.log('addBooksController loaded...');
            console.log($scope.book);
            $http.post('api/books', $scope.book)
                .success(function (data) {
                    console.log(data);
                    window.alert("Book added successfully");
                    window.location.href="#/books"


                });

        };



    }


})();
