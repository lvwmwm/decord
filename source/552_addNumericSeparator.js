// Module ID: 552
// Function ID: 6669
// Name: addNumericSeparator
// Dependencies: [0]

// Module 552 (addNumericSeparator)
function addNumericSeparator(name, typeError1) {
  if (name !== Infinity) {
    if (name !== -Infinity) {
      if (name == name) {
        if (!test.call(/e/, typeError1)) {
          const tmp2 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" === typeof name) {
            if (name < 0) {
              let tmp4 = -floor(-name);
            } else {
              tmp4 = floor(name);
            }
            if (tmp4 !== name) {
              const _String = String;
              const StringResult = String(tmp4);
              const text = `${closure_15.call(arr, tmp2, "$&_")}.`;
              return `${closure_15.call(arr, tmp2, "$&_")}.` + replace.call(replace.call(slice.call(typeError1, String(tmp4).length + 1), /([0-9]{3})/g, "$&_"), /_$/, "");
            }
          }
          return replace.call(typeError1, tmp2, "$&_");
        }
      }
    }
  }
  return typeError1;
}
function wrapQuotes(replace, single, quoteStyle) {
  return obj[quoteStyle.quoteStyle || single] + replace + obj[quoteStyle.quoteStyle || single];
}
function quote(arg0) {
  return replace.call(String(arg0), /"/g, "&quot;");
}
function canTrustToString(name) {
  let tmp = !toStringTag;
  if (!tmp) {
    let tmp2 = "object" === typeof name;
    if (tmp2) {
      let tmp4 = toStringTag in name;
      if (!tmp4) {
        tmp4 = undefined !== name[closure_27];
      }
      tmp2 = tmp4;
    }
    tmp = !tmp2;
  }
  return tmp;
}
function isArray(name) {
  let tmp = "[object Array]" === toStr(name);
  if (tmp) {
    tmp = canTrustToString(name);
  }
  return tmp;
}
function isRegExp(name) {
  let tmp = "[object RegExp]" === toStr(name);
  if (tmp) {
    tmp = canTrustToString(name);
  }
  return tmp;
}
function isSymbol(custom) {
  let tmp = custom;
  if (tmp10) {
    if (tmp) {
      tmp = "object" === typeof custom;
    }
    if (tmp) {
      const _Symbol = Symbol;
      tmp = custom instanceof Symbol;
      const tmp10 = globalThis;
    }
    return tmp;
  } else if ("symbol" === typeof tmp) {
    return true;
  } else {
    if (custom) {
      if ("object" === typeof custom) {
        if (toString) {
          toString.call(custom);
          return true;
        }
      }
    }
    return false;
  }
}
function has(arg0, arg1) {
  return callback2.call(arg0, arg1);
}
function toStr(name) {
  return toString.call(name);
}
function indexOf(arr) {
  if (arr.indexOf) {
    return arr.indexOf(arg1);
  } else {
    let num = 0;
    if (0 < arr.length) {
      while (arr[num] !== arg1) {
        num = num + 1;
      }
      return num;
    }
    return -1;
  }
}
function inspectString(slice, maxStringLength) {
  if (slice.length > maxStringLength.maxStringLength) {
    const diff = slice.length - maxStringLength.maxStringLength;
    let str4 = "";
    if (diff > 1) {
      str4 = "s";
    }
    return inspectString(slice.call(slice, 0, maxStringLength.maxStringLength), maxStringLength) + ("... " + diff + " more character" + str4);
  } else {
    let str = maxStringLength.quoteStyle;
    if (!str) {
      str = "single";
    }
    obj[str].lastIndex = 0;
    return wrapQuotes(replace.call(replace.call(slice, obj[str], "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", maxStringLength);
  }
}
function lowbyte(str) {
  str = str.charCodeAt(0);
  const tmp = {}[str];
  if (tmp) {
    let text = `\${tmp}`;
  } else {
    let str2 = "";
    if (str < 16) {
      str2 = "0";
    }
    text = `\x${str2}${tmp3(str.toString(16))}`;
  }
  return text;
}
function markBoxed(typeError1) {
  return "Object(" + typeError1 + ")";
}
function weakCollectionOf(WeakMap) {
  return WeakMap + " { ? }";
}
function collectionOf(Map, get, items, prev) {
  const text = `${Map} (${get}`;
  if (prev) {
    let callResult = indentedJoin(items, prev);
  } else {
    callResult = join.call(items, ", ");
  }
  return text + ") {" + callResult + "}";
}
function indentedJoin(items, prev) {
  if (0 === items.length) {
    return "";
  } else {
    const text = `
  ${prev.prev}${prev.base}`;
    return text + join.call(items, "," + text) + "\n" + prev.prev;
  }
}
function arrObjKeys(name, inspect) {
  let length;
  const tmp = isArray(name);
  const items = [];
  if (tmp) {
    items.length = name.length;
    let num = 0;
    if (0 < name.length) {
      do {
        let tmp2 = closure_41;
        let tmp3 = num;
        let str2 = "";
        if (closure_41(name, num)) {
          str2 = inspect(name[num], name);
        }
        items[num] = str2;
        num = num + 1;
      } while (num < name.length);
    }
  }
  if ("function" === typeof getOwnPropertySymbols) {
    let items1 = getOwnPropertySymbols(name);
  } else {
    items1 = [];
  }
  if (tmp10) {
    const obj = {};
    let num2 = 0;
    let tmp5 = obj;
    if (0 < items1.length) {
      do {
        obj["$" + items1[num2]] = items1[num2];
        num2 = num2 + 1;
        tmp5 = obj;
        length = items1.length;
      } while (num2 < length);
    }
  }
  for (const key10038 in arg0) {
    let tmp16 = key10038;
    let tmp17 = closure_41;
    if (!closure_41(arg0, key10038)) {
      continue;
    } else {
      let tmp6 = tmp;
      if (tmp) {
        let _String = String;
        let _Number = Number;
        tmp6 = String(Number(key10038)) === key10038;
      }
      if (tmp6) {
        tmp6 = key10038 < arg0.length;
      }
      if (!tmp6) {
        let tmp7 = closure_26;
        if (closure_26) {
          let _Symbol = Symbol;
          tmp7 = tmp5["$" + key10038] instanceof Symbol;
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        continue;
      } else {
        let tmp8 = closure_18;
        let push = items.push;
        if (closure_18.call(/[^\w$]/, key10038)) {
          let text = `${arg1(key10038, arg0)}: `;
          let arr = push(`${arg1(key10038, arg0)}: ` + arg1(arg0[key10038], arg0));
          // continue
        } else {
          let text1 = `${key10038}: `;
          arr = push(`${key10038}: ` + arg1(arg0[key10038], arg0));
          // continue
        }
        continue;
      }
      continue;
    }
    continue;
  }
  if ("function" === typeof getOwnPropertySymbols) {
    let num3 = 0;
    if (0 < items1.length) {
      do {
        let tmp13 = closure_28;
        if (closure_28.call(name, items1[num3])) {
          let text2 = `[${inspect(arr2[num3])}`;
          let arr1 = items.push(`${`[${inspect(arr2[num3])}`}]: ${inspect(name[arr2[num3]], name)}`);
        }
        num3 = num3 + 1;
      } while (num3 < items1.length);
    }
  }
  return items;
}
let forEach = "function" === typeof Map;
if (forEach) {
  const _Map = Map;
  forEach = Map.prototype;
}
let ownPropertyDescriptor = null;
if (Object.getOwnPropertyDescriptor) {
  ownPropertyDescriptor = null;
  if (forEach) {
    const _Object = Object;
    const _Map2 = Map;
    ownPropertyDescriptor = Object.getOwnPropertyDescriptor(Map.prototype, "size");
  }
}
let get = null;
if (forEach) {
  get = null;
  if (ownPropertyDescriptor) {
    get = null;
    if ("function" === typeof ownPropertyDescriptor.get) {
      get = ownPropertyDescriptor.get;
    }
  }
}
if (forEach) {
  const _Map3 = Map;
  forEach = Map.prototype.forEach;
}
let forEach2 = "function" === typeof Set;
if (forEach2) {
  const _Set = Set;
  forEach2 = Set.prototype;
}
let ownPropertyDescriptor1 = null;
if (Object.getOwnPropertyDescriptor) {
  ownPropertyDescriptor1 = null;
  if (forEach2) {
    const _Object2 = Object;
    const _Set2 = Set;
    ownPropertyDescriptor1 = Object.getOwnPropertyDescriptor(Set.prototype, "size");
  }
}
let get1 = null;
if (forEach2) {
  get1 = null;
  if (ownPropertyDescriptor1) {
    get1 = null;
    if ("function" === typeof ownPropertyDescriptor1.get) {
      get1 = ownPropertyDescriptor1.get;
    }
  }
}
if (forEach2) {
  const _Set3 = Set;
  forEach2 = Set.prototype.forEach;
}
has = null;
if ("function" === typeof WeakMap) {
  const _WeakMap = WeakMap;
  has = null;
  if (WeakMap.prototype) {
    const _WeakMap2 = WeakMap;
    has = WeakMap.prototype.has;
  }
}
let has1 = null;
if ("function" === typeof WeakSet) {
  const _WeakSet = WeakSet;
  has1 = null;
  if (WeakSet.prototype) {
    const _WeakSet2 = WeakSet;
    has1 = WeakSet.prototype.has;
  }
}
let deref = null;
if ("function" === typeof WeakRef) {
  const _WeakRef = WeakRef;
  deref = null;
  if (WeakRef.prototype) {
    const _WeakRef2 = WeakRef;
    deref = WeakRef.prototype.deref;
  }
}
toString = Function.prototype.toString;
slice = Array.prototype.slice;
valueOf = null;
if ("function" === typeof BigInt) {
  const _BigInt = BigInt;
  valueOf = BigInt.prototype.valueOf;
}
toString = null;
if ("function" === typeof Symbol) {
  const _Symbol = Symbol;
  toString = null;
  if ("symbol" === typeof Symbol.iterator) {
    const _Symbol2 = Symbol;
    toString = Symbol.prototype.toString;
  }
}
let tmp10 = "function" === typeof Symbol;
if (tmp10) {
  const _Symbol3 = Symbol;
  tmp10 = "object" === typeof Symbol.iterator;
}
let toStringTag = null;
if ("function" === typeof Symbol) {
  const _Symbol4 = Symbol;
  toStringTag = null;
  if (Symbol.toStringTag) {
    const _Symbol5 = Symbol;
    toStringTag = Symbol.toStringTag;
    const _Symbol6 = Symbol;
    toStringTag = Symbol.toStringTag;
  }
}
if ("function" === typeof Reflect) {
  const _Reflect = Reflect;
} else {
  const _Object3 = Object;
  getPrototypeOf = Object.getPrototypeOf;
}
if (!getPrototypeOf) {
  const _Array = Array;
  let fn = null;
  if ([].__proto__ === Array.prototype) {
    fn = (arg0) => arg0.__proto__;
  }
  getPrototypeOf = fn;
}
let custom = null;
if (isSymbol(require("__exportStarResult1").custom)) {
  custom = require("__exportStarResult1").custom;
}
let obj = Object.create(null);
obj.double = "\"";
obj.single = "'";
obj = Object.create(null);
obj.double = /(["\\])/g;
obj.single = /(['\\])/g;
function inspect_(name, maxStringLength) {
  let get1;
  let length;
  let obj = maxStringLength;
  let num = arg2;
  const global = name;
  let callback = arg2;
  let closure_2 = arg3;
  function inspect(cause) {
    if (arg1) {
      const callResult = callback.call(closure_2);
      closure_2 = callResult;
      callResult.push(arg1);
    }
    if (arg2) {
      const obj = {};
      obj.depth = obj.depth;
      if (callback2(obj, "quoteStyle")) {
        obj.quoteStyle = obj.quoteStyle;
      }
      return callback3(cause, obj, closure_1 + 1, closure_2);
    } else {
      return callback3(cause, obj, closure_1 + 1, closure_2);
    }
  }
  const forEach2 = inspect;
  if (!maxStringLength) {
    obj = {};
  }
  const get = obj;
  if (has(obj, "quoteStyle")) {
    let typeError1 = has;
    if (!has(obj, obj.quoteStyle)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
      throw typeError;
    }
  }
  if (has(obj, "maxStringLength")) {
    if ("number" === typeof obj.maxStringLength) {
      let tmp10 = obj.maxStringLength < 0;
      if (tmp10) {
        tmp10 = obj.maxStringLength !== Infinity;
      }
      let tmp9 = tmp10;
    } else {
      tmp9 = null !== obj.maxStringLength;
    }
    if (tmp9) {
      typeError1 = globalThis;
      const _TypeError5 = TypeError;
      typeError1 = new.target;
      typeError1 = new.target;
      typeError1 = new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
      throw typeError1;
    }
  }
  const tmp11 = !has(obj, "customInspect") || obj.customInspect;
  if ("boolean" !== typeof tmp11) {
    if ("symbol" !== tmp11) {
      typeError1 = globalThis;
      const _TypeError4 = TypeError;
      typeError1 = new.target;
      typeError1 = new.target;
      typeError1 = new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      throw typeError1;
    }
  }
  if (has(obj, "indent")) {
    if (null !== obj.indent) {
      if ("\t" !== obj.indent) {
        const _parseInt = parseInt;
        const _TypeError2 = TypeError;
        const typeError2 = new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
        throw typeError2;
      }
    }
  }
  if (has(obj, "numericSeparator")) {
    if ("boolean" !== typeof obj.numericSeparator) {
      typeError1 = globalThis;
      const _TypeError3 = TypeError;
      typeError1 = new.target;
      typeError1 = new.target;
      typeError1 = new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
      throw typeError1;
    }
  }
  const numericSeparator = obj.numericSeparator;
  if (undefined === name) {
    return "undefined";
  } else {
    typeError1 = null;
    if (null === name) {
      return "null";
    } else {
      typeError1 = typeof name;
      if ("boolean" === typeError1) {
        let str80 = "false";
        if (name) {
          str80 = "true";
        }
        return str80;
      } else if ("string" === typeError1) {
        typeError1 = inspectString;
        return inspectString(name, obj);
      } else if ("number" === typeError1) {
        if (0 === name) {
          let str79 = "-0";
          if (Infinity / name > 0) {
            str79 = "0";
          }
          return str79;
        } else {
          typeError1 = globalThis;
          const _String9 = String;
          typeError1 = String(name);
          if (numericSeparator) {
            typeError1 = addNumericSeparator;
            typeError1 = addNumericSeparator(name, typeError1);
          }
          return typeError1;
        }
      } else if ("bigint" === typeError1) {
        typeError1 = globalThis;
        const _String8 = String;
        typeError1 = `${String(name)}n`;
        if (numericSeparator) {
          typeError1 = addNumericSeparator;
          typeError1 = addNumericSeparator(name, `${String(name)}n`);
        }
        return typeError1;
      } else {
        let num6 = 5;
        if (undefined !== obj.depth) {
          num6 = obj.depth;
        }
        if (undefined === num) {
          callback = 0;
          num = 0;
        }
        if (num >= num6) {
          if (num6 > 0) {
            if ("object" === typeError1) {
              typeError1 = isArray;
              let str77 = "[Object]";
              if (isArray(name)) {
                str77 = "[Array]";
              }
              return str77;
            }
          }
        }
        let str7 = "\t";
        if ("\t" === obj.indent) {
          obj = { base: str7 };
          const _Array2 = Array;
          obj.prev = join.call(Array(num + 1), `	`);
          let tmp18 = obj;
        } else {
          tmp18 = null;
          if ("number" === typeof obj.indent) {
            tmp18 = null;
            if (obj.indent > 0) {
              const _Array = Array;
              str7 = join.call(Array(obj.indent + 1), " ");
            }
          }
        }
        if (undefined === closure_2) {
          closure_2 = [];
        } else if (indexOf(closure_2, name) >= 0) {
          return "[Circular]";
        }
        if ("function" === typeError1) {
          typeError1 = isRegExp;
          if (!isRegExp(name)) {
            if (name.name) {
              name = name.name;
            } else {
              const callResult = match.call(toString.call(name), /^function\s*([\w$]+)/);
              name = null;
              if (callResult) {
                name = callResult[1];
              }
            }
            const arr = arrObjKeys(name, inspect);
            let str11 = " (anonymous)";
            if (name) {
              str11 = `: ${tmp29}`;
            }
            let str13 = "";
            if (arr.length > 0) {
              str13 = `${" { " + closure_20.call(arr, ", ")} }`;
            }
            return "[Function" + str11 + "]" + str13;
          }
        }
        if (isSymbol(name)) {
          typeError1 = tmp10;
          if (tmp10) {
            typeError1 = replace;
            typeError1 = globalThis;
            const _String7 = String;
            typeError1 = replace.call(String(name), /^(Symbol\(.*\))_[^)]*$/, "$1");
          } else {
            typeError1 = toString;
            typeError1 = toString.call(name);
          }
          if ("object" === typeError1) {
            typeError1 = tmp10;
            if (!tmp10) {
              typeError1 = markBoxed;
              typeError1 = markBoxed(typeError1);
            }
          }
          return typeError1;
        } else {
          let flag = false;
          if (name) {
            flag = false;
            if ("object" === typeError1) {
              if ("undefined" === typeof globalThis.HTMLElement) {
                flag = "string" === typeof name.nodeName && "function" === typeof name.getAttribute;
                const tmp34 = "string" === typeof name.nodeName && "function" === typeof name.getAttribute;
              } else {
                flag = true;
              }
            }
          }
          if (flag) {
            typeError1 = toLowerCase;
            typeError1 = globalThis;
            const _String5 = String;
            typeError1 = `<${tmp(String(name.nodeName))}`;
            const arr8 = name.attributes || [];
            let num22 = 0;
            if (0 < arr8.length) {
              do {
                typeError1 = closure_35;
                typeError1 = closure_36;
                typeError1 = ` ${arr8[num22].name}`;
                typeError1 = typeError1 + (` ${arr8[num22].name}` + "=" + closure_35(closure_36(arr8[num22].value), "double", obj));
                num22 = num22 + 1;
                length = arr8.length;
              } while (num22 < length);
            }
            typeError1 = `${tmp}>`;
            typeError1 = name.childNodes && name.childNodes.length;
            if (typeError1) {
              typeError1 = `${tmp}...`;
            }
            typeError1 = toLowerCase;
            const _String6 = String;
            return typeError1 + ("</" + toLowerCase.call(String(name.nodeName)) + ">");
          } else if (isArray(name)) {
            if (0 === name.length) {
              return "[]";
            } else {
              typeError1 = arrObjKeys;
              const arr9 = arrObjKeys(name, inspect);
              if (tmp18) {
                let num21 = 0;
                let flag8 = true;
                if (0 < arr9.length) {
                  typeError1 = indexOf;
                  flag8 = false;
                  while (indexOf(arr9[num21], "\n") < 0) {
                    num21 = num21 + 1;
                    flag8 = true;
                    if (num21 >= arr9.length) {
                      break;
                    }
                  }
                }
                if (!flag8) {
                  typeError1 = indentedJoin;
                  typeError1 = `${"[" + closure_49(arr9, tmp18)}]`;
                }
                return typeError1;
              }
              typeError1 = join;
              typeError1 = `${"[ " + closure_20.call(arr9, ", ")} ]`;
            }
          } else {
            let tmp37 = "[object Error]" === toStr(name);
            if (tmp37) {
              tmp37 = canTrustToString(name);
            }
            if (tmp37) {
              typeError1 = arrObjKeys;
              const arr7 = arrObjKeys(name, inspect);
              let str49 = globalThis;
              const _Error = Error;
              if (!("cause" in Error.prototype)) {
                if ("cause" in name) {
                  typeError1 = propertyIsEnumerable;
                  if (!propertyIsEnumerable.call(name, "cause")) {
                    const _String3 = String;
                    typeError1 = join;
                    typeError1 = concat;
                    typeError1 = `{ [${String(name)}`;
                    return `{ [${String(name)}` + "] " + join.call(concat.call("[cause]: " + inspect(name.cause), arr7), ", ") + " }";
                  }
                }
              }
              if (0 === arr7.length) {
                typeError1 = `[${str49.String(name)}`;
                str49 = "]";
                typeError1 = `[${str49.String(name)}]`;
              } else {
                const _String4 = String;
                typeError1 = join;
                typeError1 = `{ [${String(name)}`;
                typeError1 = `${`{ [${String(name)}` + "] " + closure_20.call(arr7, ", ")} }`;
              }
            } else {
              if ("object" === typeError1) {
                if (tmp11) {
                  if (custom) {
                    if ("function" === typeof name[closure_30]) {
                      if (callback(closure_2[0])) {
                        typeError1 = callback;
                        typeError1 = closure_2;
                        obj = { depth: num6 - num };
                        return callback(closure_2[0])(name, obj);
                      }
                    }
                  }
                  if ("symbol" !== tmp11) {
                    if ("function" === typeof name.inspect) {
                      return name.inspect();
                    }
                  }
                }
              }
              let flag2 = false;
              if (get) {
                flag2 = false;
                if (tmp43) {
                  flag2 = false;
                  if ("object" === typeof tmp43) {
                    get.call(tmp43);
                    get1.call(tmp43);
                    const _Map = Map;
                    flag2 = tmp43 instanceof Map;
                  }
                }
              }
              while (true) {
                if (flag2) {
                  let items = [];
                  let forEach = items;
                  typeError1 = forEach;
                  if (forEach) {
                    typeError1 = forEach;
                    typeError1 = forEach.call(name, (arg0, arg1) => {
                      const text = `${closure_6(arg1, closure_0, true)} => `;
                      items.push(`${closure_6(arg1, closure_0, true)} => ` + inspect(arg0, arg0));
                    });
                  }
                  typeError1 = collectionOf;
                  typeError1 = get;
                  let str48 = "Map";
                  typeError1 = items;
                  typeError1 = tmp18;
                  return collectionOf("Map", get.call(name), items, tmp18);
                } else {
                  let tmp55 = name;
                  let tmp56 = get1;
                  let flag3 = false;
                  if (get1) {
                    let tmp57 = name;
                    flag3 = false;
                    if (tmp55) {
                      let tmp58 = name;
                      flag3 = false;
                      if ("object" === typeof tmp55) {
                        let tmp59 = get1;
                        let tmp60 = name;
                        let callResult3 = get1.call(tmp55);
                        let tmp62 = get;
                        let tmp63 = name;
                        let callResult4 = get.call(tmp55);
                        let tmp65 = name;
                        let tmp66 = globalThis;
                        let _Set = Set;
                        flag3 = tmp55 instanceof Set;
                      }
                    }
                  }
                  while (true) {
                    if (flag3) {
                      let items1 = [];
                      get1 = items1;
                      typeError1 = forEach2;
                      if (forEach2) {
                        typeError1 = forEach2;
                        typeError1 = forEach2.call(name, (arg0) => {
                          items1.push(inspect(arg0, arg0));
                        });
                      }
                      typeError1 = collectionOf;
                      typeError1 = get1;
                      let str47 = "Set";
                      typeError1 = items1;
                      typeError1 = tmp18;
                      return collectionOf("Set", get1.call(name), items1, tmp18);
                    } else {
                      let tmp67 = name;
                      let tmp68 = has;
                      let flag4 = false;
                      if (has) {
                        let tmp69 = name;
                        flag4 = false;
                        if (tmp67) {
                          let tmp70 = name;
                          flag4 = false;
                          if ("object" === typeof tmp67) {
                            let tmp71 = has;
                            let tmp72 = name;
                            let tmp73 = has;
                            let callResult5 = has.call(tmp67, has);
                            let tmp75 = has1;
                            let tmp76 = name;
                            let tmp77 = has1;
                            let callResult6 = has1.call(tmp67, has1);
                            let tmp79 = name;
                            let tmp80 = globalThis;
                            let _WeakMap = WeakMap;
                            flag4 = tmp67 instanceof WeakMap;
                          }
                        }
                      }
                      while (true) {
                        if (flag4) {
                          typeError1 = weakCollectionOf;
                          let str46 = "WeakMap";
                          return weakCollectionOf("WeakMap");
                        } else {
                          let tmp81 = name;
                          let tmp82 = has1;
                          let flag5 = false;
                          if (has1) {
                            let tmp83 = name;
                            flag5 = false;
                            if (tmp81) {
                              let tmp84 = name;
                              flag5 = false;
                              if ("object" === typeof tmp81) {
                                let tmp85 = has1;
                                let tmp86 = name;
                                let tmp87 = has1;
                                let callResult7 = has1.call(tmp81, has1);
                                let tmp89 = has;
                                let tmp90 = name;
                                let tmp91 = has;
                                let callResult8 = has.call(tmp81, has);
                                let tmp93 = name;
                                let tmp94 = globalThis;
                                let _WeakSet = WeakSet;
                                flag5 = tmp81 instanceof WeakSet;
                              }
                            }
                          }
                          while (true) {
                            if (flag5) {
                              typeError1 = weakCollectionOf;
                              let str45 = "WeakSet";
                              return weakCollectionOf("WeakSet");
                            } else {
                              let tmp95 = name;
                              let tmp96 = deref;
                              let flag6 = false;
                              if (deref) {
                                let tmp97 = name;
                                flag6 = false;
                                if (tmp95) {
                                  let tmp98 = name;
                                  flag6 = false;
                                  if ("object" === typeof tmp95) {
                                    let tmp99 = deref;
                                    typeError1 = deref.call(name);
                                    flag6 = true;
                                  }
                                }
                              }
                              while (true) {
                                if (flag6) {
                                  typeError1 = weakCollectionOf;
                                  let str44 = "WeakRef";
                                  return weakCollectionOf("WeakRef");
                                } else {
                                  typeError1 = toStr;
                                  let str24 = "[object Number]";
                                  typeError1 = "[object Number]" === toStr(name);
                                  if (typeError1) {
                                    typeError1 = canTrustToString;
                                    typeError1 = canTrustToString(name);
                                  }
                                  if (typeError1) {
                                    typeError1 = markBoxed;
                                    typeError1 = globalThis;
                                    let _Number = Number;
                                    return markBoxed(inspect(Number(name)));
                                  } else {
                                    let flag7 = false;
                                    if (name) {
                                      typeError1 = name;
                                      flag7 = false;
                                      if ("object" === typeof typeError1) {
                                        typeError1 = valueOf;
                                        flag7 = false;
                                        if (valueOf) {
                                          typeError1 = valueOf;
                                          typeError1 = valueOf.call(name);
                                          flag7 = true;
                                        }
                                      }
                                    }
                                    while (true) {
                                      if (flag7) {
                                        typeError1 = markBoxed;
                                        typeError1 = valueOf;
                                        return markBoxed(inspect(valueOf.call(name)));
                                      } else {
                                        typeError1 = toStr;
                                        let str25 = "[object Boolean]";
                                        typeError1 = "[object Boolean]" === toStr(name);
                                        if (typeError1) {
                                          typeError1 = canTrustToString;
                                          typeError1 = canTrustToString(name);
                                        }
                                        if (typeError1) {
                                          typeError1 = markBoxed;
                                          typeError1 = valueOf;
                                          return markBoxed(valueOf.call(name));
                                        } else {
                                          typeError1 = toStr;
                                          let str26 = "[object String]";
                                          typeError1 = "[object String]" === toStr(name);
                                          if (typeError1) {
                                            typeError1 = canTrustToString;
                                            typeError1 = canTrustToString(name);
                                          }
                                          typeError1 = globalThis;
                                          if (typeError1) {
                                            typeError1 = markBoxed;
                                            let _String2 = String;
                                            return markBoxed(inspect(String(name)));
                                          } else {
                                            let _window = window;
                                            let str27 = "undefined";
                                            if ("undefined" !== typeof window) {
                                              let _window2 = window;
                                              if (name === window) {
                                                let str43 = "{ [object Window] }";
                                                return "{ [object Window] }";
                                              }
                                            }
                                            let _globalThis = globalThis;
                                            if ("undefined" === typeof globalThis) {
                                              typeError1 = global;
                                              if (undefined !== global) {
                                                typeError1 = global;
                                              }
                                              typeError1 = toStr;
                                              let str28 = "[object Date]";
                                              typeError1 = "[object Date]" === toStr(name);
                                              if (typeError1) {
                                                typeError1 = canTrustToString;
                                                typeError1 = canTrustToString(name);
                                              }
                                              if (!typeError1) {
                                                typeError1 = isRegExp;
                                                if (!isRegExp(name)) {
                                                  typeError1 = arrObjKeys;
                                                  let arr2 = arrObjKeys(name, inspect);
                                                  typeError1 = getPrototypeOf;
                                                  if (getPrototypeOf) {
                                                    typeError1 = getPrototypeOf;
                                                    let _Object3 = Object;
                                                    typeError1 = getPrototypeOf(name) === Object.prototype;
                                                  } else {
                                                    let _Object = Object;
                                                    typeError1 = name instanceof Object;
                                                    if (!typeError1) {
                                                      let _Object2 = Object;
                                                      typeError1 = name.constructor === Object;
                                                    }
                                                  }
                                                  let _Object4 = Object;
                                                  let items2 = "null prototype";
                                                  if (name instanceof Object) {
                                                    items2 = "";
                                                  }
                                                  if (!typeError1) {
                                                    typeError1 = toStringTag;
                                                    if (toStringTag) {
                                                      let _Object5 = Object;
                                                      if (Object(name) === name) {
                                                        typeError1 = toStringTag;
                                                        if (toStringTag in name) {
                                                          typeError1 = slice;
                                                          typeError1 = toStr;
                                                          let num16 = 8;
                                                          let num17 = -1;
                                                          let callResult9 = slice.call(toStr(name), 8, -1);
                                                        }
                                                        let str30 = "";
                                                        let str31 = "";
                                                        if (!typeError1) {
                                                          str31 = str30;
                                                          if ("function" === typeof name.constructor) {
                                                            typeError1 = str30;
                                                            if (name.constructor.name) {
                                                              let str32 = " ";
                                                              typeError1 = `${name.constructor.name} `;
                                                            }
                                                            str31 = typeError1;
                                                          }
                                                        }
                                                        if (callResult9) {
                                                          typeError1 = join;
                                                          typeError1 = concat;
                                                          if (!callResult9) {
                                                            callResult9 = [];
                                                          }
                                                          if (!items2) {
                                                            items2 = [];
                                                          }
                                                          let str33 = ": ";
                                                          let str34 = "[";
                                                          let str35 = "] ";
                                                          str30 = `${"[" + tmp(tmp([], arr4, arr3), ": ")}] `;
                                                        }
                                                        typeError1 = str31 + str30;
                                                        let num18 = 0;
                                                        if (0 === arr2.length) {
                                                          let str41 = "{}";
                                                          typeError1 = `${tmp}{}`;
                                                        } else if (tmp18) {
                                                          typeError1 = indentedJoin;
                                                          let str39 = "{";
                                                          let str40 = "}";
                                                          typeError1 = `${tmp + "{" + closure_49(arr2, tmp18)}}`;
                                                        } else {
                                                          typeError1 = join;
                                                          let str36 = ", ";
                                                          let str37 = "{ ";
                                                          let str38 = " }";
                                                          typeError1 = `${tmp + "{ " + closure_20.call(arr2, ", ")} }`;
                                                        }
                                                        return typeError1;
                                                      }
                                                    }
                                                  }
                                                  let str29 = "";
                                                  if (items2) {
                                                    str29 = "Object";
                                                  }
                                                  callResult9 = str29;
                                                }
                                              }
                                              let _String = String;
                                              return String(name);
                                            } else {
                                              let _globalThis2 = globalThis;
                                            }
                                            let str42 = "{ [object globalThis] }";
                                            return "{ [object globalThis] }";
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
let closure_33 = Object.prototype.hasOwnProperty || function(arg0) {
  return arg0 in this;
};

export default inspect_;
