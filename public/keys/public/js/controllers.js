'use strict';
angular.module('keys', []).controller('LoginController', LoginController);
function LoginController(){
    var vm = this;
    vm.submit = function (){
        if (vm.userName && vm.passWord) {
            dpd.users.login({
                    "username": vm.userName,
                    "password": vm.passWord
                }, function (session, error) {
                    if (error) {
                        alert(error.message);
                        $window.location.href = '';
                    } else {
                        console.log(session);
                        window.location.href = 'equipList.html';
                    }
                });
        }
    }
}