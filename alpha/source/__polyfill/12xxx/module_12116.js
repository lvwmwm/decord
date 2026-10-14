// Module ID: 12116
// Function ID: 12117
// Dependencies: [12048, 12069, 12098]

// Module 12116
import module_12098 from "module_12098" /* 12098 */;

let has, toString;

const weakMap = new WeakMap();

export const functionToStringIntegration = module_12098.defineIntegration(() => {
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
