// Module ID: 12704
// Function ID: 97469
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: areKeyCombosEqual, getRawCodeFromKey, isKeyboardActivatedMouseEvent, toBrowserEvents, toCombo, toString

// Module 12704 (_createForOfIteratorHelperLoose)
let LinuxKeyToCode;
function _createForOfIteratorHelperLoose(@@iterator) {
  let global = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      global = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const BACKTICK_CODES = key(dependencyMap[5]).BACKTICK_CODES;
  if (BACKTICK_CODES.has(keyCode)) {
    let obj = key(dependencyMap[5]);
    const layoutMap = obj.getLayoutMap();
    const value = layoutMap.get("Backquote");
    if (key === value) {
      return maybePlusConversion(key);
    } else {
      obj = { key: value, code: "Backquote", keyCode };
      const exactKeyboardEventMatchFromAny = key(dependencyMap[5]).getExactKeyboardEventMatchFromAny(obj);
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
      const obj3 = key(dependencyMap[5]);
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
      MACOS = arg1(dependencyMap[2]).isWindows() ? tmp5.WINDOWS : tmp5.BROWSER;
      const obj3 = arg1(dependencyMap[2]);
    }
    const obj2 = arg1(dependencyMap[2]);
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
    tmp11 = closure_12["" + tmp5];
  } else {
    if (KeyboardEnvs.WINDOWS === tmp6) {
      tmp11 = invertResult1["" + tmp5];
    } else if (KeyboardEnvs.BROWSER === tmp6) {
      const tmp15 = importDefault(dependencyMap[4])(tmp5);
      let tmp17 = null;
      if (null != tmp15) {
        tmp11 = getKeyConversionForBrowser(tmp15);
      }
    } else {
      tmp11 = invertResult2["" + tmp5];
    }
    if (null != tmp17) {
      return getCodeToKeyLanguageCorrection(tmp2, tmp17, tmp3);
    } else {
      const keyboardEventShapeFromKeycode = arg1(dependencyMap[5]).getKeyboardEventShapeFromKeycode(tmp2);
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
            parsed = importDefault(dependencyMap[4])(getKeyConversionForBrowser(key));
            const tmp30 = importDefault(dependencyMap[4]);
          } else if (tmp8 === true) {
            parsed = obj[key];
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
    const obj = arg1(dependencyMap[5]);
    const keyboardEventShapeFromKey = obj.getKeyboardEventShapeFromKey(key);
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
let closure_4 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ KeyboardDeviceTypes: closure_5, LinuxKeyToCode } = tmp2);
const MacosKeyToCode = tmp2.MacosKeyToCode;
const WindowsKeyToCode = tmp2.WindowsKeyToCode;
const KeyboardEnvs = tmp2.KeyboardEnvs;
let obj = arg1(dependencyMap[2]);
obj = LinuxKeyToCode;
if (!obj.isLinux()) {
  let tmp3 = MacosKeyToCode;
  if (!obj3.isMac()) {
    obj = WindowsKeyToCode;
    if (!obj4.isWindows()) {
      obj = {};
    }
    tmp3 = obj;
    const obj4 = arg1(dependencyMap[2]);
  }
  obj = tmp3;
  const obj3 = arg1(dependencyMap[2]);
}
const invertResult = importDefault(dependencyMap[3]).invert(LinuxKeyToCode);
invertResult[223] = "`";
const frozen = Object.freeze(invertResult);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_12 = Object.freeze(importDefault(dependencyMap[3]).invert(MacosKeyToCode));
const importDefaultResult1 = importDefault(dependencyMap[3]);
const invertResult1 = importDefault(dependencyMap[3]).invert(WindowsKeyToCode);
invertResult1[223] = "`";
const frozen1 = Object.freeze(invertResult1);
const importDefaultResult2 = importDefault(dependencyMap[3]);
if (null == obj) {
  obj = {};
}
const invertResult2 = importDefault(dependencyMap[3]).invert(obj);
const importDefaultResult3 = importDefault(dependencyMap[3]);
if (!obj10.isMac()) {
  invertResult2[223] = "`";
}
const frozen2 = Object.freeze(invertResult2);
const items = [[true, true], ["channelId", "channelId"], [-92565272158904660000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002005878589786805], ["<string:1900014796>", "Array"], [], [], [true, true], [false, false], [], [null, null], [null, null], [false, false], [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000346282551539407, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017179403304727124], [], [true, true], [true, true], [null, null], [null, null], [-92559631349653870000000000000000000000000000000000000000000000, -92559631349654160000000000000000000000000000000000000000000000], ["<string:3435973951>", "<string:3972844748>"], ["<string:858993471>", "<string:858993459>"], [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020645714, -92559631435427180000000000000000000000000000000000000000000000], [], ["<string:2269396972>", "<string:822083911>"]];
let closure_16 = /shift|meta|ctrl|alt$/;
const obj10 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("utils/web/KeyboardUtils.tsx");

export const getRawCodeFromKey = function getRawCodeFromKey(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = getEnv();
  }
  if (tmp === KeyboardEnvs.BROWSER) {
    let tmp4 = importDefault(dependencyMap[4])(arg0);
  } else {
    tmp4 = obj[arg0];
  }
  return tmp4;
};
export { getCodeToKeyLanguageCorrection };
export { getEnv };
export { codeToKey };
export { keyToCode };
export { getKeyConversionForBrowser };
export const toBrowserEvents = function toBrowserEvents(arr) {
  let closure_0 = {};
  if (null == arr) {
    let items = [];
  } else {
    items = arr.reduce((arr) => {
      const tmp = callback(arg1);
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
        if (regex.test(tmp)) {
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
            closure_0[callback3(tmp)] = true;
            return arr.map((arg0) => {
              arg0[callback(tmp)] = true;
              return arg0;
            });
          }
        }
        const tmp6 = callback2(tmp, constants.BROWSER);
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
  const arg1 = KEYBOARD_KEY;
  const str = shortcut.replace(/numpad plus/i, "");
  const str2 = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus");
  const parts = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, arg1(dependencyMap[6]).modKey).split("+");
  const mapped = parts.map((str) => str.trim().replace("plus", "+"));
  return mapped.reduce((arr, str) => {
    let tmp5;
    const tmp = callback2(closure_15);
    const iter = tmp();
    let iter2 = iter;
    let formatted = str;
    if (!iter.done) {
      [str, tmp5] = callback(iter2.value, 2);
      while (tmp5 !== str.toUpperCase()) {
        let iter3 = tmp();
        iter2 = iter3;
        formatted = str;
      }
      formatted = str.toLowerCase();
      const tmp4 = callback(iter2.value, 2);
    }
    const tmp6 = callback3(formatted, tmp, KEYBOARD_KEY);
    if (null != tmp6) {
      const items = [KEYBOARD_KEY, tmp6, tmp];
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
      tmp3 = callback();
    }
    if (constants.KEYBOARD_KEY !== tmp) {
      if (constants.KEYBOARD_MODIFIER_KEY !== tmp) {
        if (constants.MOUSE_BUTTON === tmp) {
          const _HermesInternal3 = HermesInternal;
          return "mouse" + tmp2;
        } else if (constants.GAMEPAD_BUTTON === tmp) {
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
    let combined = closure_22(items1);
    if (null == combined) {
      const _HermesInternal4 = HermesInternal;
      combined = "UNK" + tmp2;
    }
    return combined;
  });
  const found = mapped.filter(arg1(dependencyMap[7]).isNotNullish);
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
  const global = arg1;
  if (arg2 === undefined) {
    flag = false;
  }
  const arg1 = flag;
  return arr.length === arg1.length && arr.every((arg0, arg1) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    const tmp4 = callback(arg1[arg1], 3);
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
