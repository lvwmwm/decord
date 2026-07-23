// Module ID: 12015
// Function ID: 93252
// Dependencies: [65, 57, 12010, 12016, 12013]

// Module 12015
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";

const self = this;
function handleCheckPropertyResult(issues, issues2, closure_0) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    push.apply(issues, _toConsumableArray(closure_6.prefixIssues(closure_0, issues.issues)));
  }
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp7 = key10009;
            let callResult = "default" !== key10009;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10009);
            }
            if (!callResult) {
              continue;
            } else {
              let tmp4 = self2;
              let tmp5 = self2(obj, arg0, key10009);
              continue;
            }
            continue;
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    let obj = { value: true };
    exports.$ZodCheck = undefined;
    exports.$ZodCheckLessThan = undefined;
    exports.$ZodCheckGreaterThan = undefined;
    exports.$ZodCheckMultipleOf = undefined;
    exports.$ZodCheckNumberFormat = undefined;
    exports.$ZodCheckBigIntFormat = undefined;
    exports.$ZodCheckMaxSize = undefined;
    exports.$ZodCheckMinSize = undefined;
    exports.$ZodCheckSizeEquals = undefined;
    exports.$ZodCheckMaxLength = undefined;
    exports.$ZodCheckMinLength = undefined;
    exports.$ZodCheckLengthEquals = undefined;
    exports.$ZodCheckStringFormat = undefined;
    exports.$ZodCheckRegex = undefined;
    exports.$ZodCheckLowerCase = undefined;
    exports.$ZodCheckUpperCase = undefined;
    exports.$ZodCheckIncludes = undefined;
    exports.$ZodCheckStartsWith = undefined;
    exports.$ZodCheckEndsWith = undefined;
    exports.$ZodCheckProperty = undefined;
    exports.$ZodCheckMimeType = undefined;
    exports.$ZodCheckOverwrite = undefined;
    const fnResult = fn(require("_callSuper"));
    let closure_5 = fn(require("timeSource"));
    let closure_6 = fn(require("cached"));
    exports.$ZodCheck = fnResult.$constructor("$ZodCheck", (_zod, def) => {
      if (null == _zod._zod) {
        _zod._zod = {};
      }
      _zod._zod.def = def;
      _zod = _zod._zod;
      if (null == _zod.onattach) {
        _zod.onattach = [];
      }
    });
    let closure_7 = { number: "number", bigint: "bigint", object: "date" };
    exports.$ZodCheckLessThan = fnResult.$constructor("$ZodCheckLessThan", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      let closure_2 = dependencyMap[typeof arg1.value];
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        let POSITIVE_INFINITY = closure_1.inclusive ? bag.maximum : bag.exclusiveMaximum;
        if (null == POSITIVE_INFINITY) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        if (closure_1.value < POSITIVE_INFINITY) {
          const value = closure_1.value;
          if (closure_1.inclusive) {
            bag.maximum = value;
          } else {
            bag.exclusiveMaximum = value;
          }
        }
      });
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        value = closure_1.value;
        if (!(closure_1.inclusive ? value <= value : value < value)) {
          const issues = iter.issues;
          let obj = { origin: closure_2, code: "too_big" };
          if ("object" === typeof closure_1.value) {
            value = closure_1.value;
            let time = value.getTime();
          } else {
            time = closure_1.value;
          }
          obj.maximum = time;
          obj.input = iter.value;
          obj.inclusive = closure_1.inclusive;
          obj.inst = closure_0;
          iter = !closure_1.abort;
          obj.continue = iter;
          obj = issues.push(obj);
        }
      };
    });
    exports.$ZodCheckGreaterThan = fnResult.$constructor("$ZodCheckGreaterThan", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      let closure_2 = dependencyMap[typeof arg1.value];
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        let NEGATIVE_INFINITY = closure_1.inclusive ? bag.minimum : bag.exclusiveMinimum;
        if (null == NEGATIVE_INFINITY) {
          const _Number = Number;
          NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        }
        if (closure_1.value > NEGATIVE_INFINITY) {
          const value = closure_1.value;
          if (closure_1.inclusive) {
            bag.minimum = value;
          } else {
            bag.exclusiveMinimum = value;
          }
        }
      });
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        value = closure_1.value;
        if (!(closure_1.inclusive ? value >= value : value > value)) {
          const issues = iter.issues;
          let obj = { origin: closure_2, code: "too_small" };
          if ("object" === typeof closure_1.value) {
            value = closure_1.value;
            let time = value.getTime();
          } else {
            time = closure_1.value;
          }
          obj.minimum = time;
          obj.input = iter.value;
          obj.inclusive = closure_1.inclusive;
          obj.inst = closure_0;
          iter = !closure_1.abort;
          obj.continue = iter;
          obj = issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMultipleOf = fnResult.$constructor("$ZodCheckMultipleOf", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (null == bag.multipleOf) {
          bag.multipleOf = closure_1.value;
        }
      });
      _zod._zod.check = (value) => {
        if (typeof value.value !== typeof closure_1.value) {
          const _Error = Error;
          const error = new Error("Cannot mix number and bigint in multiple_of check.");
          throw error;
        } else {
          if ("bigint" === typeof value.value) {
            const _BigInt = BigInt;
            const result = value.value % closure_1.value;
            let tmp3 = result === BigInt(0);
          } else {
            tmp3 = 0 === outer1_6.floatSafeRemainder(value.value, closure_1.value);
          }
          if (!tmp3) {
            const issues = value.issues;
            const obj = { origin: typeof value.value, code: "not_multiple_of", divisor: closure_1.value, input: value.value, inst: closure_0, continue: !closure_1.abort };
            issues.push(obj);
          }
        }
      };
    });
    exports.$ZodCheckNumberFormat = fnResult.$constructor("$ZodCheckNumberFormat", (_zod, format) => {
      const _exports = _zod;
      let closure_1 = format;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, format);
      format.format = format.format || "float64";
      format = format.format;
      let hasItem;
      if (null != format) {
        hasItem = format.includes("int");
      }
      let str2 = "number";
      if (hasItem) {
        str2 = "int";
      }
      const tmp3 = hasItem(closure_6.NUMBER_FORMAT_RANGES[format.format], 2);
      let closure_4 = tmp3[0];
      let closure_5 = tmp3[1];
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        bag.format = closure_1.format;
        bag.minimum = closure_4;
        bag.maximum = integer;
        if (hasItem) {
          bag.pattern = integer.integer;
        }
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (hasItem) {
          const _Number = Number;
          if (Number.isInteger(value)) {
            const _Number2 = Number;
            if (!Number.isSafeInteger(value)) {
              if (value > 0) {
                const issues = value.issues;
                let obj = { input: value, code: "too_big" };
                const _Number4 = Number;
                obj.maximum = Number.MAX_SAFE_INTEGER;
                obj.note = "Integers must be within the safe integer range.";
                obj.inst = closure_0;
                obj.origin = str2;
                obj.inclusive = true;
                obj.continue = !closure_1.abort;
                issues.push(obj);
              } else {
                const issues1 = value.issues;
                obj = { input: value, code: "too_small" };
                const _Number3 = Number;
                obj.minimum = Number.MIN_SAFE_INTEGER;
                obj.note = "Integers must be within the safe integer range.";
                obj.inst = closure_0;
                obj.origin = "too_small";
                obj.inclusive = true;
                obj.continue = !closure_1.abort;
                issues1.push(obj);
              }
            }
          } else {
            const issues2 = value.issues;
            obj = { expected: str2, format: closure_1.format, code: "invalid_type", continue: false, input: value, inst: closure_0 };
            issues2.push(obj);
          }
        }
        if (value < closure_4) {
          const issues3 = value.issues;
          const obj1 = { origin: "number", input: value, code: "too_small", minimum: closure_4, inclusive: true, inst: closure_0, continue: !closure_1.abort };
          issues3.push(obj1);
        }
        if (value > closure_5) {
          const issues4 = value.issues;
          const obj2 = { origin: "number", input: value, code: "too_big", maximum: closure_5, inclusive: true, inst: closure_0, continue: !closure_1.abort };
          issues4.push(obj2);
        }
      };
    });
    exports.$ZodCheckBigIntFormat = fnResult.$constructor("$ZodCheckBigIntFormat", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const tmp2 = _slicedToArray(closure_6.BIGINT_FORMAT_RANGES[arg1.format], 2);
      _slicedToArray = tmp2[0];
      let closure_3 = tmp2[1];
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        bag.format = closure_1.format;
        bag.minimum = closure_2;
        bag.maximum = closure_3;
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (value < closure_2) {
          const issues = value.issues;
          let obj = { origin: "bigint", input: value, code: "too_small", minimum: closure_2, inclusive: true, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
        if (value > closure_3) {
          const issues1 = value.issues;
          obj = { origin: "bigint", input: value, code: "too_big", maximum: closure_3, inclusive: true, inst: closure_0, continue: !closure_1.abort };
          issues1.push(obj);
        }
      };
    });
    exports.$ZodCheckMaxSize = fnResult.$constructor("$ZodCheckMaxSize", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (null == def.when) {
        def.when = (value) => {
          value = value.value;
          let tmp = !outer1_6.nullish(value);
          if (tmp) {
            tmp = undefined !== value.size;
          }
          return tmp;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        let POSITIVE_INFINITY = _zod._zod.bag.maximum;
        if (null == POSITIVE_INFINITY) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        if (closure_1.maximum < POSITIVE_INFINITY) {
          _zod._zod.bag.maximum = closure_1.maximum;
        }
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (value.size > closure_1.maximum) {
          const issues = value.issues;
          const obj = { origin: outer1_6.getSizableOrigin(value), code: "too_big", maximum: closure_1.maximum, inclusive: true, input: value, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMinSize = fnResult.$constructor("$ZodCheckMinSize", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (null == def.when) {
        def.when = (value) => {
          value = value.value;
          let tmp = !outer1_6.nullish(value);
          if (tmp) {
            tmp = undefined !== value.size;
          }
          return tmp;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        let NEGATIVE_INFINITY = _zod._zod.bag.minimum;
        if (null == NEGATIVE_INFINITY) {
          const _Number = Number;
          NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        }
        if (closure_1.minimum > NEGATIVE_INFINITY) {
          _zod._zod.bag.minimum = closure_1.minimum;
        }
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (value.size < closure_1.minimum) {
          const issues = value.issues;
          const obj = { origin: outer1_6.getSizableOrigin(value), code: "too_small", minimum: closure_1.minimum, inclusive: true, input: value, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckSizeEquals = fnResult.$constructor("$ZodCheckSizeEquals", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (null == def.when) {
        def.when = (value) => {
          value = value.value;
          let tmp = !outer1_6.nullish(value);
          if (tmp) {
            tmp = undefined !== value.size;
          }
          return tmp;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        ({ size: bag.minimum, size: bag.maximum, size: bag.size } = closure_1);
      });
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        const size = value.size;
        if (size !== closure_1.size) {
          const issues = iter.issues;
          let obj = { origin: outer1_6.getSizableOrigin(value) };
          obj = {};
          if (tmp6) {
            obj.code = "too_big";
            obj.maximum = closure_1.size;
            let tmp2 = obj;
          } else {
            obj.code = "too_small";
            obj.minimum = closure_1.size;
            tmp2 = obj;
          }
          obj = { inclusive: true, exact: true, input: iter.value };
          iter = closure_0;
          obj.inst = closure_0;
          obj.continue = !closure_1.abort;
          obj = issues.push(Object.assign(obj, tmp2, obj));
          tmp6 = size > closure_1.size;
        }
      };
    });
    exports.$ZodCheckMaxLength = fnResult.$constructor("$ZodCheckMaxLength", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (null == def.when) {
        def.when = (value) => {
          value = value.value;
          let tmp = !outer1_6.nullish(value);
          if (tmp) {
            tmp = undefined !== value.length;
          }
          return tmp;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        let POSITIVE_INFINITY = _zod._zod.bag.maximum;
        if (null == POSITIVE_INFINITY) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        if (closure_1.maximum < POSITIVE_INFINITY) {
          _zod._zod.bag.maximum = closure_1.maximum;
        }
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (value.length > closure_1.maximum) {
          const issues = value.issues;
          const obj = { origin: outer1_6.getLengthableOrigin(value), code: "too_big", maximum: closure_1.maximum, inclusive: true, input: value, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckMinLength = fnResult.$constructor("$ZodCheckMinLength", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (null == def.when) {
        def.when = (value) => {
          value = value.value;
          let tmp = !outer1_6.nullish(value);
          if (tmp) {
            tmp = undefined !== value.length;
          }
          return tmp;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        let NEGATIVE_INFINITY = _zod._zod.bag.minimum;
        if (null == NEGATIVE_INFINITY) {
          const _Number = Number;
          NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
        }
        if (closure_1.minimum > NEGATIVE_INFINITY) {
          _zod._zod.bag.minimum = closure_1.minimum;
        }
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (value.length < closure_1.minimum) {
          const issues = value.issues;
          const obj = { origin: outer1_6.getLengthableOrigin(value), code: "too_small", minimum: closure_1.minimum, inclusive: true, input: value, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckLengthEquals = fnResult.$constructor("$ZodCheckLengthEquals", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const def = _zod._zod.def;
      if (null == def.when) {
        def.when = (value) => {
          value = value.value;
          let tmp = !outer1_6.nullish(value);
          if (tmp) {
            tmp = undefined !== value.length;
          }
          return tmp;
        };
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        ({ length: bag.minimum, length: bag.maximum, length: bag.length } = closure_1);
      });
      _zod._zod.check = (value) => {
        let iter = value;
        value = value.value;
        if (value.length !== closure_1.length) {
          const issues = iter.issues;
          let obj = { origin: outer1_6.getLengthableOrigin(value) };
          obj = {};
          if (length > closure_1.length) {
            obj.code = "too_big";
            obj.maximum = closure_1.length;
            let tmp2 = obj;
          } else {
            obj.code = "too_small";
            obj.minimum = closure_1.length;
            tmp2 = obj;
          }
          obj = { inclusive: true, exact: true, input: iter.value };
          iter = closure_0;
          obj.inst = closure_0;
          obj.continue = !closure_1.abort;
          obj = issues.push(Object.assign(obj, tmp2, obj));
        }
      };
    });
    exports.$ZodCheckStringFormat = fnResult.$constructor("$ZodCheckStringFormat", (_zod, pattern) => {
      const _exports = _zod;
      let closure_1 = pattern;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, pattern);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        bag.format = pattern.format;
        if (pattern.pattern) {
          if (null == bag.patterns) {
            const _Set = Set;
            const set = new Set();
            bag.patterns = set;
          }
          const patterns = bag.patterns;
          patterns.add(pattern.pattern);
        }
      });
      _zod = _zod._zod;
      const check = _zod.check;
      if (pattern.pattern) {
        if (null == check) {
          _zod.check = (value) => {
            pattern.pattern.lastIndex = 0;
            pattern = pattern.pattern;
            if (!pattern.test(value.value)) {
              const issues = value.issues;
              let obj = { origin: "string", code: "invalid_format", format: pattern.format, input: value.value };
              if (pattern.pattern) {
                obj = { pattern: pattern.pattern.toString() };
                const str = pattern.pattern;
              } else {
                obj = {};
              }
              const obj1 = { inst: closure_0, continue: !pattern.abort };
              issues.push(Object.assign(obj, obj, obj1));
            }
          };
        }
      } else if (null == check) {
        _zod.check = () => {

        };
      }
    });
    exports.$ZodCheckRegex = fnResult.$constructor("$ZodCheckRegex", (_zod) => {
      const _exports = _zod;
      let closure_1 = arg1;
      const $ZodCheckStringFormat = _exports.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        closure_1.pattern.lastIndex = 0;
        const pattern = closure_1.pattern;
        if (!pattern.test(value.value)) {
          const issues = value.issues;
          const obj = { origin: "string", code: "invalid_format", format: "regex", input: value.value, pattern: closure_1.pattern.toString(), inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
          const str = closure_1.pattern;
        }
      };
    });
    exports.$ZodCheckLowerCase = fnResult.$constructor("$ZodCheckLowerCase", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_5.lowercase;
      }
      const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, pattern);
    });
    exports.$ZodCheckUpperCase = fnResult.$constructor("$ZodCheckUpperCase", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_5.uppercase;
      }
      const $ZodCheckStringFormat = exports.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, pattern);
    });
    exports.$ZodCheckIncludes = fnResult.$constructor("$ZodCheckIncludes", (_zod, position) => {
      const _exports = _zod;
      let closure_1 = position;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, position);
      const escapeRegexResult = closure_6.escapeRegex(position.includes);
      let combined = escapeRegexResult;
      if ("number" === typeof position.position) {
        const _HermesInternal = HermesInternal;
        combined = "^.{" + position.position + "}" + escapeRegexResult;
      }
      const regExp = new RegExp(combined);
      position.pattern = regExp;
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (null == bag.patterns) {
          const _Set = Set;
          const set = new Set();
          bag.patterns = set;
        }
        const patterns = bag.patterns;
        patterns.add(regExp);
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.includes(position.includes, position.position)) {
          const issues = value.issues;
          const obj = { origin: "string", code: "invalid_format", format: "includes", includes: position.includes, input: value.value, inst: closure_0, continue: !position.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckStartsWith = fnResult.$constructor("$ZodCheckStartsWith", (_zod, prefix) => {
      const _exports = _zod;
      let closure_1 = prefix;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, prefix);
      const regExp = new RegExp("^" + closure_6.escapeRegex(prefix.prefix) + ".*");
      if (null == prefix.pattern) {
        prefix.pattern = regExp;
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (null == bag.patterns) {
          const _Set = Set;
          const set = new Set();
          bag.patterns = set;
        }
        const patterns = bag.patterns;
        patterns.add(regExp);
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.startsWith(prefix.prefix)) {
          const issues = value.issues;
          const obj = { origin: "string", code: "invalid_format", format: "starts_with", prefix: prefix.prefix, input: value.value, inst: closure_0, continue: !prefix.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckEndsWith = fnResult.$constructor("$ZodCheckEndsWith", (_zod, suffix) => {
      const _exports = _zod;
      let closure_1 = suffix;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, suffix);
      const regExp = new RegExp(".*" + closure_6.escapeRegex(suffix.suffix) + "$");
      if (null == suffix.pattern) {
        suffix.pattern = regExp;
      }
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        const bag = _zod._zod.bag;
        if (null == bag.patterns) {
          const _Set = Set;
          const set = new Set();
          bag.patterns = set;
        }
        const patterns = bag.patterns;
        patterns.add(regExp);
      });
      _zod._zod.check = (value) => {
        value = value.value;
        if (!value.endsWith(suffix.suffix)) {
          const issues = value.issues;
          const obj = { origin: "string", code: "invalid_format", format: "ends_with", suffix: suffix.suffix, input: value.value, inst: closure_0, continue: !suffix.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckProperty = fnResult.$constructor("$ZodCheckProperty", (_zod) => {
      const _exports = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      _zod._zod.check = (value) => {
        let closure_0 = value;
        const _zod = closure_0.schema._zod;
        const runResult = _zod.run({ value: value.value[closure_0.property], issues: [] }, {});
        if (runResult instanceof Promise) {
          return runResult.then((arg0) => {
            outer2_8(arg0, value, value.property);
          });
        } else {
          outer1_8(runResult, value, closure_0.property);
        }
        const obj = { value: value.value[closure_0.property], issues: [] };
      };
    });
    exports.$ZodCheckMimeType = fnResult.$constructor("$ZodCheckMimeType", (_zod, mime) => {
      const _exports = _zod;
      let closure_1 = mime;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, mime);
      const set = new Set(mime.mime);
      const onattach = _zod._zod.onattach;
      onattach.push((_zod) => {
        _zod._zod.bag.mime = mime.mime;
      });
      _zod._zod.check = (value) => {
        if (!set.has(value.value.type)) {
          const issues = value.issues;
          const obj = { code: "invalid_value", values: mime.mime, input: value.value.type, inst: closure_0, continue: !mime.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCheckOverwrite = fnResult.$constructor("$ZodCheckOverwrite", (_zod) => {
      const _exports = arg1;
      const $ZodCheck = _exports.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      _zod._zod.check = (value) => {
        value.value = closure_0.tx(value.value);
      };
    });
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
