// Module ID: 13503
// Function ID: 13504
// Name: defineProperty
// Dependencies: [13452, 13504, 13501, 13461, 13484]

// Module 13503 (defineProperty)
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (require("getOwnPropertyDescriptor")) {
  if (require("getOwnPropertyDescriptor")) {
    defineProperty = function defineProperty(fn, arg1, value) {
      require(13501) /* all */(fn);
      const tmp2 = require(13461) /* text */(arg1);
      require(13501) /* all */(value);
      let tmp4 = value;
      if (typeof fn === "function") {
        tmp4 = value;
        if ("prototype" === tmp2) {
          tmp4 = value;
          if ("value" in value) {
            tmp4 = value;
            if (writable in value) {
              tmp4 = value;
              if (!value[tmp5]) {
                const tmp7 = getOwnPropertyDescriptor(fn, tmp2);
                let tmp8 = tmp7;
                if (tmp7) {
                  tmp8 = tmp7[tmp5];
                }
                tmp4 = value;
                if (tmp8) {
                  fn[tmp2] = value.value;
                  const obj = { configurable: null, enumerable: null, writable: false };
                  obj[0] = configurable in value ? value[configurable] : tmp7[configurable];
                  obj[1] = enumerable in value ? value[enumerable] : tmp7[enumerable];
                }
              }
            }
          }
        }
      }
      return defineProperty(fn, tmp2, tmp4);
    };
  }
  let defineProperty2 = defineProperty;
} else {
  defineProperty2 = function defineProperty(arg0, arg1, value) {
    require(13501) /* all */(arg0);
    const tmp2 = require(13461) /* text */(arg1);
    require(13501) /* all */(value);
    if (!require(13484)) {
      if (!("get" in value)) {
        if (!("set" in value)) {
          if ("value" in value) {
            arg0[tmp2] = value.value;
          }
          return arg0;
        }
      }
      const tmp8 = new TypeError("Accessors not supported");
      throw tmp8;
    } else {
      try {
        return defineProperty(arg0, tmp2, value);
      } catch (err) {
      }
    }
  };
}

export const f = defineProperty2;
