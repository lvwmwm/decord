// Module ID: 5702
// Function ID: 5703
// Name: toPrimitive
// Dependencies: [5703]

// Module 5702 (toPrimitive)

export default function toPrimitive(arg0, arg1) {
  if ("object" == obj.default(arg0)) {
    if (arg0) {
      let str = arg1;
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const call = tmp4.call;
        if (!str) {
          str = "default";
        }
        const tmp5 = typeof call === "unknown" ? tmp4(str) : call(arg0, str);
        if ("object" != tmpResult.default(tmp5)) {
          return tmp5;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
        tmpResult = require(5703) /* _typeof */;
      } else {
        return "string" === str ? String : Number(arg0);
      }
    }
  }
  return arg0;
};
