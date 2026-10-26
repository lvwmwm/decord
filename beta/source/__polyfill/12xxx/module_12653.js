// Module ID: 12653
// Function ID: 12654
// Dependencies: [12585, 12606, 12635]

// Module 12653
import module_12635 from "module_12635" /* 12635 */;

let has, toString;

const weakMap = new WeakMap();

export const functionToStringIntegration = module_12635.defineIntegration(() => {
  let obj = {
    name: "FunctionToString",
    setupOnce() {
      toString = Function.prototype.toString;
      try {
        const _Function = Function;
        Function.prototype.toString = function() {
          const items = [...arguments];
          const obj = closure_1_0(closure_1_1[0]);
          const originalFunction = obj.getOriginalFunction(this);
          has = has.has;
          let self = this;
          const obj2 = closure_1_0(closure_1_1[1]);
          if (has(obj2.getClient())) {
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
  };
  return obj;
});
