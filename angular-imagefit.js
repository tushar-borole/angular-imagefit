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
            $(element).css({
                "display": 'none'
            });
            imagefitOption = {};
            var imagefitOption = scope.$eval(attrs.imagefitOption);

            if (attrs.imagefitErrorSrc) {
                imagefitOption.onError = function (containr, image) {
                    image.attr('src', attrs.imagefitErrorSrc);
                };
            }

            function imageFit() {
                $timeout(function () {
                    $(element).imageScale(imagefitOption);
                }, 0)

            }

            attrs.$observe('ngSrc', function () {
                imageFit();
            });
            imageFit();
            $(element).on('load', function () {
                $(element).css({
                    "display": ''
                });
                $(window).resize(function () {
                    imageFit();

                });
            });





        }
    }

})();