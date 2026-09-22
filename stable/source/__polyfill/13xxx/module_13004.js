// Module ID: 13004
// Function ID: 13005
// Dependencies: [12936, 12957, 12986]

// Module 13004
import setupIntegration from "module_12986" /* 12986 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = closure_1_0(12936).getOriginalFunction(this);
        const obj = closure_1_0(12936);
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
