// Module ID: 4402
// Function ID: 38861
// Name: isArguments
// Dependencies: [4403]

// Module 4402 (isArguments)
if (Object.keys) {
  module.exports = undefined;
} else {
  const _Object = Object;
  let obj = hasOwnProperty;
  const _Object2 = Object;
  let closure_2 = require("isArguments");
  const _Object3 = Object;
  obj = { toString: null };
  let closure_3 = !propertyIsEnumerable.call(obj, "toString");
  let closure_4 = propertyIsEnumerable.call(() => {

  }, "prototype");
  let closure_5 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  function equalsConstructorPrototype(arg0) {
    const constructor = arg0.constructor;
    let tmp = constructor;
    if (constructor) {
      tmp = constructor.prototype === arg0;
    }
    return tmp;
  }
  obj = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true };
  let _window = window;
  let str3 = "undefined";
  let str4 = typeof window;
  let flag = false;
  if ("undefined" !== str4) {
    const _window6 = window;
    str3 = "object";
    str4 = "$";
    flag = false;
    let keys = Object.keys();
    flag = false;
    if (keys[tmp] !== undefined) {
      if (!obj[str4 + tmp6]) {
        const _window2 = window;
        if (obj.call(window, tmp16)) {
          const _window3 = window;
          if (null !== window[tmp16]) {
            const _window4 = window;
            if (str3 === typeof window[tmp16]) {
              const _window5 = window;
              tmp5(window[tmp16]);
            }
          }
        }
      }
    }
  }
  keys = function keys(obj) {
    let length;
    let length2;
    let tmp = null !== obj;
    if (tmp) {
      tmp = "object" === typeof obj;
    }
    const tmp2 = "[object Function]" === toString.call(obj);
    const tmp3 = callback(obj);
    let tmp4 = tmp;
    if (tmp) {
      tmp4 = "[object String]" === toString.call(obj);
    }
    const items = [];
    if (!tmp) {
      if (!tmp2) {
        if (!tmp3) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Object.keys called on a non-object");
          throw typeError;
        }
      }
    }
    let tmp11 = closure_4;
    if (closure_4) {
      tmp11 = tmp2;
    }
    if (tmp4) {
      if (obj.length > 0) {
        if (!hasOwnProperty.call(obj, 0)) {
          let num2 = 0;
          if (0 < obj.length) {
            do {
              let _String = String;
              let arr = items.push(String(num2));
              num2 = num2 + 1;
              length = obj.length;
            } while (num2 < length);
          }
        }
      }
    }
    if (tmp3) {
      if (obj.length > 0) {
        let num4 = 0;
        if (0 < obj.length) {
          do {
            let _String3 = String;
            arr = items.push(String(num4));
            num4 = num4 + 1;
            length2 = obj.length;
          } while (num4 < length2);
        }
      }
      if (closure_3) {
        const _window = window;
        if ("undefined" !== typeof window) {
          if (flag) {
            let tmp26 = equalsConstructorPrototype(tmp21);
          }
          while (true) {
            let tmp28 = closure_5;
            let num5 = 0;
            let str5 = "constructor";
            if (0 >= closure_5.length) {
              break;
            } else {
              do {
                let tmp29 = tmp26;
                if (tmp26) {
                  let tmp30 = closure_5;
                  tmp29 = "constructor" === closure_5[num5];
                }
                if (!tmp29) {
                  let tmp31 = hasOwnProperty;
                  let tmp32 = closure_5;
                  tmp29 = !hasOwnProperty.call(obj, closure_5[num5]);
                }
                if (!tmp29) {
                  let tmp33 = closure_5;
                  let arr1 = items.push(closure_5[num5]);
                }
                num5 = num5 + 1;
                let tmp35 = closure_5;
              } while (num5 < closure_5.length);
            }
            break;
          }
        }
        tmp26 = equalsConstructorPrototype(obj);
      }
      return items;
    }
    for (const key10048 in arg0) {
      let tmp36 = key10048;
      let tmp15 = tmp11;
      if (tmp11) {
        tmp15 = "prototype" === key10048;
      }
      if (!tmp15) {
        let tmp16 = hasOwnProperty;
        tmp15 = !hasOwnProperty.call(arg0, key10048);
      }
      if (tmp15) {
        continue;
      } else {
        let _String2 = String;
        let arr2 = items.push(String(key10048));
        continue;
      }
      continue;
    }
  };
}
