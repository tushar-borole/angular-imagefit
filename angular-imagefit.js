(function () {
    'use strict';

    angular
        .module('angular-imagefit', [])
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


            function imageFit() {
                $timeout(function () {


                    //var elementData=$(element).parent().imagefit(imagefitOption);

                    $(element).imageScale()
                }, 0)

            }

            attrs.$observe('ngSrc', function () {
                imageFit()
            })
            imageFit()
            $(element).on('load', function () {
                $timeout(function () {

                })
                $(window).resize(function () {
                    imageFit()

                })
            })





        }
    }

})();