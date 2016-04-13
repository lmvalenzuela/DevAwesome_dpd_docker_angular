/**
 * Created by luis on 12/04/16.
 */
'use strict';
angular.module('keys', ['datatables','ngResource']).controller('WithAjaxCtrl', WithAjaxCtrl);

function WithAjaxCtrl($resource) {
    var vm = this;
    vm.prueba = "Equipment's List";
    $resource('/equipments').query().$promise.then(function(equipments){
        vm.equipments=equipments;
    }, function(err){
        alert(err);
    });
    
}