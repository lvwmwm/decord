// Module ID: 4387
// Function ID: 38793
// Name: ToPrimitive
// Dependencies: []

// Module 4387 (ToPrimitive)
let tmp = "function" === typeof Symbol;
if (tmp) {
  const _Symbol = Symbol;
  tmp = "symbol" === typeof Symbol.iterator;
}

export default function ToPrimitive(arg0) {
  let callResult;
  if (require(dependencyMap[1])(arg0)) {
    return arg0;
  } else {
    let str2 = "default";
    if (arguments.length > 1) {
      const _String = String;
      let str3 = "string";
      if (arguments[1] !== String) {
        const _Number = Number;
        let str4 = "default";
        if (arguments[1] === Number) {
          str4 = "number";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    if (!tmp) {
      {
        let tmp22 = "default" === str2;
        if (tmp22) {
          let tmp19 = require(dependencyMap[3])(arg0);
          if (!tmp19) {
            tmp19 = require(dependencyMap[2])(arg0);
          }
          tmp22 = tmp19;
        }
        let str8 = str2;
        if (tmp22) {
          str8 = "string";
        }
        let str10 = "number";
        if ("default" !== str8) {
          str10 = str8;
        }
        if (null == arg0) {
          const _TypeError4 = TypeError;
          const typeError = new TypeError("Cannot call method on " + arg0);
          throw typeError;
        } else {
          if ("number" !== str10) {
            if ("string" !== str10) {
              const _TypeError3 = TypeError;
              const typeError1 = new TypeError("hint must be \"string\" or \"number\"");
              throw typeError1;
            }
          }
          const items = [];
          let num6 = 0;
          if (0 < items.length) {
            while (true) {
              let obj = arg0[items[num6]];
              let tmp24 = require;
              let tmp25 = dependencyMap;
              if (require(dependencyMap[0])(obj)) {
                callResult = obj.call(arg0);
                let tmp27 = require;
                let tmp28 = dependencyMap;
                let tmp29 = callResult;
                if (require(dependencyMap[1])(callResult)) {
                  break;
                }
              }
              num6 = num6 + 1;
            }
            return callResult;
          }
          const _TypeError2 = TypeError;
          const typeError2 = new TypeError("No default value");
          throw typeError2;
        }
      }
    } else {
      const _Symbol = Symbol;
      if (Symbol.toPrimitive) {
        const _Symbol3 = Symbol;
        let tmp8;
        if (null != arg0[toPrimitive]) {
          tmp8 = tmp6;
          if (!require(dependencyMap[0])(tmp6)) {
            const _TypeError = TypeError;
            const _String2 = String;
            const text = `${tmp6} returned for property `;
            const typeError3 = new TypeError(`${tmp6} returned for property ` + String(toPrimitive) + " of object " + arg0 + " is not a function");
            throw typeError3;
          }
        }
        let valueOf = tmp8;
      } else if (require(dependencyMap[2])(arg0)) {
        const _Symbol2 = Symbol;
        valueOf = Symbol.prototype.valueOf;
      }
    }
  }
};
