// Module ID: 11282
// Function ID: 11283
// Dependencies: [11214, 11235, 11264]

// Module 11282
import module_11264 from "module_11264" /* 11264 */;

let has, toString;

const weakMap = new WeakMap();

export const functionToStringIntegration = module_11264.defineIntegration(() => {
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
