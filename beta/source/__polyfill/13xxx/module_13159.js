// Module ID: 13159
// Function ID: 13160
// Dependencies: [13091, 13112, 13141]

// Module 13159
import setupIntegration from "module_13141" /* 13141 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = closure_1_0(13091).getOriginalFunction(this);
        const obj = closure_1_0(13091);
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
    const result = weakMap.set(arg0, true);
  }
}));
