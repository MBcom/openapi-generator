/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiPetstore);
  }
}(this, function(expect, OpenApiPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiPetstore.InlineObject2();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineObject2', function() {
    it('should create an instance of InlineObject2', function() {
      // uncomment below and update the code to test InlineObject2
      //var instane = new OpenApiPetstore.InlineObject2();
      //expect(instance).to.be.a(OpenApiPetstore.InlineObject2);
    });

    it('should have the property enumFormStringArray (base name: "enum_form_string_array")', function() {
      // uncomment below and update the code to test the property enumFormStringArray
      //var instane = new OpenApiPetstore.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property enumFormString (base name: "enum_form_string")', function() {
      // uncomment below and update the code to test the property enumFormString
      //var instane = new OpenApiPetstore.InlineObject2();
      //expect(instance).to.be();
    });

  });

}));
