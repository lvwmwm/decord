// Module ID: 517
// Function ID: 6612
// Name: getEvalledConstructor
// Dependencies: []

// Module 517 (getEvalledConstructor)
function getEvalledConstructor(arg0) {
  return Function("\"use strict\"; return (" + arg0 + ").constructor;")();
}
function throwTypeError(arg0) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp();
  throw tmp;
}
if (require(dependencyMap[1])) {
  throwTypeError = () => throwTypeError();
}
const tmp = require(dependencyMap[2])();
let obj = {};
let tmp2;
if ("undefined" !== typeof Uint8Array) {
  if (require(dependencyMap[3])) {
    let _Uint8Array = Uint8Array;
    tmp2 = require(dependencyMap[3])(Uint8Array);
  }
}
obj = Object.create(null);
let AggregateError;
if ("undefined" !== typeof globalThis.AggregateError) {
  AggregateError = globalThis.AggregateError;
}
obj.%AggregateError% = AggregateError;
obj.%Array% = Array;
let _ArrayBuffer;
if ("undefined" !== typeof ArrayBuffer) {
  _ArrayBuffer = ArrayBuffer;
}
obj.%ArrayBuffer% = _ArrayBuffer;
let _moduleResult;
if (tmp) {
  if (require(dependencyMap[3])) {
    const items = [];
    let _Symbol = Symbol;
    const _module = require(dependencyMap[3]);
    _moduleResult = _module(items[Symbol.iterator]());
  }
}
obj.%ArrayIteratorPrototype% = _moduleResult;
obj.%AsyncFromSyncIteratorPrototype% = undefined;
obj.%AsyncFunction% = obj;
obj.%AsyncGenerator% = obj;
obj.%AsyncGeneratorFunction% = obj;
obj.%AsyncIteratorPrototype% = obj;
let _Atomics;
if ("undefined" !== typeof Atomics) {
  _Atomics = Atomics;
}
obj.%Atomics% = _Atomics;
let _BigInt;
if ("undefined" !== typeof BigInt) {
  _BigInt = BigInt;
}
obj.%BigInt% = _BigInt;
let _BigInt64Array;
if ("undefined" !== typeof BigInt64Array) {
  _BigInt64Array = BigInt64Array;
}
obj.%BigInt64Array% = _BigInt64Array;
let _BigUint64Array;
if ("undefined" !== typeof BigUint64Array) {
  _BigUint64Array = BigUint64Array;
}
obj.%BigUint64Array% = _BigUint64Array;
obj.%Boolean% = Boolean;
let _DataView;
if ("undefined" !== typeof DataView) {
  _DataView = DataView;
}
obj.%DataView% = _DataView;
obj.%Date% = Date;
obj.%decodeURI% = decodeURI;
obj.%decodeURIComponent% = decodeURIComponent;
obj.%encodeURI% = encodeURI;
obj.%encodeURIComponent% = encodeURIComponent;
obj.%Error% = require(dependencyMap[4]);
obj.%eval% = globalThis.eval;
obj.%EvalError% = require(dependencyMap[5]);
let Float16Array;
if ("undefined" !== typeof globalThis.Float16Array) {
  Float16Array = globalThis.Float16Array;
}
obj.%Float16Array% = Float16Array;
let _Float32Array;
if ("undefined" !== typeof Float32Array) {
  _Float32Array = Float32Array;
}
obj.%Float32Array% = _Float32Array;
let _Float64Array;
if ("undefined" !== typeof Float64Array) {
  _Float64Array = Float64Array;
}
obj.%Float64Array% = _Float64Array;
let FinalizationRegistry;
if ("undefined" !== typeof globalThis.FinalizationRegistry) {
  FinalizationRegistry = globalThis.FinalizationRegistry;
}
obj.%FinalizationRegistry% = FinalizationRegistry;
obj.%Function% = Function;
obj.%GeneratorFunction% = obj;
let _Int8Array;
if ("undefined" !== typeof Int8Array) {
  _Int8Array = Int8Array;
}
obj.%Int8Array% = _Int8Array;
let _Int16Array;
if ("undefined" !== typeof Int16Array) {
  _Int16Array = Int16Array;
}
obj.%Int16Array% = _Int16Array;
let _Int32Array;
if ("undefined" !== typeof Int32Array) {
  _Int32Array = Int32Array;
}
obj.%Int32Array% = _Int32Array;
obj.%isFinite% = isFinite;
obj.%isNaN% = isNaN;
let _module1Result;
if (tmp) {
  if (require(dependencyMap[3])) {
    const _module1 = require(dependencyMap[3]);
    const items1 = [];
    const _Symbol2 = Symbol;
    const _module2 = require(dependencyMap[3]);
    _module1Result = _module1(_module2(items1[Symbol.iterator]()));
  }
}
obj.%IteratorPrototype% = _module1Result;
let _JSON;
if ("object" === typeof JSON) {
  _JSON = JSON;
}
obj.%JSON% = _JSON;
let _Map;
if ("undefined" !== typeof Map) {
  _Map = Map;
}
obj.%Map% = _Map;
let _module3Result;
if ("undefined" !== typeof Map) {
  if (tmp) {
    if (require(dependencyMap[3])) {
      _Map = Map;
      const _module3 = require(dependencyMap[3]);
      const map = new Map();
      const _Symbol3 = Symbol;
      _module3Result = _module3(map[Symbol.iterator]());
    }
  }
}
obj.%MapIteratorPrototype% = _module3Result;
obj.%Math% = Math;
obj.%Number% = Number;
obj.%Object% = require(dependencyMap[6]);
obj.%Object.getOwnPropertyDescriptor% = require(dependencyMap[1]);
obj.%parseFloat% = parseFloat;
obj.%parseInt% = parseInt;
let _Promise;
if ("undefined" !== typeof Promise) {
  _Promise = Promise;
}
obj.%Promise% = _Promise;
let _Proxy;
if ("undefined" !== typeof Proxy) {
  _Proxy = Proxy;
}
obj.%Proxy% = _Proxy;
obj.%RangeError% = require(dependencyMap[7]);
obj.%ReferenceError% = require(dependencyMap[8]);
let _Reflect;
if ("undefined" !== typeof Reflect) {
  _Reflect = Reflect;
}
obj.%Reflect% = _Reflect;
obj.%RegExp% = RegExp;
let _Set;
if ("undefined" !== typeof Set) {
  _Set = Set;
}
obj.%Set% = _Set;
let _module4Result;
if ("undefined" !== typeof Set) {
  if (tmp) {
    if (require(dependencyMap[3])) {
      _Set = Set;
      const _module4 = require(dependencyMap[3]);
      const set = new Set();
      const _Symbol4 = Symbol;
      _module4Result = _module4(set[Symbol.iterator]());
    }
  }
}
obj.%SetIteratorPrototype% = _module4Result;
let _SharedArrayBuffer;
if ("undefined" !== typeof SharedArrayBuffer) {
  _SharedArrayBuffer = SharedArrayBuffer;
}
obj.%SharedArrayBuffer% = _SharedArrayBuffer;
obj.%String% = String;
let _module5Result;
if (tmp) {
  if (require(dependencyMap[3])) {
    const _Symbol5 = Symbol;
    const _module5 = require(dependencyMap[3]);
    _module5Result = _module5(""[Symbol.iterator]());
  }
}
obj.%StringIteratorPrototype% = _module5Result;
_Symbol = undefined;
if (tmp) {
  _Symbol = Symbol;
}
obj.%Symbol% = _Symbol;
obj.%SyntaxError% = require(dependencyMap[9]);
obj.%ThrowTypeError% = throwTypeError;
obj.%TypedArray% = tmp2;
obj.%TypeError% = require(dependencyMap[0]);
_Uint8Array = undefined;
if ("undefined" !== typeof Uint8Array) {
  _Uint8Array = Uint8Array;
}
obj.%Uint8Array% = _Uint8Array;
let _Uint8ClampedArray;
if ("undefined" !== typeof Uint8ClampedArray) {
  _Uint8ClampedArray = Uint8ClampedArray;
}
obj.%Uint8ClampedArray% = _Uint8ClampedArray;
let _Uint16Array;
if ("undefined" !== typeof Uint16Array) {
  _Uint16Array = Uint16Array;
}
obj.%Uint16Array% = _Uint16Array;
let _Uint32Array;
if ("undefined" !== typeof Uint32Array) {
  _Uint32Array = Uint32Array;
}
obj.%Uint32Array% = _Uint32Array;
obj.%URIError% = require(dependencyMap[10]);
let _WeakMap;
if ("undefined" !== typeof WeakMap) {
  _WeakMap = WeakMap;
}
obj.%WeakMap% = _WeakMap;
let _WeakRef;
if ("undefined" !== typeof WeakRef) {
  _WeakRef = WeakRef;
}
obj.%WeakRef% = _WeakRef;
let _WeakSet;
if ("undefined" !== typeof WeakSet) {
  _WeakSet = WeakSet;
}
obj.%WeakSet% = _WeakSet;
obj.%Function.prototype.call% = require(dependencyMap[11]);
obj.%Function.prototype.apply% = require(dependencyMap[12]);
obj.%Object.defineProperty% = require(dependencyMap[13]);
obj.%Object.getPrototypeOf% = require(dependencyMap[14]);
obj.%Math.abs% = require(dependencyMap[15]);
obj.%Math.floor% = require(dependencyMap[16]);
obj.%Math.max% = require(dependencyMap[17]);
obj.%Math.min% = require(dependencyMap[18]);
obj.%Math.pow% = require(dependencyMap[19]);
obj.%Math.round% = require(dependencyMap[20]);
obj.%Math.sign% = require(dependencyMap[21]);
obj.%Reflect.getPrototypeOf% = require(dependencyMap[22]);
if (require(dependencyMap[3])) {
  const error = null.error;
}
function doEval(text) {
  if ("%AsyncFunction%" === text) {
    let prototype = getEvalledConstructor("async function () {}");
  } else if ("%GeneratorFunction%" === text) {
    prototype = getEvalledConstructor("function* () {}");
  } else if ("%AsyncGeneratorFunction%" === text) {
    prototype = getEvalledConstructor("async function* () {}");
  } else if ("%AsyncGenerator%" === text) {
    const tmp7 = doEval("%AsyncGeneratorFunction%");
    if (tmp7) {
      prototype = tmp7.prototype;
    }
  } else if ("%AsyncIteratorPrototype%" === text) {
    const tmp12 = doEval("%AsyncGenerator%");
    let tmp3 = tmp12;
    if (tmp12) {
      tmp3 = require(dependencyMap[3]);
    }
    if (tmp3) {
      prototype = require(dependencyMap[3])(tmp12.prototype);
    }
  }
  obj[text] = prototype;
  return prototype;
}
obj = Object.create(null);
obj.%ArrayBufferPrototype% = [true, true];
obj.%ArrayPrototype% = [];
obj.%ArrayProto_entries% = [];
obj.%ArrayProto_forEach% = [];
obj.%ArrayProto_keys% = [-4463757.531692596, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001392098289016113, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000982409849202079];
obj.%ArrayProto_values% = [false, false, false];
obj.%AsyncFunctionPrototype% = ["<string:1627390208>", "<string:119824903>"];
obj.%AsyncGenerator% = [false, false];
obj.%AsyncGeneratorPrototype% = ["Uint8ClampedArray", "prototype", "Uint16Array"];
obj.%BooleanPrototype% = ["prototype", "Uint32Array"];
obj.%DataViewPrototype% = ["fm", "getThreadNotificationOptions"];
obj.%DatePrototype% = ["fm", "WeakMap"];
obj.%ErrorPrototype% = [null, null];
obj.%EvalErrorPrototype% = [null, "prototype"];
obj.%Float32ArrayPrototype% = ["body", "prototype"];
obj.%Float64ArrayPrototype% = ["<string:19950152>", "<string:23470080>"];
obj.%FunctionPrototype% = [];
obj.%Generator% = ["Array", "THREAD_MEMBER_UPDATE"];
obj.%GeneratorPrototype% = [];
obj.%Int8ArrayPrototype% = [];
obj.%Int16ArrayPrototype% = [false, false];
obj.%Int32ArrayPrototype% = [true, true];
obj.%JSONParse% = [];
obj.%JSONStringify% = [null, null];
obj.%MapPrototype% = [null, null];
obj.%NumberPrototype% = [true, true];
obj.%ObjectPrototype% = [false, false];
obj.%ObjProto_toString% = [-57070471, 1627594241, true];
obj.%ObjProto_valueOf% = [1029217205, 271876915, -719058887];
obj.%PromisePrototype% = ["CHANNEL_DELETE", "GUILD_DELETE"];
obj.%PromiseProto_then% = [null, null, null];
obj.%Promise_all% = ["MESSAGE_PREVIEWS_LOADED", "MESSAGE_UPDATE"];
obj.%Promise_reject% = [false, false];
obj.%Promise_resolve% = [true, true];
obj.%RangeErrorPrototype% = ["<string:1431706179>", "<string:1368049423>"];
obj.%ReferenceErrorPrototype% = [null, null];
obj.%RegExpPrototype% = ["Adobe AIR", "Arora"];
obj.%SetPrototype% = [];
obj.%SharedArrayBufferPrototype% = [null, null];
obj.%StringPrototype% = [];
obj.%SymbolPrototype% = ["isArray", "current"];
obj.%SyntaxErrorPrototype% = [-687865475, -1895824795];
obj.%TypedArrayPrototype% = ["r", "isArray"];
obj.%TypeErrorPrototype% = [false, false];
obj.%Uint8ArrayPrototype% = [];
obj.%Uint8ClampedArrayPrototype% = [null, null];
obj.%Uint16ArrayPrototype% = [false, false];
obj.%Uint32ArrayPrototype% = [];
obj.%URIErrorPrototype% = [];
obj.%WeakMapPrototype% = [681121775732791200000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015580188463817877];
obj.%WeakSetPrototype% = ["a", "_getFrameForEnvironment"];
const _module6 = require(dependencyMap[23]);
let closure_9 = _module6.call(require(dependencyMap[11]), Array.prototype.concat);
const _module7 = require(dependencyMap[23]);
let closure_10 = _module7.call(require(dependencyMap[12]), Array.prototype.splice);
const _module8 = require(dependencyMap[23]);
let closure_11 = _module8.call(require(dependencyMap[11]), String.prototype.replace);
const _module9 = require(dependencyMap[23]);
let closure_12 = _module9.call(require(dependencyMap[11]), String.prototype.slice);
const _module10 = require(dependencyMap[23]);
let closure_13 = _module10.call(require(dependencyMap[11]), RegExp.prototype.exec);
let closure_14 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
let closure_15 = /\\(\\)?/g;
function getBaseIntrinsic(text, arg1) {
  if (require(dependencyMap[24])(obj, text)) {
    text = `${"%" + tmp4[0]}%`;
    const tmp = obj[text];
  }
  if (require(dependencyMap[24])(obj, text)) {
    let tmp13 = obj[text];
    if (tmp13 === obj) {
      tmp13 = doEval(text);
    }
    if (undefined === tmp13) {
      if (!arg1) {
        let tmp19 = require(dependencyMap[0]);
        const prototype2 = tmp19.prototype;
        tmp19 = new tmp19("intrinsic " + text + " exists, but is not available. Please file an issue!");
        throw tmp19;
      }
    }
    const obj = { alias: tmp, name: text, value: tmp13 };
    return obj;
  } else {
    let tmp7 = require(dependencyMap[9]);
    const prototype = tmp7.prototype;
    tmp7 = new tmp7("intrinsic " + text + " does not exist!");
    throw tmp7;
  }
}

