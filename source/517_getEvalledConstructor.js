// Module ID: 517
// Function ID: 6612
// Name: getEvalledConstructor
// Dependencies: [518, 519, 521, 523, 535, 536, 526, 537, 538, 539, 540, 533, 534, 541, 525, 542, 543, 544, 545, 546, 547, 548, 524, 531, 550]

// Module 517 (getEvalledConstructor)
import bind from "bind";
import module_533 from "module_533";
import bind from "bind";
import module_534 from "module_534";
import bind from "bind";
import module_533 from "module_533";
import bind from "bind";
import module_533 from "module_533";
import bind from "bind";
import module_533 from "module_533";

function getEvalledConstructor(arg0) {
  return Function("\"use strict\"; return (" + arg0 + ").constructor;")();
}
function throwTypeError(arg0) {
  let tmp = require(518);
  tmp = new tmp();
  throw tmp;
}
if (require("module_519")) {
  throwTypeError = (() => throwTypeError)();
}
let tmp = require("hasNativeSymbols")();
let obj = {};
let tmp2;
if ("undefined" !== typeof Uint8Array) {
  if (require("getProto")) {
    let _Uint8Array = Uint8Array;
    tmp2 = require("getProto")(Uint8Array);
  }
}
obj = Object.create(null);
let AggregateError;
if ("undefined" !== typeof globalThis.AggregateError) {
  AggregateError = globalThis.AggregateError;
}
obj["%AggregateError%"] = AggregateError;
obj["%Array%"] = Array;
let _ArrayBuffer;
if ("undefined" !== typeof ArrayBuffer) {
  _ArrayBuffer = ArrayBuffer;
}
obj["%ArrayBuffer%"] = _ArrayBuffer;
let _moduleResult;
if (tmp) {
  if (require("getProto")) {
    let items = [];
    let _Symbol = Symbol;
    const _module = require("getProto");
    _moduleResult = _module(items[Symbol.iterator]());
  }
}
obj["%ArrayIteratorPrototype%"] = _moduleResult;
obj["%AsyncFromSyncIteratorPrototype%"] = undefined;
obj["%AsyncFunction%"] = obj;
obj["%AsyncGenerator%"] = obj;
obj["%AsyncGeneratorFunction%"] = obj;
obj["%AsyncIteratorPrototype%"] = obj;
let _Atomics;
if ("undefined" !== typeof Atomics) {
  _Atomics = Atomics;
}
obj["%Atomics%"] = _Atomics;
let _BigInt;
if ("undefined" !== typeof BigInt) {
  _BigInt = BigInt;
}
obj["%BigInt%"] = _BigInt;
let _BigInt64Array;
if ("undefined" !== typeof BigInt64Array) {
  _BigInt64Array = BigInt64Array;
}
obj["%BigInt64Array%"] = _BigInt64Array;
let _BigUint64Array;
if ("undefined" !== typeof BigUint64Array) {
  _BigUint64Array = BigUint64Array;
}
obj["%BigUint64Array%"] = _BigUint64Array;
obj["%Boolean%"] = Boolean;
let _DataView;
if ("undefined" !== typeof DataView) {
  _DataView = DataView;
}
obj["%DataView%"] = _DataView;
obj["%Date%"] = Date;
obj["%decodeURI%"] = decodeURI;
obj["%decodeURIComponent%"] = decodeURIComponent;
obj["%encodeURI%"] = encodeURI;
obj["%encodeURIComponent%"] = encodeURIComponent;
obj["%Error%"] = require("module_535");
obj["%eval%"] = globalThis.eval;
obj["%EvalError%"] = require("module_536");
let Float16Array;
if ("undefined" !== typeof globalThis.Float16Array) {
  Float16Array = globalThis.Float16Array;
}
obj["%Float16Array%"] = Float16Array;
let _Float32Array;
if ("undefined" !== typeof Float32Array) {
  _Float32Array = Float32Array;
}
obj["%Float32Array%"] = _Float32Array;
let _Float64Array;
if ("undefined" !== typeof Float64Array) {
  _Float64Array = Float64Array;
}
obj["%Float64Array%"] = _Float64Array;
let FinalizationRegistry;
if ("undefined" !== typeof globalThis.FinalizationRegistry) {
  FinalizationRegistry = globalThis.FinalizationRegistry;
}
obj["%FinalizationRegistry%"] = FinalizationRegistry;
obj["%Function%"] = Function;
obj["%GeneratorFunction%"] = obj;
let _Int8Array;
if ("undefined" !== typeof Int8Array) {
  _Int8Array = Int8Array;
}
obj["%Int8Array%"] = _Int8Array;
let _Int16Array;
if ("undefined" !== typeof Int16Array) {
  _Int16Array = Int16Array;
}
obj["%Int16Array%"] = _Int16Array;
let _Int32Array;
if ("undefined" !== typeof Int32Array) {
  _Int32Array = Int32Array;
}
obj["%Int32Array%"] = _Int32Array;
obj["%isFinite%"] = isFinite;
obj["%isNaN%"] = isNaN;
let _module1Result;
if (tmp) {
  if (require("getProto")) {
    const _module1 = require("getProto");
    const items1 = [];
    const _Symbol2 = Symbol;
    const _module2 = require("getProto");
    _module1Result = _module1(_module2(items1[Symbol.iterator]()));
  }
}
obj["%IteratorPrototype%"] = _module1Result;
let _JSON;
if ("object" === typeof JSON) {
  _JSON = JSON;
}
obj["%JSON%"] = _JSON;
let _Map;
if ("undefined" !== typeof Map) {
  _Map = Map;
}
obj["%Map%"] = _Map;
let _module3Result;
if ("undefined" !== typeof Map) {
  if (tmp) {
    if (require("getProto")) {
      _Map = Map;
      const _module3 = require("getProto");
      const map = new Map();
      const _Symbol3 = Symbol;
      _module3Result = _module3(map[Symbol.iterator]());
    }
  }
}
obj["%MapIteratorPrototype%"] = _module3Result;
obj["%Math%"] = Math;
obj["%Number%"] = Number;
obj["%Object%"] = require("module_526");
obj["%Object.getOwnPropertyDescriptor%"] = require("module_519");
obj["%parseFloat%"] = parseFloat;
obj["%parseInt%"] = parseInt;
let _Promise;
if ("undefined" !== typeof Promise) {
  _Promise = Promise;
}
obj["%Promise%"] = _Promise;
let _Proxy;
if ("undefined" !== typeof Proxy) {
  _Proxy = Proxy;
}
obj["%Proxy%"] = _Proxy;
obj["%RangeError%"] = require("module_537");
obj["%ReferenceError%"] = require("module_538");
let _Reflect;
if ("undefined" !== typeof Reflect) {
  _Reflect = Reflect;
}
obj["%Reflect%"] = _Reflect;
obj["%RegExp%"] = RegExp;
let _Set;
if ("undefined" !== typeof Set) {
  _Set = Set;
}
obj["%Set%"] = _Set;
let _module4Result;
if ("undefined" !== typeof Set) {
  if (tmp) {
    if (require("getProto")) {
      _Set = Set;
      const _module4 = require("getProto");
      const set = new Set();
      const _Symbol4 = Symbol;
      _module4Result = _module4(set[Symbol.iterator]());
    }
  }
}
obj["%SetIteratorPrototype%"] = _module4Result;
let _SharedArrayBuffer;
if ("undefined" !== typeof SharedArrayBuffer) {
  _SharedArrayBuffer = SharedArrayBuffer;
}
obj["%SharedArrayBuffer%"] = _SharedArrayBuffer;
obj["%String%"] = String;
let _module5Result;
if (tmp) {
  if (require("getProto")) {
    const _Symbol5 = Symbol;
    const _module5 = require("getProto");
    _module5Result = _module5(""[Symbol.iterator]());
  }
}
obj["%StringIteratorPrototype%"] = _module5Result;
_Symbol = undefined;
if (tmp) {
  _Symbol = Symbol;
}
obj["%Symbol%"] = _Symbol;
obj["%SyntaxError%"] = require("module_539");
obj["%ThrowTypeError%"] = throwTypeError;
obj["%TypedArray%"] = tmp2;
obj["%TypeError%"] = require("module_518");
_Uint8Array = undefined;
if ("undefined" !== typeof Uint8Array) {
  _Uint8Array = Uint8Array;
}
obj["%Uint8Array%"] = _Uint8Array;
let _Uint8ClampedArray;
if ("undefined" !== typeof Uint8ClampedArray) {
  _Uint8ClampedArray = Uint8ClampedArray;
}
obj["%Uint8ClampedArray%"] = _Uint8ClampedArray;
let _Uint16Array;
if ("undefined" !== typeof Uint16Array) {
  _Uint16Array = Uint16Array;
}
obj["%Uint16Array%"] = _Uint16Array;
let _Uint32Array;
if ("undefined" !== typeof Uint32Array) {
  _Uint32Array = Uint32Array;
}
obj["%Uint32Array%"] = _Uint32Array;
obj["%URIError%"] = require("module_540");
let _WeakMap;
if ("undefined" !== typeof WeakMap) {
  _WeakMap = WeakMap;
}
obj["%WeakMap%"] = _WeakMap;
let _WeakRef;
if ("undefined" !== typeof WeakRef) {
  _WeakRef = WeakRef;
}
obj["%WeakRef%"] = _WeakRef;
let _WeakSet;
if ("undefined" !== typeof WeakSet) {
  _WeakSet = WeakSet;
}
obj["%WeakSet%"] = _WeakSet;
obj["%Function.prototype.call%"] = require("module_533");
obj["%Function.prototype.apply%"] = require("module_534");
obj["%Object.defineProperty%"] = require("module_541");
obj["%Object.getPrototypeOf%"] = require("module_525");
obj["%Math.abs%"] = require("module_542");
obj["%Math.floor%"] = require("module_543");
obj["%Math.max%"] = require("module_544");
obj["%Math.min%"] = require("module_545");
obj["%Math.pow%"] = require("module_546");
obj["%Math.round%"] = require("module_547");
obj["%Math.sign%"] = require("sign");
obj["%Reflect.getPrototypeOf%"] = require("getPrototypeOf");
if (require("getProto")) {
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
      tmp3 = require(523) /* getProto */;
    }
    if (tmp3) {
      prototype = require(523) /* getProto */(tmp12.prototype);
    }
  }
  obj[text] = prototype;
  return prototype;
}
obj = Object.create(null);
obj["%ArrayBufferPrototype%"] = ["ArrayBuffer", "prototype"];
obj["%ArrayPrototype%"] = ["Array", "prototype"];
obj["%ArrayProto_entries%"] = ["Array", "prototype", "entries"];
obj["%ArrayProto_forEach%"] = ["Array", "prototype", "forEach"];
obj["%ArrayProto_keys%"] = ["Array", "prototype", "keys"];
obj["%ArrayProto_values%"] = ["Array", "prototype", "values"];
obj["%AsyncFunctionPrototype%"] = ["AsyncFunction", "prototype"];
obj["%AsyncGenerator%"] = ["AsyncGeneratorFunction", "prototype"];
obj["%AsyncGeneratorPrototype%"] = ["AsyncGeneratorFunction", "prototype", "prototype"];
obj["%BooleanPrototype%"] = ["Boolean", "prototype"];
obj["%DataViewPrototype%"] = ["DataView", "prototype"];
obj["%DatePrototype%"] = ["Date", "prototype"];
obj["%ErrorPrototype%"] = ["Error", "prototype"];
obj["%EvalErrorPrototype%"] = ["EvalError", "prototype"];
obj["%Float32ArrayPrototype%"] = ["Float32Array", "prototype"];
obj["%Float64ArrayPrototype%"] = ["Float64Array", "prototype"];
obj["%FunctionPrototype%"] = ["Function", "prototype"];
obj["%Generator%"] = ["GeneratorFunction", "prototype"];
obj["%GeneratorPrototype%"] = ["GeneratorFunction", "prototype", "prototype"];
obj["%Int8ArrayPrototype%"] = ["Int8Array", "prototype"];
obj["%Int16ArrayPrototype%"] = ["Int16Array", "prototype"];
obj["%Int32ArrayPrototype%"] = ["Int32Array", "prototype"];
obj["%JSONParse%"] = ["JSON", "parse"];
obj["%JSONStringify%"] = ["JSON", "stringify"];
obj["%MapPrototype%"] = ["Map", "prototype"];
obj["%NumberPrototype%"] = ["Number", "prototype"];
obj["%ObjectPrototype%"] = ["Object", "prototype"];
obj["%ObjProto_toString%"] = ["Object", "prototype", "toString"];
obj["%ObjProto_valueOf%"] = ["Object", "prototype", "valueOf"];
obj["%PromisePrototype%"] = ["Promise", "prototype"];
obj["%PromiseProto_then%"] = ["Promise", "prototype", "then"];
obj["%Promise_all%"] = ["Promise", "all"];
obj["%Promise_reject%"] = ["Promise", "reject"];
obj["%Promise_resolve%"] = ["Promise", "resolve"];
obj["%RangeErrorPrototype%"] = ["RangeError", "prototype"];
obj["%ReferenceErrorPrototype%"] = ["ReferenceError", "prototype"];
obj["%RegExpPrototype%"] = ["RegExp", "prototype"];
obj["%SetPrototype%"] = ["Set", "prototype"];
obj["%SharedArrayBufferPrototype%"] = ["SharedArrayBuffer", "prototype"];
obj["%StringPrototype%"] = ["String", "prototype"];
obj["%SymbolPrototype%"] = ["Symbol", "prototype"];
obj["%SyntaxErrorPrototype%"] = ["SyntaxError", "prototype"];
obj["%TypedArrayPrototype%"] = ["TypedArray", "prototype"];
obj["%TypeErrorPrototype%"] = ["TypeError", "prototype"];
obj["%Uint8ArrayPrototype%"] = ["Uint8Array", "prototype"];
obj["%Uint8ClampedArrayPrototype%"] = ["Uint8ClampedArray", "prototype"];
obj["%Uint16ArrayPrototype%"] = ["Uint16Array", "prototype"];
obj["%Uint32ArrayPrototype%"] = ["Uint32Array", "prototype"];
obj["%URIErrorPrototype%"] = ["URIError", "prototype"];
obj["%WeakMapPrototype%"] = ["WeakMap", "prototype"];
obj["%WeakSetPrototype%"] = ["WeakSet", "prototype"];
const re14 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
const re15 = /\\(\\)?/g;
function getBaseIntrinsic(text, arg1) {
  if (require(550) /* bind */(obj, text)) {
    text = `${"%" + tmp4[0]}%`;
    const tmp = obj[text];
  }
  if (require(550) /* bind */(obj, text)) {
    let tmp13 = obj[text];
    if (tmp13 === obj) {
      tmp13 = doEval(text);
    }
    if (undefined === tmp13) {
      if (!arg1) {
        let tmp19 = require(518);
        const prototype2 = tmp19.prototype;
        tmp19 = new tmp19("intrinsic " + text + " exists, but is not available. Please file an issue!");
        throw tmp19;
      }
    }
    obj = { alias: tmp, name: text, value: tmp13 };
    return obj;
  } else {
    let tmp7 = require(539);
    const prototype = tmp7.prototype;
    tmp7 = new tmp7("intrinsic " + text + " does not exist!");
    throw tmp7;
  }
}

