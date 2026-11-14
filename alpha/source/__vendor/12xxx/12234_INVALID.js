// Module ID: 12234
// Function ID: 12235
// Name: INVALID
// Dependencies: [32, 42, 41, 93, 95, 98, 158, 12165, 12160, 12168, 12167, 12159, 12163]
// Exports: compile

// Module 12234 (INVALID)
import NEVER from "NEVER" /* 12159 */;
import captureStackTrace2 from "captureStackTrace" /* 12160 */;
import $ZodType from "$ZodType" /* 12163 */;
import cuid2 from "cuid" /* 12165 */;
import Doc from "Doc" /* 12167 */;
import $ZodCyclicError from "$ZodCyclicError" /* 12168 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import hasOwnProperty_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

const require = globalThis.__r;
let _require, map, number, set2, size;

let self = this;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function withParser(_zod, validator) {
  _require = validator;
  if (require("$ZodCyclicError").isRecursiveSchema(_zod)) {
    let tmp4 = _moduleResult1;
    const self = this;
    const self2 = this;
    const tmp5 = new _moduleResult1("a schema whose subtree contains a reference cycle");
    throw tmp5;
  } else {
    let tmp = captureStackTrace;
    const cloneResult = captureStackTrace.clone(_zod);
    const run = _zod._zod.run;
    let __originalRun = run.__originalRun;
    if (__originalRun == null) {
      __originalRun = run;
    }
    function wrapped(value, arg1) {
      let async;
      if (arg1 != null) {
        async = arg1.async;
      }
      if (!async) {
        let direction;
        if (arg1 != null) {
          direction = arg1.direction;
        }
        if ("backward" !== direction) {
          let skipChecks;
          if (arg1 != null) {
            skipChecks = arg1.skipChecks;
          }
          if (!skipChecks) {
            let tmp4;
            if (arg1 != null) {
              tmp4 = arg1[closure_12];
            }
            if (!tmp4) {
              let tmp13;
              if (arg1) {
                if ($ZodCyclicError.isBackEdge(arg1, value.value)) {
                  return __originalRun(value, arg1);
                }
              }
              const tmp9 = validator(value.value);
              if (tmp9 !== exports.INVALID) {
                value.value = tmp9;
                tmp13 = value;
              } else {
                if (arg1) {
                  arg1[closure_12] = true;
                }
                tmp13 = __originalRun(value, arg1);
              }
              return tmp13;
            }
          }
        }
      }
      return __originalRun(value, arg1);
    }
    wrapped.__originalRun = __originalRun;
    cloneResult._zod.bag.fallbackRun = __originalRun;
    cloneResult._zod.bag.validator = validator;
    cloneResult._zod.run = wrapped;
    if (!run.__originalRun) {
      _require = validator;
      if (typeof _zod.safeParse === "function") {
        const safeParse = _zod.safeParse;
        cloneResult.safeParse = (arg0, arg1) => {
          let tmp4;
          const tmp = closure_0(arg0);
          if (tmp !== __originalRun.INVALID) {
            tmp4 = { success: true, data: tmp };
            const obj = { success: true, data: tmp };
          } else {
            tmp4 = safeParse(arg0, arg1);
          }
          return tmp4;
        };
      }
      if (typeof _zod.parse === "function") {
        const parse = _zod.parse;
        cloneResult.parse = (arg0, arg1) => {
          let tmp = closure_0(arg0);
          if (tmp === __originalRun.INVALID) {
            tmp = parse(arg0, arg1);
          }
          return tmp;
        };
      }
    }
    return cloneResult;
  }
}
function compileFn(_zod, arg1) {
  let flag = true;
  try {
    flag = $ZodCyclicError.isRecursiveSchema(_zod);
  } catch (err) {
  }
  if (flag) {
    const self7 = this;
    const self8 = this;
    const tmp46 = new _moduleResult1("a schema whose subtree contains a reference cycle");
    throw tmp46;
  } else {
    const obj = { constants: map, constantCounter: 0, varCounter: 0, definite: true };
    const _Map = Map;
    const self = this;
    const self2 = this;
    const self3 = this;
    const self4 = this;
    map = new Map();
    const doc = new Doc.Doc(["input"]);
    let assertOnly;
    const tmp10 = generateCheck;
    if (arg1 != null) {
      assertOnly = arg1.assertOnly;
    }
    const tmp10Result = tmp10(doc, obj, _zod, "input", !assertOnly);
    let str2 = "return true;";
    const write = doc.write;
    if (null !== tmp10Result) {
      const _HermesInternal = HermesInternal;
      str2 = "return " + tmp10Result + ";";
    }
    write(str2);
    constants = obj.constants;
    const items = ["INVALID"];
    HermesBuiltin.arraySpread(items, constants.keys(), 1);
    const items1 = [exports.INVALID];
    const constants2 = obj.constants;
    HermesBuiltin.arraySpread(items1, constants2.values(), 1);
    const content = doc.content;
    const joined = content.join("\n");
    let debug;
    if (arg1 != null) {
      debug = arg1.debug;
    }
    let str6 = "";
    if (debug) {
      let combined = joined;
      if (items.length > 0) {
        const _HermesInternal2 = HermesInternal;
        combined = "// Constants: " + items.join(", ") + "\n" + joined;
      }
      str6 = combined;
    }
    const _Function = Function;
    const _HermesInternal3 = HermesInternal;
    try {
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items2, items, 0)] = tmp27;
      const items3 = [];
      const applyResult = HermesBuiltin.apply(_Function, items2);
      HermesBuiltin.arraySpread(items3, items1, 0);
      const applyResult1 = HermesBuiltin.apply(applyResult, items3, undefined);
      let debug1;
      if (arg1 != null) {
        debug1 = arg1.debug;
      }
      if (debug1) {
        applyResult1.code = str6;
      }
      applyResult1.definite = obj.definite;
      return applyResult1;
    } catch (tmp41) {
      const _HermesInternal4 = HermesInternal;
      const self5 = this;
      const self6 = this;
      const tmp43 = new _moduleResult1("this schema (generated code failed to evaluate: " + tmp41.message + ")");
      throw tmp43;
    }
  }
}
function addConstant(constantCounter, fn2) {
  const obj = constantCounter.constants[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    if (tmp3[1] === fn2) {
      obj.return();
      return tmp4;
    }
  }
  constantCounter.constantCounter = +constantCounter.constantCounter + 1;
  constants = constantCounter.constants;
  const result = constants.set(`c${tmp6}`, fn2);
  return `c${+constantCounter.constantCounter}`;
}
function newVar(varCounter) {
  varCounter.varCounter = +varCounter.varCounter + 1;
  return "v" + +varCounter.varCounter;
}
function runtimeRun(_zod, value) {
  let INVALID;
  _zod = _zod._zod;
  const obj = { value, issues: [] };
  const runResult = _zod.run(obj, {});
  if (runResult) {
    if (typeof runResult.then === "function") {
      return exports.INVALID;
    }
  }
  if (0 === runResult.issues.length) {
    INVALID = runResult.value;
  } else {
    INVALID = exports.INVALID;
  }
  return INVALID;
}
function compileChild(content, constants, innerType, arg3, flag) {
  let tmp;
  function emitRuntimeIsland(write, varCounter, innerType, arg3) {
    varCounter.definite = false;
    varCounter.varCounter = +varCounter.varCounter + 1;
    const text = `v${tmp2}`;
    const tmp = addConstant(varCounter, innerType);
    write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, runtimeRun) + "(" + tmp + ", " + arg3 + ");");
    write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
    return `v${+varCounter.varCounter}`;
  }
  if (flag === undefined) {
    flag = true;
  }
  size = constants.constants.size;
  try {
    return generateCheck(content, constants, innerType, arg3, flag);
  } catch (tmp10) {
    if (tmp10 instanceof _moduleResult1) {
      if (tmp10.islandable) {
        content.content.length = tmp;
        if (constants.constants.size > size) {
          const _Array = Array;
          constants = constants.constants;
          const arr = Array.from(constants.keys());
          const substr = arr.slice(size);
          for (const item10039 of substr) {
            let constants2 = constants.constants;
            let deleteResult = constants2.delete(item10039);
            continue;
          }
        }
        constants.constantCounter = tmp2;
        constants.varCounter = tmp3;
        return emitRuntimeIsland(content, constants, innerType, arg3);
      }
    }
    throw tmp10;
  }
}
function codePointLengthVar(write, varCounter, arg2, arg3) {
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text = `v${tmp}`;
  write.write("const " + `v${+varCounter.varCounter}` + " = typeof " + arg2 + " === \"string\" && " + arg3 + " ? " + addConstant(varCounter, captureStackTrace.codePointLength) + "(" + arg2 + ") : " + arg2 + ".length;");
  return `v${+varCounter.varCounter}`;
}
function numericOperand(scrollLength, check) {
  if (typeof scrollLength === "number") {
    const _Number = Number;
    if (Number.isFinite(scrollLength)) {
      const _HermesInternal = HermesInternal;
      return "" + scrollLength;
    }
  }
  const tmp = new _moduleResult1("" + check + " bound of type " + typeof scrollLength);
  throw tmp;
}
function generateGreaterThanCheck(write, constantCounter, inclusive, arg3) {
  let combined;
  let str = "<=";
  if (inclusive.inclusive) {
    str = "<";
  }
  const value = inclusive.value;
  write = write.write;
  if (typeof value === "bigint") {
    const _HermesInternal2 = HermesInternal;
    combined = "" + value + "n";
  } else if (typeof value === "number") {
    const _Number2 = Number;
    if (Number.isNaN(value)) {
      const self5 = this;
      const self6 = this;
      const tmp12 = new _moduleResult1("comparison check with NaN bound");
      throw tmp12;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + value;
    }
  } else {
    const _Date = Date;
    if (value instanceof Date) {
      const _Number = Number;
      if (Number.isNaN(value.getTime())) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _moduleResult1("comparison check with Invalid Date bound");
        throw tmp8;
      } else {
        combined = addConstant(constantCounter, value);
      }
    } else {
      const self = this;
      const self2 = this;
      const tmp2 = new _moduleResult1("comparison check bound of type " + typeof value);
      throw tmp2;
    }
  }
  write("if (" + arg3 + " " + str + " " + combined + ") return INVALID;");
}
function generateLessThanCheck(write, constantCounter, inclusive, arg3) {
  let combined;
  let str = ">=";
  if (inclusive.inclusive) {
    str = ">";
  }
  const value = inclusive.value;
  write = write.write;
  if (typeof value === "bigint") {
    const _HermesInternal2 = HermesInternal;
    combined = "" + value + "n";
  } else if (typeof value === "number") {
    const _Number2 = Number;
    if (Number.isNaN(value)) {
      const self5 = this;
      const self6 = this;
      const tmp12 = new _moduleResult1("comparison check with NaN bound");
      throw tmp12;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + value;
    }
  } else {
    const _Date = Date;
    if (value instanceof Date) {
      const _Number = Number;
      if (Number.isNaN(value.getTime())) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _moduleResult1("comparison check with Invalid Date bound");
        throw tmp8;
      } else {
        combined = addConstant(constantCounter, value);
      }
    } else {
      const self = this;
      const self2 = this;
      const tmp2 = new _moduleResult1("comparison check bound of type " + typeof value);
      throw tmp2;
    }
  }
  write("if (" + arg3 + " " + str + " " + combined + ") return INVALID;");
}
function generateMultipleOfCheck(write, constantCounter, value, arg3) {
  if (typeof value.value === "bigint") {
    const _BigInt = BigInt;
    if (value.value === BigInt(0)) {
      const self3 = this;
      const self4 = this;
      const tmp12 = new _moduleResult1("multiple_of check with a zero divisor");
      throw tmp12;
    } else {
      const _HermesInternal4 = HermesInternal;
      write.write("if (" + arg3 + " % " + value.value + "n !== 0n) return INVALID;");
    }
  } else {
    value = value.value;
    const tmp17 = addConstant(constantCounter, captureStackTrace.floatSafeRemainder);
    if (typeof value === "number") {
      const _Number = Number;
      if (Number.isFinite(value)) {
        const _HermesInternal = HermesInternal;
        const _HermesInternal2 = HermesInternal;
        tmp18("if (" + tmp17 + "(" + arg3 + ", " + "" + value + ") !== 0) return INVALID;");
      }
    }
    const _HermesInternal3 = HermesInternal;
    const self = this;
    const self2 = this;
    const tmp6 = new _moduleResult1("" + "multiple_of" + " bound of type " + typeof value);
    throw tmp6;
  }
}
function generateNumberFormatCheck(write, format, arg2) {
  format = format.format;
  if ("safeint" === format) {
    const _HermesInternal6 = HermesInternal;
    write.write("if (!Number.isSafeInteger(" + arg2 + ")) return INVALID;");
  } else if ("int32" === format) {
    const _HermesInternal5 = HermesInternal;
    write.write("if (!Number.isInteger(" + arg2 + ") || " + arg2 + " < -2147483648 || " + arg2 + " > 2147483647) return INVALID;");
  } else if ("uint32" === format) {
    const _HermesInternal4 = HermesInternal;
    write.write("if (!Number.isInteger(" + arg2 + ") || " + arg2 + " < 0 || " + arg2 + " > 4294967295) return INVALID;");
  } else if ("float32" === format) {
    const _HermesInternal3 = HermesInternal;
    write.write("if (!Number.isFinite(" + arg2 + ") || " + arg2 + " < -3.4028234663852886e38 || " + arg2 + " > 3.4028234663852886e38) return INVALID;");
  } else if ("float64" === format) {
    const _HermesInternal2 = HermesInternal;
    write.write("if (!Number.isFinite(" + arg2 + ")) return INVALID;");
  } else {
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const tmp3 = new _moduleResult1("number format " + format);
    throw tmp3;
  }
}
function generateBigIntFormatCheck(write, format, arg2) {
  format = format.format;
  if (format) {
    if ("int64" === format) {
      const _HermesInternal3 = HermesInternal;
      write.write("if (" + arg2 + " < -9223372036854775808n || " + arg2 + " > 9223372036854775807n) return INVALID;");
    } else if ("uint64" === format) {
      const _HermesInternal2 = HermesInternal;
      write.write("if (" + arg2 + " < 0n || " + arg2 + " > 18446744073709551615n) return INVALID;");
    } else {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp5 = new _moduleResult1("bigint format " + format);
      throw tmp5;
    }
  }
}
function generateMimeTypeCheck(write, constantCounter, mime, arg3) {
  mime = mime.mime;
  if (mime) {
    if (mime.length > 0) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const _HermesInternal = HermesInternal;
      set = new Set(mime);
      write.write("if (!" + addConstant(constantCounter, set) + ".has(" + arg3 + ".type)) return INVALID;");
    }
  }
}
function generatePropertiesChecks(write, constantCounter, when, arg3) {
  if (when.when) {
    const self = this;
    const self2 = this;
    const tmp27 = new _moduleResult1("check with a custom \"when\" condition");
    throw tmp27;
  } else {
    const _HermesInternal = HermesInternal;
    write.write("if (" + arg3 + " == null) return INVALID;");
    const shape = when.shape;
    const _Reflect = Reflect;
    const ownKeysResult = Reflect.ownKeys(shape);
    const iter = ownKeysResult[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let escResult;
      let tmp10 = nextResult;
      if (typeof nextResult === "symbol") {
        escResult = addConstant(constantCounter, tmp10);
      } else {
        escResult = captureStackTrace.esc(tmp10);
      }
      let tmp15 = newVar(constantCounter);
      let _HermesInternal2 = HermesInternal;
      let str7 = "const ";
      let str8 = " = ";
      let str9 = "[";
      let str10 = "];";
      let writeResult1 = write.write("const " + tmp15 + " = " + arg3 + "[" + escResult + "];");
      let flag = false;
      let tmp25 = compileChild(write, constantCounter, shape[tmp10], tmp15, false);
      continue;
    }
  }
}
function generatePropertyCheck(write, varCounter, schema, arg3) {
  generateCheck(write, varCounter, schema.schema, "" + arg3 + "[" + JSON.stringify(schema.property) + "]");
}
function generateOverwriteCheck(write, constantCounter, _zod, arg3, arg4) {
  const tx = _zod._zod.def.tx;
  if (tx) {
    let tmp4 = typeof tx === "function";
    if (typeof tx === "function") {
      let tmp6 = "AsyncFunction" === tx.constructor.name;
      if (!tmp6) {
        const _Symbol = Symbol;
        tmp6 = "AsyncFunction" === tx[Symbol.toStringTag];
      }
      tmp4 = tmp6;
    }
    if (tmp4) {
      const self3 = this;
      const self4 = this;
      const tmp16 = new map1("z.compile: async overwrite transforms are not supported");
      throw tmp16;
    } else {
      const _HermesInternal = HermesInternal;
      write.write("const " + arg4 + " = " + addConstant(constantCounter, tx) + "(" + arg3 + ");");
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp2 = new _moduleResult1("overwrite check without a transform function");
    throw tmp2;
  }
}
function throwAsync() {
  const ZodAsyncError = new NEVER.$ZodAsyncError();
  throw ZodAsyncError;
}
function pushIssue(arg0) {
  const issues = this.issues;
  issues.push(arg0);
}
function generateCustomRefineCheck(write, varCounter, _zod, arg3) {
  const def = _zod._zod.def;
  if (def.fn) {
    let tmp18 = typeof fn === "function";
    if (typeof def.fn === "function") {
      let tmp20 = "AsyncFunction" === fn.constructor.name;
      if (!tmp20) {
        const _Symbol2 = Symbol;
        tmp20 = "AsyncFunction" === fn[Symbol.toStringTag];
      }
      tmp18 = tmp20;
    }
    if (tmp18) {
      const self5 = this;
      const self6 = this;
      const tmp36 = new closure_13("z.compile: async .refine() predicates are not supported");
      throw tmp36;
    } else {
      varCounter.definite = false;
      const tmp22 = addConstant(varCounter, def.fn);
      varCounter.varCounter = +varCounter.varCounter + 1;
      const text = `v${tmp25}`;
      const _HermesInternal3 = HermesInternal;
      const tmp24 = addConstant(varCounter, throwAsync);
      write.write("const " + `v${+varCounter.varCounter}` + " = " + tmp22 + "(" + arg3 + ");");
      const _HermesInternal4 = HermesInternal;
      write.write("if (" + `v${+varCounter.varCounter}` + " instanceof Promise) " + tmp24 + "();");
      const _HermesInternal5 = HermesInternal;
      write.write("if (!" + `v${+varCounter.varCounter}` + ") return INVALID;");
      return arg3;
    }
  } else if (_zod._zod.check) {
    const check = _zod._zod.check;
    let tmp4 = typeof check === "function";
    if (typeof check === "function") {
      let tmp6 = "AsyncFunction" === check.constructor.name;
      if (!tmp6) {
        const _Symbol = Symbol;
        tmp6 = "AsyncFunction" === check[Symbol.toStringTag];
      }
      tmp4 = tmp6;
    }
    if (tmp4) {
      const self3 = this;
      const self4 = this;
      const tmp16 = new closure_13("z.compile: async .superRefine() / check functions are not supported");
      throw tmp16;
    } else {
      const check2 = _zod._zod.check;
      varCounter.definite = false;
      varCounter.varCounter = +varCounter.varCounter + 1;
      const text1 = `v${tmp8}`;
      const _HermesInternal = HermesInternal;
      write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, function(value) {
        const obj = { value, issues: [], addIssue: pushIssue };
        if (check2(obj) instanceof Promise) {
          const self = this;
          const self2 = this;
          const ZodAsyncError = new NEVER.$ZodAsyncError();
          throw ZodAsyncError;
        } else {
          let INVALID;
          if (0 === obj.issues.length) {
            INVALID = obj.value;
          } else {
            INVALID = exports.INVALID;
          }
          return INVALID;
        }
      }) + "(" + arg3 + ");");
      const _HermesInternal2 = HermesInternal;
      write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
      return `v${+varCounter.varCounter}`;
    }
  } else {
    let self = this;
    let self2 = this;
    const tmp2 = new _moduleResult1("custom check without a predicate or check function");
    throw tmp2;
  }
}
function generateStringFormatCheck(write, varCounter, def12, arg3, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const format = def12.format;
  if ("base64" === format) {
    const _HermesInternal25 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, $ZodType.isValidBase64) + "(" + arg3 + ")) return INVALID;");
    return arg3;
  } else if ("base64url" === format) {
    const _HermesInternal24 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, $ZodType.isValidBase64URL) + "(" + arg3 + ")) return INVALID;");
    return arg3;
  } else if ("jwt" === format) {
    let alg = def12.alg;
    const tmp104 = addConstant;
    const tmp107 = addConstant(varCounter, $ZodType.isValidJWT);
    if (alg == null) {
      alg = null;
    }
    const _HermesInternal23 = HermesInternal;
    write.write("if (!" + tmp107 + "(" + arg3 + ", " + tmp104(varCounter, alg) + ")) return INVALID;");
    return arg3;
  } else if ("ipv6" === format) {
    const _HermesInternal22 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, $ZodType.isValidIPv6) + "(" + arg3 + ")) return INVALID;");
    return arg3;
  } else if ("cidrv6" === format) {
    const _HermesInternal21 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, $ZodType.isValidCIDRv6) + "(" + arg3 + ")) return INVALID;");
    return arg3;
  } else if ("credit_card" === format) {
    const _HermesInternal20 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, $ZodType.isValidCreditCard) + "(" + arg3 + ")) return INVALID;");
    return arg3;
  } else if ("iban" === format) {
    const _HermesInternal19 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, $ZodType.isValidIBAN) + "(" + arg3 + ")) return INVALID;");
    return arg3;
  } else {
    if ("url" !== format) {
      if ("httpurl" !== format) {
        if (!def12.normalize) {
          if (undefined === def12.hostname) {
            if (undefined === def12.protocol) {
              if (def12.fn) {
                let tmp36 = typeof fn === "function";
                if (typeof def12.fn === "function") {
                  let tmp38 = "AsyncFunction" === fn.constructor.name;
                  if (!tmp38) {
                    const _Symbol = Symbol;
                    tmp38 = "AsyncFunction" === fn[Symbol.toStringTag];
                  }
                  tmp36 = tmp38;
                }
                if (tmp36) {
                  const _HermesInternal10 = HermesInternal;
                  const self5 = this;
                  const self6 = this;
                  const tmp45 = new _moduleResult1("async string format " + format);
                  throw tmp45;
                } else {
                  const _HermesInternal9 = HermesInternal;
                  write.write("if (!" + addConstant(varCounter, def12.fn) + "(" + arg3 + ")) return INVALID;");
                  return arg3;
                }
              } else {
                if (set1.has(format)) {
                  if (def12.pattern) {
                    const tmp30 = addConstant(varCounter, def12.pattern);
                    const _HermesInternal7 = HermesInternal;
                    write.write("" + tmp30 + ".lastIndex = 0;");
                    const _HermesInternal8 = HermesInternal;
                    write.write("if (!" + tmp30 + ".test(" + arg3 + ")) return INVALID;");
                    return arg3;
                  }
                }
                const format2 = def12.format;
                if ("regex" === format2) {
                  const self3 = this;
                  const self4 = this;
                  const tmp27 = new _moduleResult1("regex format without a pattern");
                  throw tmp27;
                } else {
                  if ("lowercase" === format2) {
                    const _HermesInternal6 = HermesInternal;
                    write.write("if (" + arg3 + " !== " + arg3 + ".toLowerCase()) return INVALID;");
                  } else if ("uppercase" === format2) {
                    const _HermesInternal5 = HermesInternal;
                    write.write("if (" + arg3 + " !== " + arg3 + ".toUpperCase()) return INVALID;");
                  } else if ("includes" === format2) {
                    const _HermesInternal4 = HermesInternal;
                    write.write("if (!" + arg3 + ".includes(" + captureStackTrace.esc(def12.includes) + ")) return INVALID;");
                  } else if ("starts_with" === format2) {
                    const prefix = def12.prefix;
                    const _HermesInternal3 = HermesInternal;
                    write.write("if (" + arg3 + ".slice(0, " + prefix.length + ") !== " + captureStackTrace.esc(prefix) + ") return INVALID;");
                  } else if ("ends_with" === format2) {
                    const suffix = def12.suffix;
                    const _HermesInternal2 = HermesInternal;
                    write.write("if (" + arg3 + ".slice(-" + suffix.length + ") !== " + captureStackTrace.esc(suffix) + ") return INVALID;");
                  } else {
                    const _HermesInternal = HermesInternal;
                    const self = this;
                    const self2 = this;
                    const tmp4 = new _moduleResult1("string format " + format2);
                    throw tmp4;
                  }
                  return arg3;
                }
              }
            }
          }
        }
      }
    }
    const tmp50 = addConstant(varCounter, $ZodType.validateURL);
    const tmp51 = addConstant(varCounter, def12);
    varCounter.varCounter = +varCounter.varCounter + 1;
    const text = `v${tmp52}`;
    varCounter.varCounter = +varCounter.varCounter + 1;
    const text1 = `v${tmp54}`;
    const _HermesInternal11 = HermesInternal;
    write.write("const " + `v${+varCounter.varCounter}` + " = " + arg3 + ".trim();");
    const _HermesInternal12 = HermesInternal;
    write.write("const " + `v${+varCounter.varCounter}` + " = " + tmp50 + "(" + `v${+varCounter.varCounter}` + ", " + tmp51 + ");");
    const _HermesInternal13 = HermesInternal;
    write.write("if (typeof " + `v${+varCounter.varCounter}` + " === \"number\") return INVALID;");
    if (undefined !== def12.hostname) {
      const _HermesInternal14 = HermesInternal;
      write.write("if (!" + addConstant(varCounter, $ZodType.urlHostnameOk) + "(" + `v${+varCounter.varCounter}` + ", " + tmp51 + ".hostname)) return INVALID;");
    }
    if (undefined !== def12.protocol) {
      const _HermesInternal15 = HermesInternal;
      write.write("if (!" + addConstant(varCounter, $ZodType.urlProtocolOk) + "(" + text1 + ", " + tmp51 + ".protocol)) return INVALID;");
    }
    if (flag) {
      let combined;
      varCounter.varCounter = +varCounter.varCounter + 1;
      if (def12.normalize) {
        const _HermesInternal17 = HermesInternal;
        combined = "" + text1 + ".href";
      } else {
        const _HermesInternal16 = HermesInternal;
        combined = "" + tmp47(varCounter, tmp48(12163).stripTabAndNewline) + "(" + text + ")";
      }
      const text2 = `v${tmp73}`;
      const _HermesInternal18 = HermesInternal;
      write.write("const " + `v${+varCounter.varCounter}` + " = " + combined + ";");
      return `v${+varCounter.varCounter}`;
    } else {
      return null;
    }
  }
}
function generateCheck(write, varCounter, innerType, arg3, flag) {
  let addIssue;
  let items;
  function generateObjectCheck(write, varCounter, _zod, arg3, flag) {
    let closure_2 = arg3;
    if (flag === undefined) {
      flag = true;
    }
    let keyExpr;
    let propKey;
    map = undefined;
    closure_8 = undefined;
    let catchall;
    let str6;
    let closure_11;
    closure_12 = undefined;
    let closure_13;
    let closure_14;
    const def = _zod._zod.def;
    const writeResult = write.write("if (typeof " + arg3 + " !== \"object\" || " + arg3 + " === null || Array.isArray(" + arg3 + ")) return INVALID;");
    const shape = def.shape;
    const keys = Object.keys(shape);
    const ownPropertySymbols = Object.getOwnPropertySymbols(shape);
    let arr3 = keys;
    if (ownPropertySymbols.length) {
      const items = [];
      const tmp2 = items;
      let tmp3 = keys;
      const tmp5 = ownPropertySymbols;
      HermesBuiltin.arraySpread(items, ownPropertySymbols, HermesBuiltin.arraySpread(items, keys, 0));
      arr3 = items;
    }
    keyExpr = function keyExpr(nextResult) {
      let escResult;
      if (typeof nextResult === "symbol") {
        escResult = addConstant(varCounter, nextResult);
      } else {
        escResult = captureStackTrace.esc(nextResult);
      }
      return escResult;
    };
    propKey = function propKey(arg0) {

    };
    if (keys.includes("__proto__")) {
      const self7 = this;
      const self8 = this;
      const tmp71 = new closure_14("object shape key \"__proto__\"");
      throw tmp71;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const tmp7 = map;
      function _loop() {
        let closure_0;
        write = tmp2;
        if (typeof keyExpr === "function") {
          let escResult;
          let text1;
          if (typeof closure_8 === "symbol") {
            escResult = closure_1_17(varCounter, tmp);
          } else {
            escResult = closure_11.esc(tmp);
          }
          varCounter = escResult;
          varCounter.varCounter = +varCounter.varCounter + 1;
          const text = `v${tmp7}`;
          closure_2 = text;
          const _HermesInternal = HermesInternal;
          write.write("const " + `v${tmp7}` + " = " + closure_2 + "[" + escResult + "];");
          if (undefined !== shape[closure_8]._zod.optin) {
            varCounter.varCounter = +varCounter.varCounter + 1;
            text1 = `v${tmp29}`;
            const _HermesInternal3 = HermesInternal;
            obj.write("let " + `v${tmp29}` + " = (() => {");
            write.indented((write) => {
              write.write("return " + compileChild(write, varCounter, closure_0, closure_2) + ";");
            });
            write.write("})();");
            if ("optional" === shape[closure_8]._zod.optout) {
              const _HermesInternal5 = HermesInternal;
              write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) {");
              write.indented((write) => {
                write.write("if (" + escResult + " in " + closure_2 + ") return INVALID;");
                write.write("" + text1 + " = undefined;");
              });
              write.write("}");
            } else {
              const _HermesInternal4 = HermesInternal;
              write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
            }
            const result = map.set(tmp, text1);
          } else {
            const tmp17 = undefined === tmp2._zod.optin && closure_1_39(tmp2);
            if (tmp17) {
              const _HermesInternal2 = HermesInternal;
              write.write("if (!(" + tmp15 + " in " + closure_2 + ")) return INVALID;");
            }
            const tmp27 = closure_1_20(write, varCounter, shape[closure_8], text, text1);
            if (null !== tmp27) {
              const result1 = map.set(tmp, tmp27);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const iter = arr3[Symbol.iterator]();
      const tmp10 = iter;
      while (iter !== undefined) {
        closure_8 = iter.next();
        let _loopResult = _loop();
        continue;
      }
      catchall = def.catchall;
      str6 = "none";
      let str2 = "none";
      if (catchall) {
        const type = catchall._zod.def.type;
        if ("never" === type) {
          const mapped = keys.map((item) => "k !== " + closure_11.esc(item));
          closure_11 = mapped.join(" && ") || "true";
          let _HermesInternal = HermesInternal;
          const tmp14 = mapped.join(" && ") || "true";
          const writeResult1 = write.write("for (const k in " + arg3 + ") {");
          write.indented((write) => {
            write.write("if (" + closure_11 + ") return INVALID;");
          });
          write.write("}");
          str2 = "none";
        } else {
          if ("unknown" === type) {
            const checks = catchall._zod.def.checks;
            str6 = "passthrough";
            str2 = str6;
          }
          str6 = "schema";
        }
      }
      const tmp19 = closure_18(varCounter);
      closure_12 = tmp19;
      if (flag) {
        if (arr3.some((item) => {
          let tmp3 = "defaulted" !== tmp2._zod.optin;
          if (!tmp3) {
            tmp3 = "optional" === tmp2._zod.optout;
          }
          if (tmp3) {
            tmp3 = mayOutputUndefined(tmp2);
          }
          if (!tmp3) {
            tmp3 = "optional" === tmp[item]._zod.optin && "optional" === tmp[item]._zod.optout;
          }
          return tmp3;
        })) {
          let _HermesInternal4 = HermesInternal;
          write.write("const " + tmp19 + " = {};");
          const iter2 = arr3[Symbol.iterator]();
          const nextResult = iter2.next();
          while (iter2 !== undefined) {
            let tmp36 = nextResult;
            let keyExprResult = keyExpr(nextResult);
            let value = map.get(nextResult);
            if (closure_40(shape[nextResult])) {
              let _HermesInternal7 = HermesInternal;
              let str40 = "if (";
              let str41 = " in ";
              let str42 = ") ";
              let str43 = "[";
              let str44 = "] = ";
              let str45 = ";";
              let writeResult4 = write.write("if (" + keyExprResult + " in " + arg3 + ") " + tmp19 + "[" + keyExprResult + "] = " + value + ";");
            } else {
              write = write.write;
              if (closure_41(shape[tmp36])) {
                let _HermesInternal6 = HermesInternal;
                let str33 = "if (";
                let str34 = " !== undefined || ";
                let str35 = " in ";
                let str36 = ") ";
                let str37 = "[";
                let str38 = "] = ";
                let str39 = ";";
                let writeResult5 = write("if (" + value + " !== undefined || " + keyExprResult + " in " + arg3 + ") " + tmp19 + "[" + keyExprResult + "] = " + value + ";");
              } else {
                let _HermesInternal5 = HermesInternal;
                let str29 = "";
                let str30 = "[";
                let str31 = "] = ";
                let str32 = ";";
                let writeResult6 = write("" + tmp19 + "[" + keyExprResult + "] = " + value + ";");
              }
            }
            continue;
          }
        } else {
          const mapped1 = arr3.map((item) => {
            if (typeof propKey === "function") {
              let combined;
              if (typeof item === "symbol") {
                if (typeof keyExpr === "function") {
                  let escResult;
                  if (typeof item === "symbol") {
                    escResult = addConstant(varCounter, item);
                  } else {
                    escResult = captureStackTrace.esc(item);
                  }
                  const _HermesInternal = HermesInternal;
                  combined = "[" + escResult + "]";
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                combined = captureStackTrace.esc(item);
              }
              const _HermesInternal2 = HermesInternal;
              return "" + combined + ": " + map.get(item);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          let _HermesInternal3 = HermesInternal;
          const tmp29 = tmp19;
          write.write("const " + tmp19 + " = { " + mapped1.join(", ") + " };");
        }
        if ("none" !== str2) {
          let tmp66 = null;
          if (keys.length > 0) {
            const _Set2 = Set;
            const self5 = this;
            const self6 = this;
            set = new Set(keys);
            tmp66 = closure_17(varCounter, set);
          }
          closure_14 = tmp66;
          const _HermesInternal8 = HermesInternal;
          write.write("for (const k in " + arg3 + ") {");
          write.indented((write) => {
            write.write("if (k === \"__proto__\") continue;");
            if (closure_14) {
              const _HermesInternal = HermesInternal;
              write.write("if (" + tmp2 + ".has(k)) continue;");
            }
            if ("passthrough" === str6) {
              const _HermesInternal2 = HermesInternal;
              write.write("" + closure_12 + "[k] = " + closure_2 + "[k];");
            } else {
              varCounter.varCounter = +varCounter.varCounter + 1;
              const text = `v${tmp10}`;
              const _HermesInternal3 = HermesInternal;
              write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_2 + "[k];");
              const _HermesInternal4 = HermesInternal;
              write.write("" + closure_12 + "[k] = " + compileChild(write, varCounter, catchall, `v${+varCounter.varCounter}`) + ";");
            }
          });
          write.write("}");
        }
        return tmp19;
      } else {
        if ("schema" === str2) {
          let tmp24 = null;
          if (keys.length > 0) {
            const _Set = Set;
            const self3 = this;
            const self4 = this;
            set1 = new Set(keys);
            tmp24 = closure_17(varCounter, set1);
          }
          closure_13 = tmp24;
          let _HermesInternal2 = HermesInternal;
          write.write("for (const k in " + arg3 + ") {");
          write.indented((write) => {
            write.write("if (k === \"__proto__\") continue;");
            if (closure_13) {
              const _HermesInternal = HermesInternal;
              write.write("if (" + tmp2 + ".has(k)) continue;");
            }
            varCounter.varCounter = +varCounter.varCounter + 1;
            const text = `v${tmp5}`;
            write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_2 + "[k];");
            compileChild(write, varCounter, catchall, `v${+varCounter.varCounter}`, false);
          });
          write.write("}");
        }
        return null;
      }
    }
  }
  function generateRecordCheck(write, varCounter, _zod, arg3) {
    let closure_10;
    closure_1 = arg3;
    const def = _zod._zod.def;
    write.write("if (!" + closure_17(varCounter, closure_11.isPlainObject) + "(" + arg3 + ")) return INVALID;");
    const tmp6 = closure_18(varCounter);
    let closure_3 = tmp6;
    const tmp7 = closure_18(varCounter);
    closure_4 = tmp7;
    closure_5 = closure_18(varCounter);
    write.write("const " + tmp6 + " = {};");
    let values;
    const tmp5 = closure_18;
    if (!def.partial) {
      values = def.keyType._zod.values;
    }
    if (values) {
      const items = [];
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let str1;
        let str11 = nextResult;
        if (typeof nextResult !== "string") {
          if (typeof str11 !== "number") {
            if (typeof str11 !== "symbol") {
              let _String = String;
              let _HermesInternal = HermesInternal;
              let str13 = "record key value ";
              let self3 = this;
              let self4 = this;
              let tmp40 = new closure_14("record key value " + String(nextResult));
              throw tmp40;
            }
          }
        }
        if (typeof str11 === "number") {
          str1 = str11.toString();
        } else {
          str1 = nextResult;
        }
        let tmp35 = str1;
        if ("__proto__" === str1) {
          let self = this;
          let str12 = "record key \"__proto__\"";
          let self2 = this;
          let tmp37 = new closure_14("record key \"__proto__\"");
          throw tmp37;
        } else {
          let arr = items.push(tmp35);
          let tmp62 = closure_38(write, varCounter, def.keyType, closure_17(varCounter, str11));
          let tmp65 = closure_18(varCounter);
          let _HermesInternal3 = HermesInternal;
          let str18 = "const ";
          let str19 = " = ";
          let str20 = "[";
          let str21 = "];";
          let writeResult2 = write.write("const " + tmp65 + " = " + arg3 + "[" + closure_45(varCounter, tmp35) + "];");
          let _HermesInternal4 = HermesInternal;
          let str22 = "";
          let str23 = "[";
          let str24 = "] = ";
          let str25 = ";";
          let writeResult3 = write.write("" + tmp6 + "[" + tmp62 + "] = " + closure_20(write, varCounter, def.valueType, tmp65) + ";");
          continue;
        }
      }
      const _Set = Set;
      const self5 = this;
      const self6 = this;
      set = new Set(items);
      let closure_7 = closure_17(varCounter, set);
      let _HermesInternal2 = HermesInternal;
      write.write("for (const " + tmp7 + " in " + arg3 + ") {");
      write.indented((write) => {
        write.write("if (" + closure_7 + ".has(" + closure_4 + ")) continue;");
        if ("loose" === def.mode) {
          const _HermesInternal = HermesInternal;
          write.write("if (" + closure_4 + " !== \"__proto__\") " + closure_3 + "[" + closure_4 + "] = " + closure_1 + "[" + closure_4 + "];");
        } else {
          write.write("return INVALID;");
        }
      });
      write.write("}");
      return tmp6;
    } else {
      def2 = def.keyType._zod.def;
      if ("string" === def2.type) {
        if (undefined === def2.format) {
          if (!def2.coerce) {
            const checks = def2.checks;
            let num;
            if (checks != null) {
              num = checks.length;
            }
            if (num == null) {
              num = 0;
            }
            if (0 === num) {
              const tmp13 = varCounter;
              closure_44(write, varCounter, arg3, tmp7, (write) => {
                write.write("const " + closure_5 + " = " + closure_1 + "[" + closure_4 + "];");
                write.write("" + closure_3 + "[" + closure_4 + "] = " + compileChild(write, varCounter, def.valueType, closure_5) + ";");
              }, "return INVALID;");
              return tmp6;
            }
          }
        }
      }
      closure_8 = "loose" === def.mode;
      const tmp18 = closure_16(def.keyType);
      if (false === tmp18.definite) {
        varCounter.definite = false;
      }
      closure_9 = tmp2(varCounter, tmp18);
      number = tmp2(varCounter, number.number);
      closure_11 = tmp5(varCounter);
      closure_44(write, varCounter, arg3, tmp7, (write) => {
        write.write("let " + closure_11 + " = " + closure_9 + "(" + closure_4 + ");");
        write.write("if (" + closure_11 + " === INVALID && typeof " + closure_4 + " === \"string\" && " + closure_10 + ".test(" + closure_4 + ")) " + closure_11 + " = " + closure_9 + "(Number(" + closure_4 + "));");
        write = write.write;
        if (closure_8) {
          const _HermesInternal2 = HermesInternal;
          write("if (" + closure_11 + " === INVALID) { " + closure_3 + "[" + closure_4 + "] = " + closure_1 + "[" + closure_4 + "]; continue; }");
        } else {
          const _HermesInternal = HermesInternal;
          write("if (" + closure_11 + " === INVALID) return INVALID;");
        }
        write.write("if (" + closure_11 + " === \"__proto__\") continue;");
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text = `v${tmp13}`;
        write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_1 + "[" + closure_4 + "];");
        write.write("" + closure_3 + "[" + closure_11 + "] = " + compileChild(write, varCounter, def.valueType, `v${+varCounter.varCounter}`) + ";");
      });
      return tmp6;
    }
  }
  function generateChecks(write, varCounter, _zod, arg3) {
    const checks = _zod._zod.def.checks;
    if (checks) {
      if (0 !== checks.length) {
        let tmp20 = arg3;
        const iter = checks[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp4 = nextResult;
          let def = nextResult._zod.def;
          let arr2 = def;
          if (def.when) {
            if (!set.has(arr2.check)) {
              let self = this;
              let str = "check with a custom \"when\" condition";
              let self2 = this;
              let tmp8 = new _moduleResult1("check with a custom \"when\" condition");
              throw tmp8;
            }
          }
          switch (arr2.check) {
            case "greater_than":
            {
              let tmp125 = generateGreaterThanCheck(write, varCounter, arr2, tmp20);
              continue;
              break;
            }
            case "less_than":
            {
              let tmp119 = generateLessThanCheck(write, varCounter, arr2, tmp20);
              break;
            }
            case "multiple_of":
            {
              let tmp113 = generateMultipleOfCheck(write, varCounter, arr2, tmp20);
              break;
            }
            case "number_format":
            {
              let tmp107 = generateNumberFormatCheck(write, arr2, tmp20);
              break;
            }
            case "min_length":
            {
              let tmp93 = numericOperand(arr2.minimum, "min_length");
              let _HermesInternal8 = HermesInternal;
              let str21 = "";
              let str22 = ".length >= ";
              let str23 = " && ";
              let str24 = ".length < ";
              let _HermesInternal9 = HermesInternal;
              let str25 = "if (";
              let str26 = " < ";
              let str27 = ") return INVALID;";
              let writeResult = write.write("if (" + codePointLengthVar(write, varCounter, tmp20, "" + tmp20 + ".length >= " + tmp93 + " && " + tmp20 + ".length < " + 2 * arr2.minimum) + " < " + tmp93 + ") return INVALID;");
              break;
            }
            case "max_length":
            {
              let tmp83 = numericOperand(arr2.maximum, "max_length");
              let _HermesInternal6 = HermesInternal;
              let _HermesInternal7 = HermesInternal;
              let str18 = "if (";
              let str19 = " > ";
              let str20 = ") return INVALID;";
              let writeResult1 = write.write("if (" + codePointLengthVar(write, varCounter, tmp20, "" + tmp20 + ".length > " + tmp83) + " > " + tmp83 + ") return INVALID;");
              break;
            }
            case "length_equals":
            {
              let tmp70 = numericOperand(arr2.length, "length_equals");
              let _HermesInternal4 = HermesInternal;
              let str11 = "";
              let str12 = ".length >= ";
              let str13 = " && ";
              let str14 = ".length <= ";
              let _HermesInternal5 = HermesInternal;
              let str15 = "if (";
              let str16 = " !== ";
              let str17 = ") return INVALID;";
              let writeResult2 = write.write("if (" + codePointLengthVar(write, varCounter, tmp20, "" + tmp20 + ".length >= " + tmp70 + " && " + tmp20 + ".length <= " + 2 * arr2.length) + " !== " + tmp70 + ") return INVALID;");
              break;
            }
            case "min_size":
            {
              let _HermesInternal3 = HermesInternal;
              let str8 = "if (";
              let str9 = ".size < ";
              let str10 = ") return INVALID;";
              let writeResult3 = write.write("if (" + tmp20 + ".size < " + numericOperand(arr2.minimum, "min_size") + ") return INVALID;");
              break;
            }
            case "max_size":
            {
              let _HermesInternal2 = HermesInternal;
              let str5 = "if (";
              let str6 = ".size > ";
              let str7 = ") return INVALID;";
              let writeResult4 = write.write("if (" + tmp20 + ".size > " + numericOperand(arr2.maximum, "max_size") + ") return INVALID;");
              break;
            }
            case "size_equals":
            {
              let _HermesInternal = HermesInternal;
              let str2 = "if (";
              let str3 = ".size !== ";
              let str4 = ") return INVALID;";
              let writeResult5 = write.write("if (" + tmp20 + ".size !== " + numericOperand(arr2.size, "size_equals") + ") return INVALID;");
              break;
            }
            case "string_format":
            {
              tmp20 = generateStringFormatCheck(write, varCounter, arr2, tmp20);
              break;
            }
            case "custom":
            {
              tmp20 = generateCustomRefineCheck(write, varCounter, tmp4, tmp20);
              break;
            }
            case "bigint_format":
            {
              let tmp42 = generateBigIntFormatCheck(write, arr2, tmp20);
              break;
            }
            case "mime_type":
            {
              let tmp38 = generateMimeTypeCheck(write, varCounter, arr2, tmp20);
              break;
            }
            case "property":
            {
              let tmp32 = generatePropertyCheck(write, varCounter, arr2, tmp20);
              break;
            }
            case "properties":
            {
              let tmp26 = generatePropertiesChecks(write, varCounter, arr2, tmp20);
              break;
            }
            case "overwrite":
            {
              let tmp12 = newVar(varCounter);
              let tmp19 = generateOverwriteCheck(write, varCounter, tmp4, tmp20, tmp12);
              tmp20 = tmp12;
              break;
            }
            default:
            {
              let _HermesInternal10 = HermesInternal;
              let str28 = "check type ";
              let self3 = this;
              let self4 = this;
              let tmp127 = new _moduleResult1("check type " + def.check);
              throw tmp127;
            }
          }
        }
        return tmp20;
      }
    }
    return arg3;
  }
  const f132091 = () => _zod._zod.def.defaultValue;
  const f132092 = (write) => {
    write.write("" + text7 + " = " + closure_6 + "(" + closure_5 + "());");
  };
  const f132093 = (write) => {
    const tmp = generateCheck(write, closure_0, def8.innerType, closure_2);
    write.write("" + text7 + " = " + tmp + " === undefined ? " + closure_6 + "(" + closure_5 + "()) : " + tmp + ";");
  };
  const f132094 = (write) => {
    write.write("" + text7 + " = " + generateCheck(write, closure_0, def8.innerType, closure_2) + ";");
  };
  function generateDiscriminatedUnionCheck(write, varCounter, def7, arg3) {
    function _loop4(item10009) {
      write = item10009;
      const propValues = item10009._zod.propValues;
      let tmp;
      if (propValues != null) {
        const tmp2 = def7;
        tmp = propValues[def7.discriminator];
      }
      if (tmp) {
        if (0 !== tmp.size) {
          let tmp19 = tmp;
          for (const item10013 of tmp) {
            let obj = set;
            let tmp4 = item10013;
            if (set.has(item10013)) {
              let tmp8 = globalThis;
              let _String = String;
              let _HermesInternal = HermesInternal;
              let str = "duplicate discriminator value ";
              let self = this;
              let self2 = this;
              let tmp9 = new closure_1_14("duplicate discriminator value " + String(item10013));
              throw tmp9;
            } else {
              let addResult = obj.add(tmp4);
              continue;
            }
          }
          const _Array = Array;
          let str2 = "else if";
          const arr = Array.from(tmp, function(discriminator) {
            let combined;
            if (typeof discriminator === "string") {
              const _HermesInternal7 = HermesInternal;
              combined = "" + tmp2 + " === " + closure_2_11.esc(discriminator);
            } else if (typeof discriminator === "number") {
              let combined1;
              const _Number = Number;
              const _HermesInternal6 = HermesInternal;
              if (Number.isNaN(discriminator)) {
                combined1 = concat(tmp2, ")");
              } else {
                combined1 = concat(tmp2, " === ", discriminator);
              }
              combined = combined1;
            } else if (typeof discriminator === "boolean") {
              const _HermesInternal5 = HermesInternal;
              combined = "" + tmp2 + " === " + discriminator;
            } else if (null === discriminator) {
              const _HermesInternal4 = HermesInternal;
              combined = "" + tmp2 + " === null";
            } else if (undefined === discriminator) {
              const _HermesInternal3 = HermesInternal;
              combined = "" + tmp2 + " === undefined";
            } else if (typeof discriminator === "bigint") {
              const _HermesInternal2 = HermesInternal;
              combined = "" + tmp2 + " === " + discriminator + "n";
            } else if (typeof discriminator === "symbol") {
              const _HermesInternal = HermesInternal;
              combined = "" + tmp2 + " === " + closure_2_17(tmp, discriminator);
            } else {
              const _String = String;
              const _HermesInternal8 = HermesInternal;
              const self = this;
              const self2 = this;
              const tmp19 = new closure_2_14("literal discriminator value " + String(discriminator));
              throw tmp19;
            }
            return combined;
          });
          if (c6) {
            str2 = "if";
          }
          let _HermesInternal2 = HermesInternal;
          write.write("" + str2 + " (" + arr.join(" || ") + ") {");
          write.indented((write) => {
            write.write("" + closure_5 + " = " + generateCheck(write, varCounter, item10009, closure_3) + ";");
          });
          write.write("}");
          c6 = false;
        }
      }
      const tmp18 = new closure_1_14("discriminated union option without static discriminator values");
      throw tmp18;
    }
    closure_1 = varCounter;
    let closure_3 = arg3;
    if (def7.unionFallback) {
      let tmp5 = closure_14;
      let self = this;
      const str3 = "discriminated union with unionFallback";
      let self2 = this;
      const tmp6 = new closure_14("discriminated union with unionFallback");
      let tmp7 = tmp6;
      throw tmp6;
    } else if (0 === def7.options.length) {
      let str2 = "return INVALID;";
      const writeResult = write.write("return INVALID;");
      return arg3;
    } else {
      let tmp8 = closure_18;
      let tmp9 = closure_18(varCounter);
      closure_4 = tmp9;
      let tmp10 = closure_18(varCounter);
      closure_5 = tmp10;
      const tmp12 = globalThis;
      let _HermesInternal = HermesInternal;
      const str4 = "];";
      const str5 = "?.[";
      const str6 = " = ";
      const str7 = "const ";
      write.write("const " + tmp9 + " = " + arg3 + "?.[" + closure_11.esc(def7.discriminator) + "];");
      let _HermesInternal2 = HermesInternal;
      write.write("let " + tmp10 + ";");
      let c6 = true;
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
      let tmp18 = set;
      const options = def7.options;
      let tmp19 = options;
      let tmp = options;
      for (const item10009 of options) {
        let tmp2 = _loop4(item10009);
        continue;
      }
      let str = "else { return INVALID; }";
      write.write("else { return INVALID; }");
      return tmp10;
    }
  }
  if (flag === undefined) {
    flag = true;
  }
  let def = innerType._zod.def;
  let type = def.type;
  if (def.coerce) {
    const _HermesInternal83 = HermesInternal;
    const self27 = this;
    const self28 = this;
    const tmp448 = new _moduleResult1("coercion (z.coerce." + type + "())");
    throw tmp448;
  } else {
    let def2;
    let def8;
    let ownPropertyDescriptor;
    let fn2;
    let tmp261;
    let tmp262;
    let sum;
    let write6;
    let combined;
    let write7;
    let combined1;
    let tmp243;
    let tmp464;
    let sum1;
    let text7;
    let tmp245;
    let tmp247;
    let write4;
    let combined2;
    let write5;
    let combined3;
    let fn4;
    let fn5;
    let write2;
    let combined4;
    let write3;
    let combined5;
    let fn3;
    let transform;
    let transform2;
    if (!flag) {
      let checks = def.checks;
      let tmp = null;
      let length;
      if (checks != null) {
        length = checks.length;
      }
      flag = length;
    }
    let tmp3 = write;
    let tmp4 = varCounter;
    let tmp5 = arg3;
    let str = arg3;
    switch (type) {
      case "string":
      {
        if (flag === undefined) {
          flag = true;
        }
        const _HermesInternal81 = HermesInternal;
        let writeResult = write.write("if (typeof " + arg3 + " !== \"string\") return INVALID;");
        const def12 = innerType._zod.def;
        let tmp430 = arg3;
        if (undefined !== def12.format) {
          tmp430 = generateStringFormatCheck(write, varCounter, def12, arg3, flag);
        }
        str = tmp430;
        let tmp437 = null;
        if (null !== str) {
          tmp437 = generateChecks(write, varCounter, innerType, str);
        }
        return tmp437;
      }
      case "number":
      {
        const _HermesInternal74 = HermesInternal;
        let writeResult1 = write.write("if (typeof " + arg3 + " !== \"number\" || !Number.isFinite(" + arg3 + ")) return INVALID;");
        const def11 = innerType._zod.def;
        const format2 = "number_format" === def11.check && def11.format;
        str = arg3;
        if (format2) {
          const format3 = def11.format;
          if ("safeint" === format3) {
            const _HermesInternal80 = HermesInternal;
            let writeResult2 = write.write("if (!Number.isSafeInteger(" + arg3 + ")) return INVALID;");
            str = arg3;
          } else if ("int32" === format3) {
            const _HermesInternal79 = HermesInternal;
            let writeResult3 = write.write("if (!Number.isInteger(" + arg3 + ") || " + arg3 + " < -2147483648 || " + arg3 + " > 2147483647) return INVALID;");
            str = arg3;
          } else if ("uint32" === format3) {
            const _HermesInternal78 = HermesInternal;
            let writeResult4 = write.write("if (!Number.isInteger(" + arg3 + ") || " + arg3 + " < 0 || " + arg3 + " > 4294967295) return INVALID;");
            str = arg3;
          } else if ("float32" === format3) {
            const _HermesInternal77 = HermesInternal;
            let writeResult5 = write.write("if (!Number.isFinite(" + arg3 + ") || " + arg3 + " < -3.4028234663852886e38 || " + arg3 + " > 3.4028234663852886e38) return INVALID;");
            str = arg3;
          } else if ("float64" === format3) {
            const _HermesInternal76 = HermesInternal;
            let writeResult6 = write.write("if (!Number.isFinite(" + arg3 + ")) return INVALID;");
            str = arg3;
          } else {
            const _HermesInternal75 = HermesInternal;
            const self23 = this;
            const self24 = this;
            const tmp412 = new _moduleResult1("number format " + format3);
            throw tmp412;
          }
        }
        break;
      }
      case "boolean":
      {
        const _HermesInternal73 = HermesInternal;
        write.write("if (typeof " + arg3 + " !== \"boolean\") return INVALID;");
        str = arg3;
        break;
      }
      case "bigint":
      {
        const _HermesInternal71 = HermesInternal;
        write.write("if (typeof " + arg3 + " !== \"bigint\") return INVALID;");
        const def10 = innerType._zod.def;
        str = arg3;
        if (def10.format) {
          const format = def10.format;
          if ("int64" === format) {
            const _HermesInternal72 = HermesInternal;
            write.write("if (" + arg3 + " < -9223372036854775808n || " + arg3 + " > 9223372036854775807n) return INVALID;");
            str = arg3;
          } else {
            str = arg3;
            if ("uint64" === format) {
              const _HermesInternal87 = HermesInternal;
              write.write("if (" + arg3 + " < 0n || " + arg3 + " > 18446744073709551615n) return INVALID;");
              str = arg3;
            }
          }
        }
        break;
      }
      case "symbol":
      {
        const _HermesInternal70 = HermesInternal;
        write.write("if (typeof " + arg3 + " !== \"symbol\") return INVALID;");
        str = arg3;
        break;
      }
      case "undefined":
      {
        const _HermesInternal69 = HermesInternal;
        write.write("if (" + arg3 + " !== undefined) return INVALID;");
        str = arg3;
        break;
      }
      case "null":
      {
        const _HermesInternal68 = HermesInternal;
        write.write("if (" + arg3 + " !== null) return INVALID;");
        str = arg3;
        break;
      }
      case "any":
      {
        break;
      }
      case "unknown":
      {
        break;
      }
      case "never":
      {
        write.write("return INVALID;");
        str = arg3;
        break;
      }
      case "void":
      {
        const _HermesInternal67 = HermesInternal;
        write.write("if (" + arg3 + " !== undefined) return INVALID;");
        str = arg3;
        break;
      }
      case "nan":
      {
        const _HermesInternal66 = HermesInternal;
        write.write("if (typeof " + arg3 + " !== \"number\" || !Number.isNaN(" + arg3 + ")) return INVALID;");
        str = arg3;
        break;
      }
      case "date":
      {
        const _HermesInternal65 = HermesInternal;
        write.write("if (!(" + arg3 + " instanceof Date) || Number.isNaN(" + arg3 + ".getTime())) return INVALID;");
        str = arg3;
        break;
      }
      case "object":
      {
        str = generateObjectCheck(write, varCounter, innerType, arg3, flag);
        break;
      }
      case "optional":
      {
        _require = varCounter;
        let closure_1 = arg3;
        let flag12 = flag;
        if (flag === undefined) {
          flag12 = true;
        }
        let c4;
        let closure_5;
        let text1;
        const def9 = innerType._zod.def;
        const traits = innerType._zod.traits;
        let hasItem;
        if (traits != null) {
          hasItem = traits.has("$ZodExactOptional");
        }
        if (true === hasItem) {
          text1 = generateCheck(write, varCounter, def9.innerType, arg3, flag12);
        } else if ("defaulted" === def9.innerType._zod.optin) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          let text = `v${tmp363}`;
          c4 = text;
          varCounter.varCounter = +varCounter.varCounter + 1;
          closure_5 = "v" + tmp365;
          const _HermesInternal63 = HermesInternal;
          write.write("let " + `v${+varCounter.varCounter}` + ";");
          const _HermesInternal64 = HermesInternal;
          write.write("if (" + arg3 + " === undefined) {");
          const indentedResult = write.indented((write) => {
            let innerType;
            write.write("const " + closure_5 + " = (() => {");
            write.indented((write) => {
              write.write("return " + closure_2_38(write, closure_1_0, innerType.innerType, closure_1_1) + ";");
            });
            write.write("})();");
            write.write("if (" + closure_5 + " !== INVALID) " + c4 + " = " + closure_5 + ";");
          });
          write.write("} else {");
          const indentedResult1 = write.indented((write) => {
            write.write("" + c4 + " = " + generateCheck(write, closure_0, def9.innerType, closure_1) + ";");
          });
          write.write("}");
          text1 = text;
        } else {
          text1 = null;
          if (flag12) {
            varCounter.varCounter = +varCounter.varCounter + 1;
            text1 = `v${tmp355}`;
          }
          if (text1) {
            const _HermesInternal61 = HermesInternal;
            write.write("let " + text1 + ";");
          }
          const _HermesInternal62 = HermesInternal;
          write.write("if (" + arg3 + " !== undefined) {");
          write.indented((write) => {
            const tmp = generateCheck(write, closure_0, def9.innerType, closure_1, flag12);
            const tmp3 = text1 && null !== tmp;
            if (tmp3) {
              const _HermesInternal = HermesInternal;
              write.write("" + text1 + " = " + tmp + ";");
            }
          });
          write.write("}");
        }
        str = text1;
        break;
      }
      case "nullable":
      {
        _require = varCounter;
        let closure_1 = arg3;
        let flag11 = flag;
        if (flag === undefined) {
          flag11 = true;
        }
        def2 = innerType._zod.def;
        let text2 = null;
        if (flag11) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          text2 = `v${tmp346}`;
        }
        if (text2) {
          const _HermesInternal59 = HermesInternal;
          write.write("let " + text2 + " = null;");
        }
        const _HermesInternal60 = HermesInternal;
        write.write("if (" + arg3 + " !== null) {");
        write.indented((write) => {
          const tmp = generateCheck(write, closure_0, def2.innerType, closure_1, flag11);
          const tmp3 = text2 && null !== tmp;
          if (tmp3) {
            const _HermesInternal = HermesInternal;
            write.write("" + text2 + " = " + tmp + ";");
          }
        });
        write.write("}");
        str = text2;
        break;
      }
      case "array":
      {
        _require = varCounter;
        let closure_1 = arg3;
        let flag10 = flag;
        if (flag === undefined) {
          flag10 = true;
        }
        let text4;
        let closure_6;
        def2 = innerType._zod.def;
        const _HermesInternal55 = HermesInternal;
        write.write("if (!Array.isArray(" + arg3 + ")) return INVALID;");
        const _HermesInternal56 = HermesInternal;
        generateSizeGate(write, innerType, "" + arg3 + ".length");
        let text3 = null;
        if (flag10) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          text3 = `v${tmp331}`;
        }
        varCounter.varCounter = +varCounter.varCounter + 1;
        text4 = `v${tmp332}`;
        varCounter.varCounter = +varCounter.varCounter + 1;
        closure_6 = "v" + tmp334;
        if (text3) {
          const _HermesInternal57 = HermesInternal;
          write.write("const " + text3 + " = new Array(" + arg3 + ".length);");
        }
        const _HermesInternal58 = HermesInternal;
        write.write("for (let " + text4 + " = 0; " + text4 + " < " + arg3 + ".length; " + text4 + "++) {");
        write.indented((write) => {
          write.write("const " + closure_6 + " = " + closure_1 + "[" + text4 + "];");
          const tmp3 = compileChild(write, closure_0, def2.element, closure_6, flag10);
          const tmp5 = text3 && null !== tmp3;
          if (tmp5) {
            const _HermesInternal = HermesInternal;
            write.write("" + text3 + "[" + text4 + "] = " + tmp3 + ";");
          }
        });
        write.write("}");
        str = text3;
        break;
      }
      case "literal":
      {
        const values2 = innerType._zod.def.values;
        if (1 !== values2.length) {
          const _Set3 = Set;
          const self21 = this;
          const self22 = this;
          set = new Set(values2);
          const _HermesInternal54 = HermesInternal;
          write.write("if (!" + addConstant(varCounter, set) + ".has(" + arg3 + ")) return INVALID;");
          str = arg3;
        } else {
          const first = values2[0];
          if (typeof first === "number") {
            let _Number = Number;
            if (Number.isNaN(first)) {
              let _Set2 = Set;
              const self19 = this;
              const self20 = this;
              set1 = new Set(values2);
              const _HermesInternal53 = HermesInternal;
              write.write("if (!" + addConstant(varCounter, set1) + ".has(" + arg3 + ")) return INVALID;");
              str = arg3;
            }
          }
          if (typeof first === "string") {
            const _HermesInternal52 = HermesInternal;
            write.write("if (" + arg3 + " !== " + captureStackTrace.esc(first) + ") return INVALID;");
            str = arg3;
          } else {
            if (typeof first !== "number") {
              if (typeof first !== "boolean") {
                if (null === first) {
                  const _HermesInternal50 = HermesInternal;
                  write.write("if (" + arg3 + " !== null) return INVALID;");
                  str = arg3;
                } else if (undefined === first) {
                  const _HermesInternal49 = HermesInternal;
                  write.write("if (" + arg3 + " !== undefined) return INVALID;");
                  str = arg3;
                } else if (typeof first !== "bigint") {
                  const self17 = this;
                  const self18 = this;
                  const tmp299 = new _moduleResult1("literal type " + typeof first);
                  throw tmp299;
                } else {
                  const _HermesInternal86 = HermesInternal;
                  write.write("if (" + arg3 + " !== " + first + "n) return INVALID;");
                  str = arg3;
                }
              }
            }
            const _HermesInternal51 = HermesInternal;
            write.write("if (" + arg3 + " !== " + first + ") return INVALID;");
            str = arg3;
          }
        }
        break;
      }
      case "enum":
      {
        let values = innerType._zod.values;
        if (values) {
          const _HermesInternal48 = HermesInternal;
          write.write("if (!" + addConstant(varCounter, values) + ".has(" + arg3 + ")) return INVALID;");
          str = arg3;
        } else {
          const self15 = this;
          const self16 = this;
          const tmp292 = new _moduleResult1("enum schema without enumerated values");
          throw tmp292;
        }
        break;
      }
      case "readonly":
      {
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text5 = `v${tmp286}`;
        const _HermesInternal47 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = Object.freeze(" + generateCheck(write, varCounter, innerType._zod.def.innerType, arg3) + ");");
        str = text5;
        break;
      }
      case "success":
      {
        generateCheck(write, varCounter, innerType._zod.def.innerType, arg3);
        str = "true";
        break;
      }
      case "default":
      {
        _require = varCounter;
        let closure_1 = innerType;
        let closure_2 = arg3;
        def8 = innerType._zod.def;
        let _Object = Object;
        ownPropertyDescriptor = Object.getOwnPropertyDescriptor(innerType._zod.def, "defaultValue");
        if (ownPropertyDescriptor) {
          fn2 = f132091;
        }
        if ("prefault" === innerType._zod.def.type) {
          if (fn2) {
            tmp261 = addConstant(varCounter, fn2);
            tmp262 = +varCounter.varCounter;
            sum = tmp262 + 1;
            varCounter.varCounter = sum;
            let text6 = `v${tmp262}`;
            write6 = write.write;
            let _HermesInternal45 = HermesInternal;
            combined = "let " + `v${tmp262}` + " = " + arg3 + ";";
            write6(combined);
            write7 = write.write;
            let _HermesInternal46 = HermesInternal;
            combined1 = "if (" + arg3 + " === undefined) " + `v${tmp262}` + " = " + tmp261 + "();";
            write7(combined1);
            tmp243 = generateCheck(write, varCounter, def8.innerType, `v${tmp262}`);
          } else {
            tmp243 = generateCheck(write, varCounter, def8.innerType, arg3);
          }
        } else {
          tmp464 = +varCounter.varCounter;
          sum1 = tmp464 + 1;
          varCounter.varCounter = sum1;
          text7 = `v${tmp464}`;
          if (fn2) {
            tmp245 = addConstant(varCounter, fn2);
            let closure_5 = tmp245;
            tmp247 = addConstant(varCounter, captureStackTrace.shallowClone);
            let closure_6 = tmp247;
            write4 = write.write;
            let _HermesInternal43 = HermesInternal;
            combined2 = "let " + `v${tmp464}` + ";";
            write4(combined2);
            write5 = write.write;
            let _HermesInternal44 = HermesInternal;
            combined3 = "if (" + arg3 + " === undefined) {";
            write5(combined3);
            fn4 = f132092;
            write.indented(fn4);
            write.write("} else {");
            fn5 = f132093;
            write.indented(fn5);
            write.write("}");
            tmp243 = text7;
          } else {
            write2 = write.write;
            let _HermesInternal41 = HermesInternal;
            combined4 = "let " + `v${tmp464}` + ";";
            write2(combined4);
            write3 = write.write;
            let _HermesInternal42 = HermesInternal;
            combined5 = "if (" + arg3 + " !== undefined) {";
            write3(combined5);
            fn3 = f132094;
            write.indented(fn3);
            write.write("}");
            tmp243 = text7;
          }
        }
        str = tmp243;
        break;
      }
      case "prefault":
      {
        _require = varCounter;
        let closure_1 = innerType;
        let closure_2 = arg3;
        def8 = innerType._zod.def;
        let _Object = Object;
        ownPropertyDescriptor = Object.getOwnPropertyDescriptor(innerType._zod.def, "defaultValue");
        if (ownPropertyDescriptor) {
          fn2 = f132091;
        }
        if ("prefault" === innerType._zod.def.type) {
          if (fn2) {
            tmp261 = addConstant(varCounter, fn2);
            tmp262 = +varCounter.varCounter;
            sum = tmp262 + 1;
            varCounter.varCounter = sum;
            let text6 = `v${tmp262}`;
            write6 = write.write;
            let _HermesInternal45 = HermesInternal;
            combined = "let " + `v${tmp262}` + " = " + arg3 + ";";
            write6(combined);
            write7 = write.write;
            let _HermesInternal46 = HermesInternal;
            combined1 = "if (" + arg3 + " === undefined) " + `v${tmp262}` + " = " + tmp261 + "();";
            write7(combined1);
            tmp243 = generateCheck(write, varCounter, def8.innerType, `v${tmp262}`);
          } else {
            tmp243 = generateCheck(write, varCounter, def8.innerType, arg3);
          }
        } else {
          tmp464 = +varCounter.varCounter;
          sum1 = tmp464 + 1;
          varCounter.varCounter = sum1;
          text7 = `v${tmp464}`;
          if (fn2) {
            tmp245 = addConstant(varCounter, fn2);
            let closure_5 = tmp245;
            tmp247 = addConstant(varCounter, captureStackTrace.shallowClone);
            let closure_6 = tmp247;
            write4 = write.write;
            let _HermesInternal43 = HermesInternal;
            combined2 = "let " + `v${tmp464}` + ";";
            write4(combined2);
            write5 = write.write;
            let _HermesInternal44 = HermesInternal;
            combined3 = "if (" + arg3 + " === undefined) {";
            write5(combined3);
            fn4 = f132092;
            write.indented(fn4);
            write.write("} else {");
            fn5 = f132093;
            write.indented(fn5);
            write.write("}");
            tmp243 = text7;
          } else {
            write2 = write.write;
            let _HermesInternal41 = HermesInternal;
            combined4 = "let " + `v${tmp464}` + ";";
            write2(combined4);
            write3 = write.write;
            let _HermesInternal42 = HermesInternal;
            combined5 = "if (" + arg3 + " !== undefined) {";
            write3(combined5);
            fn3 = f132094;
            write.indented(fn3);
            write.write("}");
            tmp243 = text7;
          }
        }
        str = tmp243;
        break;
      }
      case "nonoptional":
      {
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text8 = `v${tmp229}`;
        const _HermesInternal39 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = " + generateCheck(write, varCounter, innerType._zod.def.innerType, arg3) + ";");
        const _HermesInternal40 = HermesInternal;
        write.write("if (" + `v${+varCounter.varCounter}` + " === undefined) return INVALID;");
        str = text8;
        break;
      }
      case "tuple":
      {
        let num16;
        let rest;
        _require = varCounter;
        let closure_1 = arg3;
        ({ items, rest } = innerType._zod.def);
        const _HermesInternal33 = HermesInternal;
        write.write("if (!Array.isArray(" + arg3 + ")) return INVALID;");
        let num12 = 1;
        let diff = items.length - 1;
        let num13 = 0;
        let num14 = 0;
        if (0 <= diff) {
          while (undefined !== items[diff]._zod.optin) {
            diff = diff - 1;
            num14 = 0;
          }
          num14 = diff + 1;
        }
        let diff1 = items.length - 1;
        let num15 = 0;
        if (0 <= diff1) {
          while ("optional" === items[diff1]._zod.optout) {
            diff1 = diff1 - 1;
            num15 = 0;
          }
          num15 = diff1 + 1;
        }
        const writeValue = write.write;
        if (rest) {
          const _HermesInternal35 = HermesInternal;
          writeValue("if (" + arg3 + ".length < " + num14 + ") return INVALID;");
        } else {
          const _HermesInternal34 = HermesInternal;
          writeValue("if (" + arg3 + ".length < " + num14 + " || " + arg3 + ".length > " + items.length + ") return INVALID;");
        }
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text9 = `v${tmp205}`;
        const _HermesInternal36 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = [];");
        for (let num16 = 0; num16 < items.length; num16 = num16 + 1) {
          let tmp208 = items[num16];
          closure_1 = tmp208;
          let tmp209 = num16;
          if (num15 <= num16) {
            let _HermesInternal37 = HermesInternal;
            let str131 = "if (";
            let str132 = ".length === ";
            let str133 = ") {";
            let writeResult50 = write.write("if (" + `v${tmp205}` + ".length === " + tmp209 + ") {");
            let indentedResult8 = write.indented((write) => {
              const writeResult = write.write("if (" + num16 + " < " + closure_1 + ".length) {");
              write.indented((write) => {
                num16.varCounter = +num16.varCounter + 1;
                const text = `v${tmp}`;
                write.write("const " + `v${+num16.varCounter}` + " = " + closure_1 + "[" + closure_1_0 + "];");
                write.write("" + text23 + "[" + closure_1_0 + "] = " + compileChild(write, num16, closure_1_1, `v${+num16.varCounter}`) + ";");
              });
              write.write("} else {");
              write.indented((write) => {
                const tmp = "optional" === closure_1._zod.optin && "optional" === closure_1._zod.optout;
                if (tmp) {
                  const _HermesInternal5 = HermesInternal;
                  write.write("" + closure_1_3 + ".length = " + closure_0 + ";");
                } else {
                  num16.varCounter = +num16.varCounter + 1;
                  closure_0 = `v${tmp3}`;
                  num16.varCounter = +num16.varCounter + 1;
                  const text = `v${tmp4}`;
                  const _HermesInternal = HermesInternal;
                  write.write("const " + `v${+num16.varCounter}` + " = undefined;");
                  const _HermesInternal2 = HermesInternal;
                  write.write("const " + `v${+num16.varCounter}` + " = (() => {");
                  write.indented((write) => {
                    write.write("return " + compileChild(write, num16, closure_2_1, closure_0) + ";");
                  });
                  write.write("})();");
                  const _HermesInternal3 = HermesInternal;
                  write.write("if (" + `v${+num16.varCounter}` + " === INVALID || " + `v${+num16.varCounter}` + " === undefined) " + closure_1_3 + ".length = " + closure_0 + ";");
                  const _HermesInternal4 = HermesInternal;
                  write.write("else " + closure_1_3 + "[" + closure_0 + "] = " + `v${+num16.varCounter}` + ";");
                }
              });
              write.write("}");
            });
            let writeResult51 = write.write("}");
          } else {
            let tmp450 = +varCounter.varCounter;
            varCounter.varCounter = tmp450 + 1;
            let text10 = `v${tmp450}`;
            let _HermesInternal84 = HermesInternal;
            let str282 = "const ";
            let str283 = " = ";
            let str284 = "[";
            let str285 = "];";
            let writeResult52 = write.write("const " + `v${tmp450}` + " = " + arg3 + "[" + tmp209 + "];");
            let _HermesInternal85 = HermesInternal;
            let str286 = "";
            let str287 = "[";
            let str288 = "] = ";
            let str289 = ";";
            let writeResult53 = write.write("" + `v${tmp205}` + "[" + tmp209 + "] = " + compileChild(write, varCounter, tmp208, `v${tmp450}`) + ";");
          }
        }
        str = text9;
        if (rest) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          const text11 = `v${tmp215}`;
          varCounter.varCounter = +varCounter.varCounter + 1;
          let closure_5 = "v" + tmp217;
          const _HermesInternal38 = HermesInternal;
          write.write("for (let " + `v${+varCounter.varCounter}` + " = " + items.length + "; " + `v${+varCounter.varCounter}` + " < " + arg3 + ".length; " + `v${+varCounter.varCounter}` + "++) {");
          write.indented((write) => {
            write.write("const " + closure_5 + " = " + closure_1 + "[" + text11 + "];");
            write.write("" + text9 + "[" + text11 + "] = " + compileChild(write, closure_0, rest, closure_5) + ";");
          });
          write.write("}");
          str = text9;
        }
        break;
      }
      case "union":
      {
        let text12;
        _require = varCounter;
        let closure_1 = arg3;
        let def7 = innerType._zod.def;
        let options = def7.options;
        if (def7.discriminator) {
          let num11 = 0;
          text12 = generateDiscriminatedUnionCheck(write, varCounter, def7, arg3);
        } else if (false === def7.inclusive) {
          const self13 = this;
          const self14 = this;
          const tmp186 = new _moduleResult1("exclusive unions (z.xor)");
          throw tmp186;
        } else if (0 === options.length) {
          write.write("return INVALID;");
          text12 = arg3;
        } else if (1 === options.length) {
          let num10 = 0;
          text12 = generateCheck(write, varCounter, options[0], arg3);
        } else if (options.every((_zod) => {
          let tmp = "literal" === _zod._zod.def.type;
          if (tmp) {
            const checks = _zod._zod.def.checks;
            let length;
            if (checks != null) {
              length = checks.length;
            }
            tmp = !length;
          }
          return tmp;
        })) {
          let _Set = Set;
          const self11 = this;
          const self12 = this;
          const _HermesInternal32 = HermesInternal;
          set2 = new Set(options.flatMap((_zod) => _zod._zod.def.values));
          write.write("if (!" + addConstant(varCounter, set2) + ".has(" + arg3 + ")) return INVALID;");
          text12 = arg3;
        } else {
          varCounter.varCounter = +varCounter.varCounter + 1;
          text12 = `v${tmp161}`;
          const _HermesInternal28 = HermesInternal;
          write.write("let " + `v${+varCounter.varCounter}` + ";");
          let num8 = 0;
          let num9 = 0;
          if (0 < options.length) {
            do {
              _require = options[num8];
              if (0 === num8) {
                let _HermesInternal30 = HermesInternal;
                let writeResult59 = write.write("" + `v${tmp161}` + " = (() => {");
              } else {
                let _HermesInternal29 = HermesInternal;
                let str98 = "if (";
                let str99 = " === INVALID) ";
                let str100 = " = (() => {";
                let writeResult60 = write.write("if (" + `v${tmp161}` + " === INVALID) " + `v${tmp161}` + " = (() => {");
              }
              let indentedResult10 = write.indented((write) => {
                write.write("return " + generateCheck(write, varCounter, varCounter, closure_1) + ";");
              });
              let writeResult61 = write.write("})();");
              num8 = num9 + 1;
              num9 = num8;
            } while (num8 < options.length);
          }
          const _HermesInternal31 = HermesInternal;
          write.write("if (" + text12 + " === INVALID) return INVALID;");
        }
        str = text12;
        break;
      }
      case "intersection":
      {
        const def6 = innerType._zod.def;
        varCounter.definite = false;
        let num7 = 0;
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text13 = `v${tmp155}`;
        const _HermesInternal25 = HermesInternal;
        const tmp147 = compileChild(write, varCounter, def6.left, arg3);
        const tmp151 = compileChild(write, varCounter, def6.right, arg3);
        write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, require("$ZodType").mergeValues) + "(" + tmp147 + ", " + tmp151 + ");");
        const _HermesInternal26 = HermesInternal;
        write.write("if (!" + `v${+varCounter.varCounter}` + ".valid) return INVALID;");
        const _HermesInternal27 = HermesInternal;
        str = "" + `v${tmp155}` + ".data";
        break;
      }
      case "record":
      {
        let num6 = 0;
        str = generateRecordCheck(write, varCounter, innerType, arg3);
        break;
      }
      case "map":
      {
        _require = varCounter;
        def2 = innerType._zod.def;
        let tmp122 = globalThis;
        const _HermesInternal21 = HermesInternal;
        write.write("if (!(" + arg3 + " instanceof Map)) return INVALID;");
        let tmp124 = generateSizeGate;
        const _HermesInternal22 = HermesInternal;
        let num5 = 0;
        let tmp125 = generateSizeGate(write, innerType, "" + arg3 + ".size");
        let tmp126 = +varCounter.varCounter;
        varCounter.varCounter = tmp126 + 1;
        const text14 = `v${tmp126}`;
        let tmp128 = +varCounter.varCounter;
        varCounter.varCounter = tmp128 + 1;
        const text15 = `v${tmp128}`;
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text16 = `v${tmp130}`;
        const _HermesInternal23 = HermesInternal;
        write.write("const " + `v${tmp126}` + " = new Map();");
        const _HermesInternal24 = HermesInternal;
        write.write("for (const [" + `v${tmp128}` + ", " + `v${+varCounter.varCounter}` + "] of " + arg3 + ") {");
        write.indented((write) => {
          const tmp = generateCheck(write, closure_0, def2.keyType, text15);
          write.write("" + text14 + ".set(" + tmp + ", " + generateCheck(write, closure_0, def2.valueType, text16) + ");");
        });
        write.write("}");
        str = text14;
        break;
      }
      case "set":
      {
        _require = varCounter;
        def2 = innerType._zod.def;
        let tmp108 = globalThis;
        const _HermesInternal17 = HermesInternal;
        write.write("if (!(" + arg3 + " instanceof Set)) return INVALID;");
        let tmp110 = generateSizeGate;
        const _HermesInternal18 = HermesInternal;
        let num4 = 0;
        let tmp111 = generateSizeGate(write, innerType, "" + arg3 + ".size");
        let tmp112 = +varCounter.varCounter;
        varCounter.varCounter = tmp112 + 1;
        const text17 = `v${tmp112}`;
        let tmp114 = +varCounter.varCounter;
        varCounter.varCounter = tmp114 + 1;
        const text18 = `v${tmp114}`;
        const _HermesInternal19 = HermesInternal;
        write.write("const " + `v${tmp112}` + " = new Set();");
        const _HermesInternal20 = HermesInternal;
        let tmp117 = text18;
        let tmp118 = arg3;
        write.write("for (const " + `v${tmp114}` + " of " + arg3 + ") {");
        write.indented((write) => {
          write.write("" + text17 + ".add(" + generateCheck(write, closure_0, def2.valueType, text18) + ");");
        });
        write.write("}");
        str = text17;
        break;
      }
      case "file":
      {
        let tmp106 = globalThis;
        const _HermesInternal16 = HermesInternal;
        write.write("if (!(" + arg3 + " instanceof File)) return INVALID;");
        str = arg3;
        break;
      }
      case "template_literal":
      {
        let tmp98 = globalThis;
        const _HermesInternal13 = HermesInternal;
        write.write("if (typeof " + arg3 + " !== \"string\") return INVALID;");
        const pattern = innerType._zod.pattern;
        str = arg3;
        if (pattern) {
          let tmp100 = addConstant;
          let tmp101 = addConstant(varCounter, pattern);
          const _HermesInternal14 = HermesInternal;
          write.write("" + tmp101 + ".lastIndex = 0;");
          const _HermesInternal15 = HermesInternal;
          let tmp104 = arg3;
          write.write("if (!" + tmp101 + ".test(" + arg3 + ")) return INVALID;");
          str = arg3;
        }
        break;
      }
      case "lazy":
      {
        varCounter.definite = false;
        let tmp85 = addConstant;
        _require = addConstant(varCounter, innerType._zod.def.getter);
        let tmp86 = addConstant(varCounter, { parser: null });
        let closure_1 = tmp86;
        let tmp87 = globalThis;
        let _HermesInternal10 = HermesInternal;
        let str38 = ".parser) {";
        let str39 = "if (!";
        write.write("if (!" + tmp86 + ".parser) {");
        write.indented((write) => {
          write.write("const inner = " + closure_0 + "();");
          write.write("" + closure_1 + ".parser = function(input) {");
          write.indented((write) => {
            write.write("const result = inner._zod.run({ value: input, issues: [] }, {});");
            write.write("return result.issues.length === 0 ? result.value : INVALID;");
          });
          write.write("};");
        });
        let str40 = "}";
        write.write("}");
        let tmp91 = +varCounter.varCounter;
        varCounter.varCounter = tmp91 + 1;
        let str41 = "v";
        const text19 = `v${tmp91}`;
        const _HermesInternal11 = HermesInternal;
        let str42 = ");";
        let str43 = ".parser(";
        let str44 = " = ";
        let str45 = "const ";
        let tmp93 = text19;
        let tmp94 = tmp86;
        let tmp95 = arg3;
        write.write("const " + `v${tmp91}` + " = " + tmp86 + ".parser(" + arg3 + ");");
        const _HermesInternal12 = HermesInternal;
        write.write("if (" + `v${tmp91}` + " === INVALID) return INVALID;");
        str = text19;
        break;
      }
      case "pipe":
      {
        let tmp59Result;
        const def5 = innerType._zod.def;
        let tmp59 = generateCheck;
        let num = 0;
        let tmp60 = write;
        let tmp61 = varCounter;
        let tmp62 = arg3;
        let tmp63 = generateCheck(write, varCounter, def5.in, arg3);
        if (def5.transform) {
          transform2 = def5.transform;
          let tmp68 = typeof transform2 === "function";
          if (tmp68) {
            let tmp70 = "AsyncFunction" === transform2.constructor.name;
            if (!tmp70) {
              let tmp69 = globalThis;
              const _Symbol3 = Symbol;
              tmp70 = "AsyncFunction" === transform2[Symbol.toStringTag];
            }
            tmp68 = tmp70;
          }
          if (tmp68) {
            let tmp82 = closure_13;
            const self9 = this;
            let str37 = "z.compile: async transforms in pipes are not supported";
            const self10 = this;
            let tmp83 = new closure_13("z.compile: async transforms in pipes are not supported");
            let tmp84 = tmp83;
            throw tmp83;
          } else {
            transform = def5.transform;
            varCounter.definite = false;
            let tmp71 = addConstant;
            let tmp72 = +varCounter.varCounter;
            varCounter.varCounter = tmp72 + 1;
            let str30 = "v";
            const text20 = `v${tmp72}`;
            let tmp74 = globalThis;
            let _HermesInternal8 = HermesInternal;
            let str31 = ");";
            let str32 = "(";
            let str33 = " = ";
            let str34 = "const ";
            let tmp75 = text20;
            let tmp76 = tmp63;
            write.write("const " + `v${tmp72}` + " = " + addConstant(varCounter, (value) => {
              const obj = { value, issues: [], addIssue };
              let INVALID = transform(value, obj);
              if (INVALID instanceof Promise) {
                INVALID = constants.INVALID;
              } else if (0 !== obj.issues.length) {
                INVALID = constants.INVALID;
              }
              return INVALID;
            }) + "(" + tmp63 + ");");
            let _HermesInternal9 = HermesInternal;
            let str35 = " === INVALID) return INVALID;";
            let str36 = "if (";
            write.write("if (" + `v${tmp72}` + " === INVALID) return INVALID;");
            let num3 = 0;
            let tmp79 = write;
            let tmp81 = text20;
            tmp59Result = tmp59(write, varCounter, def5.out, `v${tmp72}`);
          }
        } else {
          let num2 = 0;
          let tmp64 = write;
          let tmp65 = varCounter;
          let tmp66 = tmp63;
          tmp59Result = tmp59(write, varCounter, def5.out, tmp63);
        }
        str = tmp59Result;
        break;
      }
      case "custom":
      {
        const def4 = innerType._zod.def;
        if (def4.fn) {
          let tmp39 = typeof fn === "function";
          if (tmp39) {
            let tmp41 = "AsyncFunction" === fn.constructor.name;
            if (!tmp41) {
              let tmp40 = globalThis;
              const _Symbol2 = Symbol;
              tmp41 = "AsyncFunction" === fn[Symbol.toStringTag];
            }
            tmp39 = tmp41;
          }
          if (tmp39) {
            let tmp56 = closure_13;
            let self7 = this;
            let str29 = "z.compile: async custom predicates are not supported";
            let self8 = this;
            let tmp57 = new closure_13("z.compile: async custom predicates are not supported");
            let tmp58 = tmp57;
            throw tmp57;
          } else {
            varCounter.definite = false;
            let tmp42 = addConstant;
            let tmp44 = throwAsync;
            let tmp43 = addConstant(varCounter, def4.fn);
            let tmp45 = addConstant(varCounter, throwAsync);
            let tmp46 = +varCounter.varCounter;
            varCounter.varCounter = tmp46 + 1;
            let str19 = "v";
            const text21 = `v${tmp46}`;
            let tmp48 = globalThis;
            let _HermesInternal5 = HermesInternal;
            let str20 = ");";
            let str21 = "(";
            let str22 = " = ";
            let str23 = "const ";
            let tmp49 = text21;
            let tmp50 = arg3;
            write.write("const " + `v${tmp46}` + " = " + tmp43 + "(" + arg3 + ");");
            let _HermesInternal6 = HermesInternal;
            let str24 = "();";
            let str25 = " instanceof Promise) ";
            let str26 = "if (";
            let tmp52 = text21;
            let tmp53 = tmp45;
            write.write("if (" + `v${tmp46}` + " instanceof Promise) " + tmp45 + "();");
            let _HermesInternal7 = HermesInternal;
            let str27 = ") return INVALID;";
            let str28 = "if (!";
            write.write("if (!" + `v${tmp46}` + ") return INVALID;");
            str = arg3;
          }
        } else {
          let tmp36 = _moduleResult1;
          let self5 = this;
          let str18 = "custom schema without a predicate function";
          let self6 = this;
          let tmp37 = new _moduleResult1("custom schema without a predicate function");
          let tmp38 = tmp37;
          throw tmp37;
        }
        break;
      }
      case "transform":
      {
        const def3 = innerType._zod.def;
        let tmp21 = arg3;
        if (def3.transform) {
          transform = def3.transform;
          let tmp22 = typeof transform === "function";
          if (tmp22) {
            let tmp24 = "AsyncFunction" === transform.constructor.name;
            if (!tmp24) {
              let tmp23 = globalThis;
              const _Symbol = Symbol;
              tmp24 = "AsyncFunction" === transform[Symbol.toStringTag];
            }
            tmp22 = tmp24;
          }
          if (tmp22) {
            let tmp33 = closure_13;
            let self3 = this;
            let str17 = "z.compile: async transforms are not supported";
            let self4 = this;
            let tmp34 = new closure_13("z.compile: async transforms are not supported");
            let tmp35 = tmp34;
            throw tmp34;
          } else {
            transform2 = def3.transform;
            varCounter.definite = false;
            let tmp25 = addConstant;
            let tmp26 = +varCounter.varCounter;
            varCounter.varCounter = tmp26 + 1;
            let str10 = "v";
            const text22 = `v${tmp26}`;
            let tmp28 = globalThis;
            let _HermesInternal3 = HermesInternal;
            let str11 = ");";
            let str12 = "(";
            let str13 = " = ";
            let str14 = "const ";
            let tmp29 = text22;
            let tmp30 = arg3;
            write.write("const " + `v${tmp26}` + " = " + addConstant(varCounter, (value) => {
              const obj = { value, issues: [], addIssue };
              let INVALID = transform2(value, obj);
              if (INVALID instanceof Promise) {
                INVALID = constants.INVALID;
              } else if (0 !== obj.issues.length) {
                INVALID = constants.INVALID;
              }
              return INVALID;
            }) + "(" + arg3 + ");");
            let _HermesInternal4 = HermesInternal;
            let str15 = " === INVALID) return INVALID;";
            let str16 = "if (";
            write.write("if (" + `v${tmp26}` + " === INVALID) return INVALID;");
            tmp21 = text22;
          }
        }
        str = tmp21;
        break;
      }
      case "catch":
      {
        _require = varCounter;
        let closure_1 = arg3;
        def2 = innerType._zod.def;
        let tmp6 = captureStackTrace;
        if (def2.catchValue[captureStackTrace.CONSTANT_CATCH]) {
          let tmp10 = +varCounter.varCounter;
          varCounter.varCounter = tmp10 + 1;
          let str3 = "v";
          const text23 = `v${tmp10}`;
          let tmp12 = globalThis;
          let _HermesInternal = HermesInternal;
          let str4 = " = (() => {";
          let str5 = "let ";
          write.write("let " + `v${tmp10}` + " = (() => {");
          write.indented((write) => {
            write.write("return " + compileChild(write, varCounter, def2.innerType, closure_1) + ";");
          });
          let str6 = "})();";
          write.write("})();");
          let tmp16 = addConstant;
          let closure_4 = addConstant(varCounter, def2.innerType);
          varCounter.definite = false;
          let closure_5 = addConstant(varCounter, def2.catchValue);
          let tmp17 = runtimeCatch;
          let closure_6 = addConstant(varCounter, runtimeCatch);
          let _HermesInternal2 = HermesInternal;
          let str7 = " === INVALID) {";
          let str8 = "if (";
          write.write("if (" + `v${tmp10}` + " === INVALID) {");
          write.indented((write) => {
            write.write("" + text23 + " = " + closure_6 + "(" + closure_4 + ", " + closure_5 + ", " + closure_1 + ");");
            write.write("if (" + text23 + " === INVALID) return INVALID;");
          });
          let str9 = "}";
          write.write("}");
          str = text23;
        } else {
          let tmp7 = _moduleResult1;
          let self = this;
          let str2 = "catch with a callback (only a constant catch value compiles)";
          let self2 = this;
          let tmp8 = new _moduleResult1("catch with a callback (only a constant catch value compiles)", false);
          let tmp9 = tmp8;
          throw tmp8;
        }
        break;
      }
      default:
      {
        const _HermesInternal82 = HermesInternal;
        const self25 = this;
        const self26 = this;
        const tmp444 = new _moduleResult1("schema type " + type);
        throw tmp444;
      }
    }
  }
}
function fastPathAcceptsAbsence(innerType) {
  if (innerType._zod.def.coerce) {
    return true;
  } else {
    let tmp8;
    const def = innerType._zod.def;
    switch (def.type) {
      case "any":
      {
        return true;
      }
      case "unknown":
      {
        return true;
      }
      case "undefined":
      {
        return true;
      }
      case "void":
      {
        return true;
      }
      case "default":
      {
        return true;
      }
      case "prefault":
      {
        return true;
      }
      case "transform":
      {
        return true;
      }
      case "custom":
      {
        return true;
      }
      case "lazy":
      {
        return true;
      }
      case "catch":
      {
        return true;
      }
      case "string":
      {
        return false;
      }
      case "number":
      {
        return false;
      }
      case "boolean":
      {
        return false;
      }
      case "bigint":
      {
        return false;
      }
      case "symbol":
      {
        return false;
      }
      case "null":
      {
        return false;
      }
      case "never":
      {
        return false;
      }
      case "nan":
      {
        return false;
      }
      case "date":
      {
        return false;
      }
      case "object":
      {
        return false;
      }
      case "array":
      {
        return false;
      }
      case "tuple":
      {
        return false;
      }
      case "record":
      {
        return false;
      }
      case "map":
      {
        return false;
      }
      case "set":
      {
        return false;
      }
      case "file":
      {
        return false;
      }
      case "template_literal":
      {
        return false;
      }
      case "nonoptional":
      {
        innerType = def.innerType && fastPathAcceptsAbsence(def.innerType);
        return innerType;
      }
      case "literal":
      {
        const values2 = def.values;
        let hasItem;
        if (values2 != null) {
          hasItem = values2.includes(undefined);
        }
        return hasItem;
      }
      case "enum":
      {
        const values = innerType._zod.values;
        let hasItem1;
        if (values != null) {
          hasItem1 = values.has(undefined);
        }
        return hasItem1;
      }
      case "optional":
      {
        tmp8 = !def.innerType || fastPathAcceptsAbsence(def.innerType);
        return tmp8;
      }
      case "nullable":
      {
        tmp8 = !def.innerType || fastPathAcceptsAbsence(def.innerType);
        return tmp8;
      }
      case "readonly":
      {
        tmp8 = !def.innerType || fastPathAcceptsAbsence(def.innerType);
        return tmp8;
      }
      case "success":
      {
        tmp8 = !def.innerType || fastPathAcceptsAbsence(def.innerType);
        return tmp8;
      }
      case "union":
      {
        let someResult = !def.options;
        if (!someResult) {
          const options = def.options;
          someResult = options.some(fastPathAcceptsAbsence);
        }
        return someResult;
      }
      case "intersection":
      {
        let tmp3 = !def.left || !def.right;
        if (!tmp3) {
          let tmp4Result = fastPathAcceptsAbsence(def.left);
          const tmp4 = fastPathAcceptsAbsence;
          if (tmp4Result) {
            tmp4Result = tmp4(def.right);
          }
          tmp3 = tmp4Result;
        }
        return tmp3;
      }
      case "pipe":
      {
        const tmp = !def.in || fastPathAcceptsAbsence(def.in);
        return tmp;
      }
      default:
      {
        return true;
      }
    }
  }
}
function dropsWhenAbsent(_zod) {
  return "optional" === _zod._zod.optin && "optional" === _zod._zod.optout;
}
function mayOmitUndefined(_zod) {
  const tmp = ("defaulted" !== _zod._zod.optin || "optional" === _zod._zod.optout) && mayOutputUndefined(_zod);
  return tmp;
}
function mayOutputUndefined(innerType) {
  let tmp8;
  const def = innerType._zod.def;
  switch (def.type) {
    case "string":
    {
      return false;
    }
    case "number":
    {
      return false;
    }
    case "boolean":
    {
      return false;
    }
    case "bigint":
    {
      return false;
    }
    case "symbol":
    {
      return false;
    }
    case "null":
    {
      return false;
    }
    case "nan":
    {
      return false;
    }
    case "date":
    {
      return false;
    }
    case "object":
    {
      return false;
    }
    case "array":
    {
      return false;
    }
    case "tuple":
    {
      return false;
    }
    case "record":
    {
      return false;
    }
    case "map":
    {
      return false;
    }
    case "set":
    {
      return false;
    }
    case "file":
    {
      return false;
    }
    case "template_literal":
    {
      return false;
    }
    case "never":
    {
      return false;
    }
    case "success":
    {
      return false;
    }
    case "literal":
    {
      const values2 = def.values;
      let hasItem;
      if (values2 != null) {
        hasItem = values2.includes(undefined);
      }
      return hasItem;
    }
    case "enum":
    {
      const values = innerType._zod.values;
      let hasItem1;
      if (values != null) {
        hasItem1 = values.has(undefined);
      }
      return hasItem1;
    }
    case "optional":
    {
      return true;
    }
    case "nullable":
    {
      tmp8 = !def.innerType || mayOutputUndefined(def.innerType);
      return tmp8;
    }
    case "readonly":
    {
      tmp8 = !def.innerType || mayOutputUndefined(def.innerType);
      return tmp8;
    }
    case "nonoptional":
    {
      tmp8 = !def.innerType || mayOutputUndefined(def.innerType);
      return tmp8;
    }
    case "union":
    {
      let someResult = !def.options;
      if (!someResult) {
        const options = def.options;
        someResult = options.some(mayOutputUndefined);
      }
      return someResult;
    }
    case "intersection":
    {
      const tmp3 = !def.left || !def.right || mayOutputUndefined(def.left) || mayOutputUndefined(def.right);
      return tmp3;
    }
    case "pipe":
    {
      const tmp = !def.out || mayOutputUndefined(def.out);
      return tmp;
    }
    default:
    {
      return true;
    }
  }
}
function generateSizeGate(write, _zod, arg2) {
  const sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
  const tmp2 = sizeCapsResult[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let _HermesInternal = HermesInternal;
    let str = "if (";
    let str2 = " > ";
    let str3 = ") return INVALID;";
    let writeResult = write.write("if (" + arg2 + " > " + numericOperand(tmp5[0], tmp5[1]._zod.def.check) + ") return INVALID;");
    continue;
  }
}
function emitOwnKeys(write, varCounter, arg2, arg3, arg4, arg5) {
  let closure_0 = arg2;
  let closure_1 = arg3;
  let closure_2 = arg4;
  let closure_3 = arg5;
  let closure_4 = addConstant(varCounter, Object.prototype.propertyIsEnumerable);
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text = `v${tmp}`;
  const tmp3 = +varCounter.varCounter;
  varCounter.varCounter = tmp3 + 1;
  const text1 = `v${tmp3}`;
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text2 = `v${tmp5}`;
  write.write("const " + `v${tmp}` + " = Object.getOwnPropertySymbols(" + arg2 + ");");
  write.write("const " + `v${tmp3}` + " = Object.getOwnPropertyNames(" + arg2 + ");");
  write.write("for (let " + `v${+varCounter.varCounter}` + " = 0; " + `v${+varCounter.varCounter}` + " < " + `v${tmp3}` + ".length; " + `v${+varCounter.varCounter}` + "++) {");
  write.indented((write) => {
    write.write("const " + closure_1 + " = " + text1 + "[" + text2 + "];");
    write.write("if (" + closure_1 + " === \"__proto__\" || !" + closure_4 + ".call(" + closure_0 + ", " + closure_1 + ")) continue;");
    closure_2(write);
  });
  write.write("}");
  write.write("for (let " + `v${+varCounter.varCounter}` + " = 0; " + `v${+varCounter.varCounter}` + " < " + `v${+varCounter.varCounter}` + ".length; " + `v${+varCounter.varCounter}` + "++) {");
  write.indented((write) => {
    write.write("const " + closure_1 + " = " + text + "[" + text2 + "];");
    write.write("if (!" + closure_4 + ".call(" + closure_0 + ", " + closure_1 + ")) continue;");
    if (closure_3) {
      write.write(tmp3);
    } else {
      closure_2(write);
    }
  });
  write.write("}");
}
function literalPropertyKey(constantCounter, discriminator) {
  let escResult;
  if (typeof discriminator === "string") {
    escResult = captureStackTrace.esc(discriminator);
  } else {
    escResult = addConstant(constantCounter, discriminator);
  }
  return escResult;
}
function runtimeCatch(_zod, fn, value) {
  _zod = _zod._zod;
  const obj = { value, issues: [] };
  const runResult = _zod.run(obj, {});
  if (runResult) {
    if (typeof runResult.then === "function") {
      return exports.INVALID;
    }
  }
  if (0 === runResult.issues.length) {
    value = runResult.value;
  } else {
    value = fn();
  }
  return value;
}
let hasOwnProperty = hasOwnProperty_mod;
let tmp4 = this && self.__createBinding;
if (!tmp4) {
  let tmp5 = globalThis;
  let _Object = Object;
  tmp4 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_8 = tmp4;
let tmp6 = self && self.__setModuleDefault;
if (!tmp6) {
  let tmp7 = globalThis;
  let _Object2 = Object;
  tmp6 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_9 = tmp6;
let tmp8 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_8(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_9(obj, __esModule);
  return obj;
});
const cuid = tmp8(cuid2);
const captureStackTrace = tmp8(captureStackTrace2);
let closure_12 = Symbol.for("zod.compile.fallback");
class ZodCompileAsyncError {
  constructor() {
    let constructResult;
    let str = arg0;
    if (arg0 === undefined) {
      str = "z.compile does not support async refinements, transforms, or checks";
    }
    const self = this;
    _classCallCheck(this, ZodCompileAsyncError);
    const items = [str];
    const obj = _getPrototypeOf(ZodCompileAsyncError);
    const tmp2 = _getPrototypeOf;
    const tmp3 = hasOwnProperty;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "ZodCompileAsyncError";
    return tmp3Result;
  }
}
_inherits(ZodCompileAsyncError, _wrapNativeSuper(Error));
const _moduleResult = _createClass(ZodCompileAsyncError);
const map1 = _moduleResult;
class ZodCompileUnsupportedError {
  constructor(arg0) {
    let constructResult;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const self = this;
    _classCallCheck(this, ZodCompileUnsupportedError);
    const items = ["z.compile does not support " + arg0 + "; this schema must use the runtime parser"];
    const obj = _getPrototypeOf(ZodCompileUnsupportedError);
    const tmp2 = _getPrototypeOf;
    const tmp3 = hasOwnProperty;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "ZodCompileUnsupportedError";
    tmp3Result.islandable = flag;
    return tmp3Result;
  }
}
_inherits(ZodCompileUnsupportedError, _wrapNativeSuper(Error));
const _moduleResult1 = _createClass(ZodCompileUnsupportedError);
let set = new Set(["max_size", "min_size", "size_equals", "max_length", "min_length", "length_equals"]);
let set1 = new Set(["cidrv4", "cuid", "cuid2", "date", "datetime", "duration", "e164", "email", "emoji", "ends_with", "guid", "includes", "ipv4", "ksuid", "lowercase", "mac", "nanoid", "regex", "starts_with", "time", "ulid", "uppercase", "uuid", "xid"]);
let tmp16 = (() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          let value;
          try {
            value = ownPropertyDescriptor.get();
          } catch (err) {
          }
          if (undefined !== value) {
            const _Object2 = Object;
            const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
            Object.defineProperty(exports, ownPropertyNames[num], obj);
          }
        }
      }
    }
    num = num + 1;
    tmp = tmp2;
  }
  const frozen = Object.freeze(tmp);
})();
const INVALID_export = Symbol.for("zod.compile.invalid");
const ZodCompileAsyncError_export = _moduleResult;
const ZodCompileUnsupportedError_export = _moduleResult1;

export function compile(_zod, strict) {
  function compileValidator(_zod, arg1) {
    try {
      return compileFn(_zod, { assertOnly: true });
    } catch (err) {
      return arg1;
    }
  }
  try {
    const tmp2 = compileFn(_zod);
    const tmp4 = withParser(_zod, tmp2);
    tmp4._zod.bag.validator = compileValidator(_zod, tmp2);
    return tmp4;
  } catch (tmp5) {
    strict = undefined;
    if (strict != null) {
      strict = strict.strict;
    }
    if (strict) {
      throw tmp5;
    } else {
      return _zod;
    }
  }
}
export { withParser };
export { compileFn };
export { INVALID_export as INVALID };
export { ZodCompileAsyncError_export as ZodCompileAsyncError };
export { ZodCompileUnsupportedError_export as ZodCompileUnsupportedError };
