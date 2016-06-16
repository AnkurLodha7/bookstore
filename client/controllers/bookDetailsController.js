(function () {
    angular.module('myApp')
        .controller('bookDetailsController',bookDetailsControllerFn);
    bookDetailsControllerFn.$inject=['$http','$location','$routeParams','$scope'];
    function bookDetailsControllerFn ($http,$location,$routeParams,$scope)
    {
        var bookDetailsInfo = this;
        console.log('bookDetailsController loaded...');
        
        $http({
            method:'GET',
            url:"/api/books/" + $routeParams.id})


            .success(function (data)
            {
                console.log(data);
                bookDetailsInfo.book=data;
            })
            .error(function (err) {
                console.log(err);
            });


        $scope.remove =function(id)
        {
            console.log(id);
            $http.delete('/api/books/' + $routeParams.id)
                .success(function(response)
            {
                alert("Book Successfully Deleted");
                window.location.href='#/books'
            })
                .error(function (err)
                {
                    alert("The Book Cannot be Deleted")
                } )

        }

    }
})();