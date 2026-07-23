// Module ID: 12825
// Function ID: 99658
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6736, 477, 22, 12826, 12827, 12828, 1327, 2]
// Exports: areKeyCombosEqual, getRawCodeFromKey, isKeyboardActivatedMouseEvent, toBrowserEvents, toCombo, toString

// Module 12825 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import items from "items";
import set from "set";
import importDefaultResult from "apply";
import importDefaultResult1 from "apply";
import importDefaultResult2 from "apply";
import set from "set";
import set from "set";

let LinuxKeyToCode;
let closure_5;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function maybePlusConversion(key) {
  let str = "plus";
  if ("+" !== key) {
    str = key;
  }
  return str;
}
function getCodeToKeyLanguageCorrection(keyCode, key, arg2) {
  if (null != arg2) {
    if (arg2 !== KeyboardEnvs.WINDOWS) {
      return key;
    }
  }
  const BACKTICK_CODES = require(12827) /* _isNativeReflectConstruct */.BACKTICK_CODES;
  if (BACKTICK_CODES.has(keyCode)) {
    let obj = require(12827) /* _isNativeReflectConstruct */;
    const layoutMap = obj.getLayoutMap();
    const value = layoutMap.get("Backquote");
    if (key === value) {
      return maybePlusConversion(key);
    } else {
      obj = { key: value, code: "Backquote", keyCode };
      const exactKeyboardEventMatchFromAny = require(12827) /* _isNativeReflectConstruct */.getExactKeyboardEventMatchFromAny(obj);
      if ("\\" === key) {
        if ("`" === value) {
          return key;
        }
      }
      if (null == exactKeyboardEventMatchFromAny) {
        let tmp10 = key;
        if (null != value) {
          tmp10 = value;
        }
        key = tmp10;
      } else {
        key = exactKeyboardEventMatchFromAny.key;
      }
      maybePlusConversion(key);
      const obj3 = require(12827) /* _isNativeReflectConstruct */;
      const tmp9 = maybePlusConversion;
    }
  } else {
    return key;
  }
}
function getEnv() {
  if (obj.isLinux()) {
    let MACOS = KeyboardEnvs.LINUX;
  } else {
    if (obj2.isMac()) {
      MACOS = KeyboardEnvs.MACOS;
    } else {
      MACOS = require(477) /* set */.isWindows() ? tmp5.WINDOWS : tmp5.BROWSER;
      const obj3 = require(477) /* set */;
    }
    obj2 = require(477) /* set */;
  }
  return MACOS;
}
function codeToKey(arg0) {
  let tmp5;
  let tmp6;
  const tmp = callback(arg0, 3);
  [, tmp5, tmp6] = arg0;
  if (KeyboardEnvs.LINUX === tmp6) {
    let tmp11 = invertResult["" + tmp4];
  } else if (KeyboardEnvs.MACOS === tmp6) {
    tmp11 = table["" + tmp5];
  } else {
    if (KeyboardEnvs.WINDOWS === tmp6) {
      tmp11 = invertResult1["" + tmp5];
    } else if (KeyboardEnvs.BROWSER === tmp6) {
      const tmp15 = importDefault(12826)(tmp5);
      let tmp17 = null;
      if (null != tmp15) {
        tmp11 = getKeyConversionForBrowser(tmp15);
      }
    } else {
      tmp11 = set["" + tmp5];
    }
    if (null != tmp17) {
      return getCodeToKeyLanguageCorrection(tmp2, tmp17, tmp3);
    } else {
      const keyboardEventShapeFromKeycode = require(12827) /* _isNativeReflectConstruct */.getKeyboardEventShapeFromKeycode(tmp2);
      let tmp29 = null;
      if (null != keyboardEventShapeFromKeycode) {
        tmp29 = getCodeToKeyLanguageCorrection(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp3);
      }
      return tmp29;
    }
  }
  let tmp24 = null;
  if (null != tmp11) {
    tmp24 = tmp11;
  }
  tmp17 = tmp24;
}
function keyToCode(key) {
  let tmp = arg1;
  let KEYBOARD_KEY = arg2;
  if (arg1 === undefined) {
    tmp = getEnv();
  }
  if (KEYBOARD_KEY === undefined) {
    KEYBOARD_KEY = constants.KEYBOARD_KEY;
  }
  if (tmp === undefined) {
    tmp = getEnv();
  }
  if (KEYBOARD_KEY === undefined) {
    KEYBOARD_KEY = constants.KEYBOARD_KEY;
  }
  let tmp6 = null;
  if (null != key) {
    let tmp8 = KEYBOARD_KEY === constants.KEYBOARD_KEY;
    if (!tmp8) {
      tmp8 = KEYBOARD_KEY === constants.KEYBOARD_MODIFIER_KEY;
    }
    let tmp10 = tmp8;
    if (tmp8) {
      tmp10 = tmp === KeyboardEnvs.LINUX;
    }
    if (tmp10 === true) {
      let parsed = LinuxKeyToCode[key];
    } else {
      let tmp13 = tmp8;
      if (tmp8) {
        tmp13 = tmp === KeyboardEnvs.MACOS;
      }
      if (tmp13 === true) {
        parsed = MacosKeyToCode[key];
      } else {
        let tmp15 = tmp8;
        if (tmp8) {
          tmp15 = tmp === KeyboardEnvs.WINDOWS;
        }
        if (tmp15 === true) {
          if ("+" === key) {
            let plus = WindowsKeyToCode.plus;
          } else {
            plus = WindowsKeyToCode[key];
          }
          parsed = plus;
        } else {
          let tmp17 = tmp8;
          if (tmp8) {
            tmp17 = tmp === KeyboardEnvs.BROWSER;
          }
          if (tmp17 === true) {
            parsed = importDefault(12826)(getKeyConversionForBrowser(key));
            const tmp30 = importDefault(12826);
          } else if (tmp8 === true) {
            parsed = set[key];
          } else if (KEYBOARD_KEY === constants.MOUSE_BUTTON === true) {
            const _parseInt2 = parseInt;
            parsed = parseInt(key.replace("MOUSE", ""), 10);
          } else if (KEYBOARD_KEY === constants.GAMEPAD_BUTTON === true) {
            const _parseInt = parseInt;
            parsed = parseInt(key.replace("GAMEPAD", ""), 10);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unrecognized DeviceType " + KEYBOARD_KEY + ".");
            throw error;
          }
        }
      }
    }
    tmp6 = null;
    if (null != parsed) {
      tmp6 = parsed;
    }
  }
  if (null != tmp6) {
    return tmp6;
  } else {
    const keyboardEventShapeFromKey = require(12827) /* _isNativeReflectConstruct */.getKeyboardEventShapeFromKey(key);
    let keyCode = null;
    if (null != keyboardEventShapeFromKey) {
      keyCode = keyboardEventShapeFromKey.keyCode;
    }
    return keyCode;
  }
}
function getKeyConversionForBrowser(key) {
  const replaced = key.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
  let str2 = "pause/break";
  if ("pause" !== replaced) {
    str2 = "pause/break";
    if ("break" !== replaced) {
      str2 = replaced;
    }
  }
  return str2;
}
function toPrettyKey(str) {
  let tmp4;
  let tmp5;
  const tmp = _createForOfIteratorHelperLoose(items);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    [tmp4, tmp5] = callback(iter2.value, 2);
    while (tmp4 !== str.toUpperCase()) {
      let iter3 = tmp();
      iter2 = iter3;
    }
    return tmp5;
  }
  return str;
}
function toMetaKeyIndexKey(arg0) {
  return arg0 + "Key";
}
({ KeyboardDeviceTypes: closure_5, LinuxKeyToCode } = items);
const MacosKeyToCode = items.MacosKeyToCode;
const WindowsKeyToCode = items.WindowsKeyToCode;
const KeyboardEnvs = items.KeyboardEnvs;
set = LinuxKeyToCode;
if (!set.isLinux()) {
  let tmp3 = MacosKeyToCode;
  if (!obj3.isMac()) {
    set = WindowsKeyToCode;
    if (!obj4.isWindows()) {
      set = {};
    }
    tmp3 = set;
    obj4 = require("set");
  }
  set = tmp3;
  obj3 = require("set");
}
const invertResult = require("apply").invert(LinuxKeyToCode);
invertResult[223] = "`";
const frozen = Object.freeze(invertResult);
let closure_12 = Object.freeze(require("apply").invert(MacosKeyToCode));
const invertResult1 = require("apply").invert(WindowsKeyToCode);
invertResult1[223] = "`";
const frozen1 = Object.freeze(invertResult1);
if (null == set) {
  set = {};
}
set = require("apply").invert(set);
if (!set.isMac()) {
  set[223] = "`";
}
set = Object.freeze(set);
items = [["META", "\u2318"], ["CMD", "\u2318"], ["RIGHT META", "RIGHT \u2318"], ["RIGHT CMD", "RIGHT \u2318"], ["SHIFT", "\u21E7"], ["RIGHT SHIFT", "RIGHT \u21E7"], ["ALT", "\u2325"], ["RIGHT ALT", "RIGHT \u2325"], ["CTRL", "\u2303"], ["RIGHT CTRL", "RIGHT \u2303"], ["ENTER", "\u21B5"], ["BACKSPACE", "\u232B"], ["DEL", "\u2326"], ["ESC", "\u238B"], ["PAGEUP", "\u21DE"], ["PAGEDOWN", "\u21DF"], ["UP", "\u2191"], ["DOWN", "\u2193"], ["LEFT", "\u2190"], ["RIGHT", "\u2192"], ["HOME", "\u2196"], ["END", "\u2198"], ["TAB", "\u21E5"], ["SPACE", "\u2423"]];
const re16 = /shift|meta|ctrl|alt$/;
const result = set.fileFinishedImporting("utils/web/KeyboardUtils.tsx");

