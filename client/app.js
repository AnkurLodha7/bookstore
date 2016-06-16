(function ()
{
    angular.module('myApp',['ngRoute'])
        .config(['$routeProvider',function($routeProvider)
        {

            $routeProvider.when('/books',{
                controller:'booksController',
                templateUrl:'views/books.html',
                   controllerAs:'booksInfo'
            })
                .when('/books/details/:id',{
                    controller:'bookDetailsController',
                    templateUrl:'views/books_details.html',
                    controllerAs:'bookDetailsInfo'
                })
                .when('/books/add',{
                    controller:'addBooksController',
                    templateUrl:'views/add_book.html'
                })
                .when('/books/edit/:id',{
                    controller:'bookEditController',
                    templateUrl:'views/edit_book.html',
                    controllerAs:'bookEdit'
                })
                .otherwise({
                    redirectTo:'/books'
                })



        }]);
})();