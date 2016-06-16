(function () {
    angular.module('myApp')
    .controller('booksController',booksControllerFn);
    booksControllerFn.$inject=['$http','$scope'];
    function booksControllerFn ($http,$scope)
    {
        $scope.search = function (item)
        {
            if($scope.searchBook == undefined){
                    return true;
            }
            else {
                if(item.title.toLowerCase().indexOf($scope.searchBook.toLowerCase()) !=-1 ||
                        item.author.toLowerCase().indexOf($scope.searchBook.toLowerCase()) !=-1 ||
                            item.genre.toLowerCase().indexOf($scope.searchBook.toLowerCase()) !=-1 )
                {
                    return true;
                }
            }
            return false;
        };

            var booksInfo = this;
            console.log('booksController loaded...');
            $http({
                method:'GET',
                url:"/api/books"
            })
                .success(function (data)
                {
                    console.log(data);
                    booksInfo.books=data;
                })  
        
        
    }
})();