export default function GetIntrinsic(arg0, arg1) {
  let alias;
  let name;
  let tmp13;
  let tmp15;
  let value;
  if ("string" === typeof arg0) {
    if (0 !== arg0.length) {
      if (arguments.length > 1) {
        if ("boolean" !== typeof arg1) {
          let tmp65 = require(518);
          const prototype4 = tmp65.prototype;
          tmp65 = new tmp65("\"allowMissing\" argument must be a boolean");
          throw tmp65;
        }
      }
      if (null === module_533(/^%?[^%]*%?$/, arg0)) {
        let tmp58 = require(539);
        const prototype3 = tmp58.prototype;
        tmp58 = new tmp58("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        throw tmp58;
      } else {
        const arr = (function stringToPath(arg0) {
          let tmp = outer1_12(arg0, 0, 1);
          const tmp2 = outer1_12(arg0, -1);
          if ("%" === tmp) {
            if ("%" !== tmp2) {
              let tmp13 = outer1_0(outer1_1[9]);
              const prototype2 = tmp13.prototype;
              tmp13 = new tmp13("invalid intrinsic syntax, expected closing `%`");
              throw tmp13;
            }
          }
          if ("%" === tmp2) {
            if ("%" !== tmp) {
              let tmp6 = outer1_0(outer1_1[9]);
              const prototype = tmp6.prototype;
              tmp6 = new tmp6("invalid intrinsic syntax, expected opening `%`");
              throw tmp6;
            }
          }
          const items = [];
          outer1_11(arg0, outer1_14, (arg0, arg1, arg2, arg3) => {
            let tmp = arg1;
            if (arg2) {
              tmp = outer2_11(arg3, outer2_15, "$1");
            } else if (!tmp) {
              tmp = arg0;
            }
            items[items.length] = tmp;
          });
          return items;
        })(arg0);
        let str2 = "";
        if (arr.length > 0) {
          str2 = arr[0];
        }
        ({ name, value, alias } = getBaseIntrinsic(`%${str2}%`, arg1));
        if (alias) {
          str2 = alias[0];
          module_534(arr, module_533([0, 1], alias));
        }
        let tmp8 = value;
        let flag = false;
        let num3 = 1;
        let flag2 = true;
        let tmp10 = value;
        if (1 < arr.length) {
          do {
            let tmp11 = arr[num3];
            let tmp12 = module_533;
            tmp13 = module_533(tmp11, 0, 1);
            let tmp14 = module_533;
            tmp15 = module_533(tmp11, -1);
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
                    if (require(550) /* bind */(obj, `${"%" + str2}%`)) {
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
                          if (require(519)) {
                            if (num3 + 1 >= arr.length) {
                              let tmp38 = require;
                              let tmp39 = dependencyMap;
                              let tmp40 = require(519)(tmp8, tmp11);
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
                          let tmp35 = require(550) /* bind */(tmp8, tmp11);
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
                          let tmp26 = require(518);
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
                    tmp9 = tmp22;
                    tmp10 = tmp23;
                  }
                }
              }
            }
          } while (tmp13 === tmp15);
          let tmp51 = require(539);
          let prototype2 = tmp51.prototype;
          tmp51 = new tmp51("property names with quotes must have matching quotes");
          throw tmp51;
        }
        return tmp10;
      }
    }
  }
  let tmp70 = require(518);
  tmp70 = new tmp70("intrinsic name must be a non-empty string");
  throw tmp70;
};
