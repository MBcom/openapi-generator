/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.AdditionalPropertiesClass = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AdditionalPropertiesClass model module.
   * @module model/AdditionalPropertiesClass
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AdditionalPropertiesClass</code>.
   * @alias module:model/AdditionalPropertiesClass
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AdditionalPropertiesClass</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdditionalPropertiesClass} obj Optional instance to populate.
   * @return {module:model/AdditionalPropertiesClass} The populated <code>AdditionalPropertiesClass</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('map_string')) {
        obj['map_string'] = ApiClient.convertToType(data['map_string'], {'String': 'String'});
      }
      if (data.hasOwnProperty('map_number')) {
        obj['map_number'] = ApiClient.convertToType(data['map_number'], {'String': 'Number'});
      }
      if (data.hasOwnProperty('map_integer')) {
        obj['map_integer'] = ApiClient.convertToType(data['map_integer'], {'String': 'Number'});
      }
      if (data.hasOwnProperty('map_boolean')) {
        obj['map_boolean'] = ApiClient.convertToType(data['map_boolean'], {'String': 'Boolean'});
      }
      if (data.hasOwnProperty('map_array_integer')) {
        obj['map_array_integer'] = ApiClient.convertToType(data['map_array_integer'], {'String': ['Number']});
      }
      if (data.hasOwnProperty('map_array_anytype')) {
        obj['map_array_anytype'] = ApiClient.convertToType(data['map_array_anytype'], {'String': [Object]});
      }
      if (data.hasOwnProperty('map_map_string')) {
        obj['map_map_string'] = ApiClient.convertToType(data['map_map_string'], {'String': {'String': 'String'}});
      }
      if (data.hasOwnProperty('map_map_anytype')) {
        obj['map_map_anytype'] = ApiClient.convertToType(data['map_map_anytype'], {'String': {'String': Object}});
      }
      if (data.hasOwnProperty('anytype_1')) {
        obj['anytype_1'] = ApiClient.convertToType(data['anytype_1'], Object);
      }
      if (data.hasOwnProperty('anytype_2')) {
        obj['anytype_2'] = ApiClient.convertToType(data['anytype_2'], Object);
      }
      if (data.hasOwnProperty('anytype_3')) {
        obj['anytype_3'] = ApiClient.convertToType(data['anytype_3'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} map_string
   */
  exports.prototype['map_string'] = undefined;
  /**
   * @member {Object.<String, Number>} map_number
   */
  exports.prototype['map_number'] = undefined;
  /**
   * @member {Object.<String, Number>} map_integer
   */
  exports.prototype['map_integer'] = undefined;
  /**
   * @member {Object.<String, Boolean>} map_boolean
   */
  exports.prototype['map_boolean'] = undefined;
  /**
   * @member {Object.<String, Array.<Number>>} map_array_integer
   */
  exports.prototype['map_array_integer'] = undefined;
  /**
   * @member {Object.<String, Array.<Object>>} map_array_anytype
   */
  exports.prototype['map_array_anytype'] = undefined;
  /**
   * @member {Object.<String, Object.<String, String>>} map_map_string
   */
  exports.prototype['map_map_string'] = undefined;
  /**
   * @member {Object.<String, Object.<String, Object>>} map_map_anytype
   */
  exports.prototype['map_map_anytype'] = undefined;
  /**
   * @member {Object} anytype_1
   */
  exports.prototype['anytype_1'] = undefined;
  /**
   * @member {Object} anytype_2
   */
  exports.prototype['anytype_2'] = undefined;
  /**
   * @member {Object} anytype_3
   */
  exports.prototype['anytype_3'] = undefined;



  return exports;
}));


