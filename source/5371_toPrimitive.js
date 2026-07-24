// Module ID: 5371
// Function ID: 46033
// Name: toPrimitive
// Dependencies: [5372]

// Module 5371 (toPrimitive)

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
        obj3 = require(5372) /* _typeof */;
      } else {
        return "string" === str ? String : Number(defaultResult1);
      }
    }
  }
  return defaultResult1;
};
