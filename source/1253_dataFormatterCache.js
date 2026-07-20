// Module ID: 1253
// Function ID: 14089
// Name: dataFormatterCache
// Dependencies: []

// Module 1253 (dataFormatterCache)
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
let closure_2 = require(dependencyMap[2]);
let closure_3 = require(dependencyMap[3]);
let tmp2 = () => {
  class FormatterCache {
    constructor() {
      tmp = closure_2(this, FormatterCache);
      map = new Map();
      this.dateTime = map;
      map1 = new Map();
      this.duration = map1;
      map2 = new Map();
      this.list = map2;
      map3 = new Map();
      this.number = map3;
      map4 = new Map();
      this.pluralRules = map4;
      map5 = new Map();
      this.relativeTime = map5;
      return;
    }
  }
  let closure_0 = FormatterCache;
  let obj = {
    key: "getDateTimeFormatter",
    value: function getDateTimeFormatter(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.dateTime, array, (arg0) => callback(Intl.DateTimeFormat, callback2(arg0)));
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getDurationFormatter",
    value: function getDurationFormatter(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.duration, array, (arg0) => callback(Intl.DurationFormat, callback2(arg0)));
    }
  };
  items[1] = obj;
  obj = {
    key: "getListFormatter",
    value: function getListFormatter(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.list, array, (arg0) => callback(Intl.ListFormat, callback2(arg0)));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNumberFormatter",
    value: function getNumberFormatter(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.number, array, (arg0) => callback(Intl.NumberFormat, callback2(arg0)));
    }
  };
  items[4] = {
    key: "getPluralRules",
    value: function getPluralRules() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.pluralRules, array, (arg0) => callback(Intl.PluralRules, callback2(arg0)));
    }
  };
  items[5] = {
    key: "getRelativeTimeFormatter",
    value: function getRelativeTimeFormatter(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.relativeTime, array, (arg0) => callback(Intl.RelativeTimeFormat, callback2(arg0)));
    }
  };
  items[6] = {
    key: "_getCached",
    value: function _getCached(dateTime, array, arg2) {
      const _getKeyResult = this._getKey(array);
      const value = dateTime.get(_getKeyResult);
      if (value) {
        return value;
      } else {
        const tmp4 = arg2(array);
        const result = dateTime.set(_getKeyResult, tmp4);
        return tmp4;
      }
    }
  };
  items[7] = {
    key: "_getKey",
    value: function _getKey(array) {
      const length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return JSON.stringify(array);
    }
  };
  return callback(FormatterCache, items);
}();
tmp2 = new tmp2();

export const dataFormatterCache = tmp2;