export const getRawCodeFromKey = function getRawCodeFromKey(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = getEnv();
  }
  if (tmp === KeyboardEnvs.BROWSER) {
    let tmp4 = importDefault(12826)(arg0);
  } else {
    tmp4 = set[arg0];
  }
  return tmp4;
};
export { getCodeToKeyLanguageCorrection };
export { getEnv };
export { codeToKey };
export { keyToCode };
export { getKeyConversionForBrowser };
export const toBrowserEvents = function toBrowserEvents(arr) {
  let closure_0 = { keyCode: 0, key: "", code: "", metaKey: false, shiftKey: false, altKey: false, ctrlKey: false };
  if (null == arr) {
    let items = [];
  } else {
    items = arr.reduce((arr) => {
      const tmp = outer1_22(arg1);
      let closure_0 = tmp;
      let obj = {};
      const merged = Object.assign(closure_0);
      if (null == tmp) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj["combo"] = arg1;
        arr.push(obj);
        return arr;
      } else {
        if (outer1_16.test(tmp)) {
          let tmp3 = "meta" === tmp;
          if (!tmp3) {
            tmp3 = "shift" === tmp;
          }
          if (!tmp3) {
            tmp3 = "alt" === tmp;
          }
          if (!tmp3) {
            tmp3 = "ctrl" === tmp;
          }
          if (tmp3) {
            closure_0[outer1_26(tmp)] = true;
            return arr.map((arg0) => {
              arg0[outer2_26(closure_0)] = true;
              return arg0;
            });
          }
        }
        const tmp6 = outer1_23(tmp, outer1_9.BROWSER);
        if (null != tmp6) {
          obj.keyCode = tmp6;
        }
        arr.push(obj);
        return arr;
      }
    }, []);
  }
  return items;
};
export const toCombo = function toCombo(shortcut) {
  let tmp = arg1;
  let KEYBOARD_KEY = arg2;
  if (arg1 === undefined) {
    tmp = getEnv();
  }
  const global = tmp;
  if (KEYBOARD_KEY === undefined) {
    KEYBOARD_KEY = constants.KEYBOARD_KEY;
  }
  const str = shortcut.replace(/numpad plus/i, "");
  const str2 = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus");
  const parts = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, KEYBOARD_KEY(12828).modKey).split("+");
  const mapped = parts.map((str) => str.trim().replace("plus", "+"));
  return mapped.reduce((arr, str) => {
    let tmp5;
    const tmp = outer1_17(outer1_15);
    const iter = tmp();
    let iter2 = iter;
    let formatted = str;
    if (!iter.done) {
      [str, tmp5] = outer1_4(iter2.value, 2);
      while (tmp5 !== str.toUpperCase()) {
        let iter3 = tmp();
        iter2 = iter3;
        formatted = str;
      }
      formatted = str.toLowerCase();
      const tmp4 = outer1_4(iter2.value, 2);
    }
    const tmp6 = outer1_23(formatted, closure_0, KEYBOARD_KEY);
    if (null != tmp6) {
      const items = [KEYBOARD_KEY, tmp6, closure_0];
      arr.push(items);
    }
    return arr;
  }, []);
};
export const toString = function toString(arr) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const mapped = arr.map((arg0) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    if ("number" !== typeof tmp3) {
      tmp3 = outer1_21();
    }
    if (outer1_5.KEYBOARD_KEY !== tmp) {
      if (outer1_5.KEYBOARD_MODIFIER_KEY !== tmp) {
        if (outer1_5.MOUSE_BUTTON === tmp) {
          const _HermesInternal3 = HermesInternal;
          return "mouse" + tmp2;
        } else if (outer1_5.GAMEPAD_BUTTON === tmp) {
          const _HermesInternal2 = HermesInternal;
          return "gamepad" + tmp2;
        } else {
          const _HermesInternal = HermesInternal;
          return "dev" + tmp + "," + tmp2;
        }
      }
    }
    if (null != tmp3) {
      const items = [tmp, tmp2, tmp3];
      let items1 = items;
    } else {
      items1 = [tmp, tmp2];
    }
    let combined = outer1_22(items1);
    if (null == combined) {
      const _HermesInternal4 = HermesInternal;
      combined = "UNK" + tmp2;
    }
    return combined;
  });
  const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  if (flag) {
    const appVersion = global.navigator.appVersion;
    let mapped1 = found;
    if (-1 !== appVersion.indexOf("Mac OS X")) {
      mapped1 = found.map(toPrettyKey);
    }
    let formatted = mapped1.join(" + ").toUpperCase();
    const str4 = mapped1.join(" + ");
  } else {
    formatted = found.join("+");
  }
  return formatted;
};
export const areKeyCombosEqual = function areKeyCombosEqual(arr) {
  let flag = arg2;
  let closure_0 = arg1;
  if (arg2 === undefined) {
    flag = false;
  }
  return arr.length === arg1.length && arr.every((arg0, arg1) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    const tmp4 = outer1_4(table[arg1], 3);
    let tmp5 = tmp === tmp4[0];
    if (tmp5) {
      tmp5 = tmp2 === tmp4[1];
    }
    if (tmp5) {
      tmp5 = !flag || tmp3 === tmp4[2];
      const tmp7 = !flag || tmp3 === tmp4[2];
    }
    return tmp5;
  });
};
export const isKeyboardActivatedMouseEvent = function isKeyboardActivatedMouseEvent(nativeEvent) {
  let tmp = null != nativeEvent;
  if (tmp) {
    tmp = "object" === typeof nativeEvent;
  }
  if (tmp) {
    tmp = "nativeEvent" in nativeEvent;
  }
  if (tmp) {
    tmp = 0 === nativeEvent.nativeEvent.clientX;
  }
  if (tmp) {
    tmp = 0 === nativeEvent.nativeEvent.clientY;
  }
  return tmp;
};
