// Module ID: 7310
// Function ID: 58970
// Name: weakMap
// Dependencies: [7242, 7263, 7292]

// Module 7310 (weakMap)
import setupIntegration from "setupIntegration";

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(function _functionToStringIntegration() {
  return {
    name: "FunctionToString",
    setupOnce() {
      const outer1_2 = Function.prototype.toString;
      Function.prototype.toString = function() {
        const originalFunction = outer2_0(outer2_1[0]).getOriginalFunction(this);
        const obj = outer2_0(outer2_1[0]);
        let self = this;
        if (outer2_3.has(obj2.getClient())) {
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
        return outer2_2.apply(self, array);
      };
    },
    setup(arg0) {
      const result = outer1_3.set(arg0, true);
    }
  };
});
