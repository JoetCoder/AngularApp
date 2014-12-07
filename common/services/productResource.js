/**
 * Created by Alexis on 06/12/2014.
 */
(function(){
    "use strict";

    angular.module("common.services")
        .factory("productResource",["$resource", productResource]);

    function productResource($resource)
    {
        return $resource("/api/products/:productId");
    }

}());