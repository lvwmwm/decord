// Module ID: 1253
// Function ID: 14094
// Name: dataFormatterCache
// Dependencies: [164, 65, 6, 7]

// Module 1253 (dataFormatterCache)
import _construct from "_construct";
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let tmp2 = (() => {
  class FormatterCache {
    constructor() {
      tmp = outer1_2(this, FormatterCache);
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
  let obj = {
    key: "getDateTimeFormatter",
    value: function getDateTimeFormatter(closure_0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.dateTime, array, (arg0) => FormatterCache(Intl.DateTimeFormat, outer2_1(arg0)));
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getDurationFormatter",
    value: function getDurationFormatter(closure_0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.duration, array, (arg0) => FormatterCache(Intl.DurationFormat, outer2_1(arg0)));
    }
  };
  items[1] = obj;
  obj = {
    key: "getListFormatter",
    value: function getListFormatter(closure_0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.list, array, (arg0) => FormatterCache(Intl.ListFormat, outer2_1(arg0)));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNumberFormatter",
    value: function getNumberFormatter(closure_0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.number, array, (arg0) => FormatterCache(Intl.NumberFormat, outer2_1(arg0)));
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
      return self._getCached(self.pluralRules, array, (arg0) => FormatterCache(Intl.PluralRules, outer2_1(arg0)));
    }
  };
  items[5] = {
    key: "getRelativeTimeFormatter",
    value: function getRelativeTimeFormatter(closure_0, arg1) {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self._getCached(self.relativeTime, array, (arg0) => FormatterCache(Intl.RelativeTimeFormat, outer2_1(arg0)));
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
  return _defineProperties(FormatterCache, items);
})();
tmp2 = new tmp2();

export const dataFormatterCache = tmp2;
