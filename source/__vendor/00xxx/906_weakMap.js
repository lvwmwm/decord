// Module ID: 906
// Function ID: 907
// Name: weakMap
// Dependencies: [819, 845, 884]

// Module 906 (weakMap)
import setupIntegration from "setupIntegration" /* 884 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = callback(819).getOriginalFunction(this);
        const obj = callback(819);
        let self = this;
        if (set.has(obj2.getClient())) {
          self = this;
          if (undefined !== originalFunction) {
            self = originalFunction;
          }
        }
        return toString.apply(self, items);
      };
    } catch (err) {
    }
  },
  setup(arg0) {
    const result = closure_3.set(arg0, true);
  }
}));
