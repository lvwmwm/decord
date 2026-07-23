// Module ID: 13357
// Function ID: 102623
// Name: serialize
// Dependencies: [65]
// Exports: default

// Module 13357 (serialize)
import _toConsumableArray from "_toConsumableArray";

if ("undefined" !== typeof BigInt) {
  const _BigInt = BigInt;
  BigInt.prototype.toJSON = function() {
    return this.toString();
  };
}

export default function serialize(arg0) {
  let closure_0 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  let closure_1 = [];
  let closure_2 = [];
  return JSON.stringify(arg0, (function serializer(arg0) {
    let c0 = null;
    return function(arg0, nativeEvent) {
      const self = this;
      if (true === nativeEvent) {
        return true;
      } else if (nativeEvent === Infinity) {
        return "~~~ Infinity ~~~";
      } else if (nativeEvent === -Infinity) {
        return "~~~ -Infinity ~~~";
      } else if (0 === nativeEvent) {
        return "~~~ zero ~~~";
      } else if (undefined === nativeEvent) {
        return "~~~ undefined ~~~";
      } else if (null === nativeEvent) {
        return "~~~ null ~~~";
      } else if (false === nativeEvent) {
        return "~~~ false ~~~";
      } else if (-0 === nativeEvent) {
        return "~~~ zero ~~~";
      } else if ("" === nativeEvent) {
        return "~~~ empty string ~~~";
      } else {
        if (_null) {
          if ("object" === typeof nativeEvent) {
            if (nativeEvent.nativeEvent) {
              return nativeEvent.nativeEvent;
            }
          }
        }
        if ("string" !== typeof nativeEvent) {
          if ("number" !== tmp) {
            if ("bigint" === tmp) {
              return nativeEvent.toString();
            } else if ("function" === tmp) {
              const name = nativeEvent.name;
              let str5 = "~~~ anonymous function ~~~";
              if (null != name) {
                str5 = "~~~ anonymous function ~~~";
                if ("" !== name) {
                  const _HermesInternal = HermesInternal;
                  str5 = "~~~ " + name + "() ~~~";
                }
              }
              return str5;
            } else {
              const _Symbol = Symbol;
              if (nativeEvent[Symbol.iterator]) {
                const _Array = Array;
                if (!Array.isArray(nativeEvent)) {
                  return _null(nativeEvent);
                }
              }
              if (outer1_1.length > 0) {
                const index = outer1_1.indexOf(self);
                let arr = outer1_1;
                if (~index) {
                  arr.splice(index + 1);
                } else {
                  arr = arr.push(self);
                }
                let arr1 = outer1_2;
                if (~index) {
                  arr1.splice(index, Infinity, arg0);
                } else {
                  arr = arr1.push(arg0);
                }
                let str3 = nativeEvent;
                if (~outer1_1.indexOf(nativeEvent)) {
                  str3 = "~~~ Circular Reference ~~~";
                }
              } else {
                arr1 = outer1_1.push(nativeEvent);
                str3 = nativeEvent;
              }
              let callResult = str3;
              if (null !== _null) {
                callResult = _null.call(self, arg0, str3);
              }
              return callResult;
            }
          }
        }
        return nativeEvent;
      }
    };
  })(null));
};
