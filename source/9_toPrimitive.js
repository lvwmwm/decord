// Module ID: 9
// Function ID: 146
// Name: toPrimitive
// Dependencies: [10]

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
        obj3 = require(10) /* _typeof */;
      } else {
        return "string" === str ? String : Number(defaultResult1);
      }
    }
  }
  return defaultResult1;
};
