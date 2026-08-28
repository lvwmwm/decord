// Module ID: 12342
// Function ID: 12343
// Name: weakMap
// Dependencies: [12274, 12295, 12324]

// Module 12342 (weakMap)
import setupIntegration from "setupIntegration" /* 12324 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = callback(12274).getOriginalFunction(this);
        const obj = callback(12274);
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
