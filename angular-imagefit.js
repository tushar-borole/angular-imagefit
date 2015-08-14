(function () {
    'use strict';

    angular
        .module('imagefit',[])
        .directive('imagefit', imagefit);

    imagefit.$inject = [];

    /* @ngInject */
    function imagefit() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            console.log(attrs)
          
            attrs.$observe('src', function () {
                // body
             
                
                $(element).on('load', function () {
              
                    $(element).parent().imagefit({
                        mode: 'inside',
                        force: 'false',
                        halign: 'center',
                        valign: 'middle'
                    });
                    
                })
            });

        }
    }

})();
