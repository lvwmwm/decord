// Module ID: 773
// Function ID: 774
// Name: functionToStringIntegration
// Dependencies: [686, 712, 751]

// Module 773 (functionToStringIntegration)
import module_751 from "module_751" /* 751 */;

let has, toString;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const functionToStringIntegration = module_751.defineIntegration(() => {
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
