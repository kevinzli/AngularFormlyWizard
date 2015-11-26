(function(){
	'use strict';

	String.prototype.escapeSpecialChars = function() {
    	return this.replace(/\\/g, "\\\\")
    			   .replace(/\"/g, "\\\"");
	};

	angular.module('formlyApp', ['formly', 'formlyBootstrap', 'mgo-angular-wizard','backand'], 
		function config(formlyConfigProvider, BackandProvider){
			formlyConfigProvider.setType({
		      name: 'input',
		      templateUrl: 'input-template.html',
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      overwriteOk: true
		    });
		    
		    BackandProvider.setAppName('dynamicformdemo');
      		BackandProvider.setSignUpToken('f11d9bc3-0233-44d6-905b-b580379549d3');
      		BackandProvider.setAnonymousToken('cbbe5b31-fd4d-4648-bd98-e0425d3380fe');
	});
})();
