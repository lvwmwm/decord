// Module ID: 9
// Function ID: 146
// Name: toPrimitive
// Dependencies: []

// Module 9 (toPrimitive)

export default function toPrimitive(defaultResult1) {
  let str = arg1;
  if ("object" == obj.default(defaultResult1)) {
    if (defaultResult1) {
      const _Symbol = Symbol;
      if (undefined !== defaultResult1[Symbol.toPrimitive]) {
        if (!str) {
          str = "default";
        }
        const callResult = obj2.call(defaultResult1, str);
        if ("object" != obj3.default(callResult)) {
          return callResult;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
        const obj3 = require(dependencyMap[0]);
      } else {
        return "string" === str ? String : Number(defaultResult1);
      }
    }
  }
  return defaultResult1;
};
