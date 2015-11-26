// scripts/MainController.js

(function() {

    'use strict';

    angular
        .module('formlyApp')
        .controller('MainController', MainController);

    function MainController(formservice) {

        var vm = this;

        vm.finishWizard = finishWizard;
        vm.viewmode=false;

        //get the dynamic form from javascript objects
        var dynamicForm= formservice.getFormFromJavascriptObjects('requestinspection');

        //get form from JSON string
        /*var dynamicForm= formservice.getFormFromJSON('requestinspection');
        vm.viewmode=true;*/

        // The model object that we reference
	    // on the  element in index.html
	    vm.model = dynamicForm.model;
	    console.log(JSON.stringify(vm.model).escapeSpecialChars());

	    //option to make the form readonly
	    vm.options = {
	      formState: {
	        readOnly: false,
	        disabled: vm.viewmode
	      }
	    };

	    // An array of our form fields with configuration
	    // and options set. We make reference to this in
	    // the 'fields' attribute on the  element
	    //vm.fields = dynamicForm.fields;
	    vm.fields=[];
	    console.log(JSON.stringify(vm.fields).escapeSpecialChars());
		    
		vm.originalFields = angular.copy(vm.fields);

		//get the dynamic form from the formservice
       formservice.getFormFromServer('requestinspection').success(function(response){
       		vm.fields= JSON.parse(response.templateJson);
       		vm.originalFields = angular.copy(vm.fields);
       		vm.viewmode=true;
       		vm.options.formState.disabled=vm.viewmode;
       });

       formservice.getModelFromServer('requestinspection').success(function(response){
       		vm.model= JSON.parse(response.fromJson);
       });

		// function definition
	    function finishWizard() {
	    	var stringifiedmodel= JSON.stringify(vm.model);
	    	var escapedStringifiedModel= stringifiedmodel.escapeSpecialChars();
	    	//console.log(stringifiedmodel);
	    	console.log(escapedStringifiedModel);
	      alert(JSON.stringify(vm.model), null, 2);
	    }
	}

})();
