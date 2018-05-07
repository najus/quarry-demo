(function() {
  'use strict';

  angular.module('myApp', ['ngMaterial'])
      .controller('AppController', AppController);

  function AppController($scope, $mdToast) {
    
   var vm = this;
   vm.batchNo = '001';

    $scope.currentNavItem = 'page1';
    $('.collapse').collapse();

    vm.participantsList = [
      {value: 'machine', name: 'Machine'},
      {value: 'men', name: 'Men'}
    ]

    vm.machineList = [
      {machineHour: 1, machineOperator: 'Mimos', machineDiesel: 3}
    ];

    vm.menList = [
      {menHour: 1, menName: 'Suvek'}      
    ]

    vm.saveMachine = function(data) {
      if (data != undefined) {
        console.log(data);        
        vm.machineList.push(data);
      } else {
        console.log("data not received!");
      }
    }

    vm.saveMen = function(data) {
      if (data != undefined) {
        console.log(data); 
        vm.menList.push(data);
      } else {
        console.log("data not received!");
      }
    }

    vm.saveParticipants = function(data) {
      if(data != undefined) {
        var name = data.name;
        var dataToArray = {
          value: name.toLowerCase(),
          name: name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() 
          };
        vm.participantsList.push(dataToArray);
        vm.Participants.name = '';
      } else {
        console.log("data not received!");        
      }
    }

    function pushParticipants(data) {
      vm.participants.push(data);      
    }
  }
})();