export default function GetIntrinsic(arg0, arg1) {
  let alias;
  let name;
  let value;
  if ("string" === typeof arg0) {
    if (0 !== arg0.length) {
      if (arguments.length > 1) {
        if ("boolean" !== typeof arg1) {
          let tmp65 = require(dependencyMap[0]);
          const prototype4 = tmp65.prototype;
          tmp65 = new tmp65("\"allowMissing\" argument must be a boolean");
          throw tmp65;
        }
      }
      if (null === callback4(/^%?[^%]*%?$/, arg0)) {
        let tmp58 = require(dependencyMap[9]);
        const prototype3 = tmp58.prototype;
        tmp58 = new tmp58("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        throw tmp58;
      } else {
        const arr = function stringToPath(arg0) {
          const tmp = callback2(arg0, 0, 1);
          const tmp2 = callback2(arg0, -1);
          if ("%" === tmp) {
            if ("%" !== tmp2) {
              let tmp13 = items(closure_1[9]);
              const prototype2 = tmp13.prototype;
              tmp13 = new tmp13("invalid intrinsic syntax, expected closing `%`");
              throw tmp13;
            }
          }
          if ("%" === tmp2) {
            if ("%" !== tmp) {
              let tmp6 = items(closure_1[9]);
              const prototype = tmp6.prototype;
              tmp6 = new tmp6("invalid intrinsic syntax, expected opening `%`");
              throw tmp6;
            }
          }
          const items = [];
          callback(arg0, closure_14, (arg0, arg1, arg2, arg3) => {
            let tmp = arg1;
            if (arg2) {
              tmp = callback(arg3, closure_15, "$1");
            } else if (!tmp) {
              tmp = arg0;
            }
            items[items.length] = tmp;
          });
          return items;
        }(arg0);
        let str2 = "";
        if (arr.length > 0) {
          str2 = arr[0];
        }
        ({ name, value, alias } = getBaseIntrinsic(`%${str2}%`, arg1));
        if (alias) {
          str2 = alias[0];
          callback2(arr, callback(["Text", "lc"], alias));
        }
        let tmp8 = value;
        let flag = false;
        let num3 = 1;
        let flag2 = true;
        let tmp10 = value;
        if (1 < arr.length) {
          while (true) {
            let tmp11 = arr[num3];
            let tmp12 = callback3;
            let tmp13 = callback3(tmp11, 0, 1);
            let tmp14 = callback3;
            let tmp15 = callback3(tmp11, -1);
            if ("\"" !== tmp13) {
              if ("'" !== tmp13) {
                if ("`" !== tmp13) {
                  if ("\"" !== tmp15) {
                    let tmp16 = "constructor" !== tmp11 && flag2;
                    if (!tmp16) {
                      flag = true;
                    }
                    str2 = `${str2}.${tmp11}`;
                    let text = `${"%" + str2}%`;
                    let tmp18 = require;
                    let tmp19 = dependencyMap;
                    let tmp20 = obj;
                    if (require(dependencyMap[24])(obj, `${"%" + str2}%`)) {
                      let tmp48 = obj;
                      let tmp23 = obj[`${"%" + str2}%`];
                      let tmp21 = flag2;
                      let tmp22 = tmp9;
                    } else {
                      tmp21 = flag2;
                      tmp22 = tmp9;
                      tmp23 = tmp8;
                      if (null != tmp8) {
                        if (tmp11 in tmp8) {
                          let tmp31 = require;
                          let tmp32 = dependencyMap;
                          if (require(dependencyMap[1])) {
                            if (num3 + 1 >= arr.length) {
                              let tmp38 = require;
                              let tmp39 = dependencyMap;
                              let tmp40 = require(dependencyMap[1])(tmp8, tmp11);
                              let tmp41 = !tmp40;
                              if (!tmp41) {
                                if ("get" in tmp40) {
                                  if (!("originalValue" in tmp40.get)) {
                                    let get = tmp40.get;
                                  }
                                  let tmp43 = get;
                                  let tmp44 = tmp42;
                                  let tmp45 = tmp40;
                                }
                              }
                              get = tmp8[tmp11];
                            }
                          }
                          let tmp33 = require;
                          let tmp34 = dependencyMap;
                          let tmp35 = require(dependencyMap[24])(tmp8, tmp11);
                          let tmp36 = tmp8[tmp11];
                          let tmp37 = tmp9;
                          let tmp46 = tmp35;
                          if (tmp35) {
                            tmp46 = !flag;
                          }
                          tmp23 = tmp36;
                          tmp21 = tmp35;
                          tmp22 = tmp9;
                          if (tmp46) {
                            let tmp47 = obj;
                            obj[text] = tmp36;
                            tmp23 = tmp36;
                            tmp21 = tmp35;
                            tmp22 = tmp9;
                          }
                        } else if (!arg1) {
                          let tmp24 = require;
                          let tmp25 = dependencyMap;
                          let tmp26 = require(dependencyMap[0]);
                          let str11 = "base intrinsic for ";
                          let prototype = tmp26.prototype;
                          let tmp27 = new.target;
                          let str12 = " exists, but the property is not available.";
                          let tmp28 = new.target;
                          tmp26 = new tmp26("base intrinsic for " + arg0 + " exists, but the property is not available.");
                          let tmp30 = tmp26;
                          throw tmp26;
                        }
                      }
                    }
                    num3 = num3 + 1;
                    tmp8 = tmp23;
                    flag2 = tmp21;
                    let tmp9 = tmp22;
                    tmp10 = tmp23;
                  }
                }
              }
            }
            if (tmp13 !== tmp15) {
              break;
            }
          }
          let tmp51 = require(dependencyMap[9]);
          const prototype2 = tmp51.prototype;
          tmp51 = new tmp51("property names with quotes must have matching quotes");
          throw tmp51;
        }
        return tmp10;
      }
    }
  }
  let tmp70 = require(dependencyMap[0]);
  tmp70 = new tmp70("intrinsic name must be a non-empty string");
  throw tmp70;
};
