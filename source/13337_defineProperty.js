// Module ID: 13337
// Function ID: 102088
// Name: defineProperty
// Dependencies: [13286, 13338, 13335, 13295, 13318]

// Module 13337 (defineProperty)
if (require("getOwnPropertyDescriptor")) {
  if (require("getOwnPropertyDescriptor")) {
    defineProperty = function defineProperty(arg0, arg1, writable) {
      require(13335) /* all */(arg0);
      const tmp2 = require(13295) /* text */(arg1);
      require(13335) /* all */(writable);
      let tmp4 = writable;
      if ("function" === typeof arg0) {
        tmp4 = writable;
        if ("prototype" === tmp2) {
          tmp4 = writable;
          if ("value" in writable) {
            tmp4 = writable;
            if ("writable" in writable) {
              tmp4 = writable;
              if (!writable.writable) {
                const tmp6 = getOwnPropertyDescriptor(arg0, tmp2);
                writable = tmp6;
                if (tmp6) {
                  writable = tmp6.writable;
                }
                tmp4 = writable;
                if (writable) {
                  arg0[tmp2] = writable.value;
                  const obj = { configurable: "configurable" in writable ? writable.configurable : tmp6.configurable, enumerable: "enumerable" in writable ? writable.enumerable : tmp6.enumerable, writable: false };
                }
              }
            }
          }
        }
      }
      return defineProperty(arg0, tmp2, tmp4);
    };
  }
  let defineProperty2 = defineProperty;
} else {
  defineProperty2 = function defineProperty(arg0, arg1, value) {
    require(13335) /* all */(arg0);
    const tmp4 = require(13295) /* text */(arg1);
    require(13335) /* all */(value);
    if (!require(13318)) {
      while (true) {
        let tmp10 = value;
        let str = "get";
        if ("get" in tmp2) {
          break;
        } else {
          let tmp11 = value;
          let str2 = "set";
          if ("set" in tmp2) {
            break;
          } else {
            let tmp12 = value;
            let str3 = "value";
            if ("value" in tmp2) {
              let tmp13 = arg0;
              tmp[tmp4] = value.value;
            }
            return arg0;
          }
        }
        let tmp14 = TypeError;
        let prototype = TypeError.prototype;
        let tmp15 = new.target;
        let str4 = "Accessors not supported";
        let tmp16 = new.target;
        let tmp17 = new TypeError("Accessors not supported");
        let tmp18 = tmp17;
        throw tmp17;
      }
    } else {
      return defineProperty(tmp, tmp4, tmp2);
    }
  };
}

export const f = defineProperty2;
