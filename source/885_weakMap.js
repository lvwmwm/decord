// Module ID: 885
// Function ID: 9788
// Name: weakMap
// Dependencies: []

// Module 885 (weakMap)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
const _module = require(dependencyMap[2]);

export const functionToStringIntegration = _module.defineIntegration(function _functionToStringIntegration() {
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
