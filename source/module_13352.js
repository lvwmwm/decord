// Module ID: 13352
// Function ID: 102315
// Dependencies: [13353, 13364, 13366, 13369, 13372, 13373]

// Module 13352
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  let str = arg1;
  if (require(13364) /* all */(arg0)) {
    if (!require(13366)(arg0)) {
      const tmp6 = require(13369)(arg0, closure_3);
      if (tmp6) {
        if (undefined === str) {
          str = "default";
        }
        const tmp11 = require(13372) /* call */(tmp6, arg0, str);
        if (require(13364) /* all */(tmp11)) {
          if (!require(13366)(tmp11)) {
            const prototype = TypeError.prototype;
            const tmp17 = new TypeError("Can't convert object to primitive value");
            throw tmp17;
          }
        }
        return tmp11;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return require(13373)(arg0, str2);
      }
    }
  }
  return arg0;
};
