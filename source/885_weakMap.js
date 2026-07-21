// Module ID: 885
// Function ID: 9784
// Name: weakMap
// Dependencies: [863, 798, 900]

// Module 885 (weakMap)
import normalizeArray from "normalizeArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const functionToStringIntegration = normalizeArray.defineIntegration(function _functionToStringIntegration() {
  return {
    name: "FunctionToString",
    setupOnce() {
      Function.prototype.toString = function() {
        const originalFunction = callback(closure_1[0]).getOriginalFunction(this);
        const obj = callback(closure_1[0]);
        let self = this;
        if (set.has(obj2.getClient())) {
          self = this;
          if (undefined !== originalFunction) {
            self = originalFunction;
          }
        }
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        return toString.apply(self, array);
      };
    },
    setup(arg0) {
      const result = closure_3.set(arg0, true);
    }
  };
});
