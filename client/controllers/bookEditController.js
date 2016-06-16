(function ()
{
    angular.module('myApp')
        .controller('bookEditController',bookEditControllerFn);
    bookEditControllerFn.$inject=['$http','$scope','$routeParams','$location'];
    function bookEditControllerFn ($http,$scope,$routeParams,$location)
    {
            var show;
        var bookEdit = this;
        $scope.getbook = function () {

            console.log('bookEditController loaded...');
            $http({
                method: 'GET',
                url: "/api/books/" + $routeParams.id
            })


                .success(function (data) {
                    console.log(data);
                    bookEdit.book = data;
                })
                .error(function (err) {
                    console.log(err);
                });


        };
        $scope.updateBook = function () {
            $http.put('api/books/' + $routeParams.id, $scope.bookEdit.book)
                .success(function (data) {
                    console.log(data);
                    show = true;
                    alert("Changes Updated.")
                    window.location.href = '#/books/details/' + $routeParams.id;

                })
                .error(function (err) {
                    console.log(err);
                    show=false;
                    alert("Failed to Updated Changes.")


                });

        }
    }
        

})();