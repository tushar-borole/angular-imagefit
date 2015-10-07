(function () {
    'use strict';

    angular
        .module('imagefit')
        .directive('imagefit', imagefit);

    imagefit.$inject = ['$timeout'];

    /* @ngInject */
    function imagefit($timeout) {
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
            var imagefitOption = scope.$eval(attrs.imagefitOption);
            attrs.$observe('src', function () {
                // body

                function imageFit() {
                    $timeout(function () {

                        $(element).removeClass("ng-hide");
                        $(element).parent().imagefit(imagefitOption);
                    }, 0)

                }



                $(element).addClass("ng-hide");
                $(element).on('load', function () {
                    imageFit()
                    $(window).resize(function () {
                        imageFit()

                    })
                })
                
                $(element).on('error', function () {
                                       element[0].src = attr.fallbackImage 
                })




            });

        }
    }

})();
