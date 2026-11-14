// Module ID: 12161
// Function ID: 12162
// Name: _parse
// Dependencies: [5, 12159, 12162, 12160]
// Exports: _decode, _decodeAsync, _encode, _encodeAsync, _parse, _parseAsync, _safeDecode, _safeDecodeAsync, _safeEncode, _safeEncodeAsync, _safeParse, _safeParseAsync, validate, validateAsync

// Module 12161 (_parse)
import NEVER2 from "NEVER" /* 12159 */;
import captureStackTrace2 from "captureStackTrace" /* 12160 */;
import $ZodError2 from "$ZodError" /* 12162 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _undefined, c3, closure_4, closure_5, closure_6, closure_7, hasOwnProperty;

const f104120 = (arg0) => {
  closure_3 = arg0;
  let c1;
  c2 = undefined;
};
let self = this;
function finalizeParams(arg0, callee) {
  let Err;
  callee = undefined;
  if (callee != null) {
    callee = callee.callee;
  }
  if (callee == null) {
    callee = arg0;
  }
  const obj = { callee, Err };
  Err = undefined;
  if (callee != null) {
    Err = callee.Err;
  }
  return obj;
}
function failure(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  closure_2 = arg2;
  const obj = { success: false };
  Object.defineProperty(obj, "error", {
    get: function() {
      let tmp = closure_3;
      if (!tmp) {
        const self = this;
        const self2 = this;
        const tmp4 = new closure_0(_undefined.map((item) => closure_2_5.finalizeIssue(item, closure_1_2, closure_2_4.config())));
        closure_3 = tmp4;
        _undefined = undefined;
        c2 = undefined;
        tmp = tmp4;
      }
      return tmp;
    },
    set: f104120
  });
  return obj;
}
let tmp2 = this && self.__createBinding;
if (!tmp2) {
  let tmp3 = globalThis;
  let _Object = Object;
  tmp2 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
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
let closure_2 = tmp2;
let tmp4 = self && self.__setModuleDefault;
if (!tmp4) {
  let tmp5 = globalThis;
  let _Object2 = Object;
  tmp4 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_3 = tmp4;
let tmp6 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
const NEVER = tmp6(NEVER2);
const $ZodError = tmp6($ZodError2);
let captureStackTrace = tmp6(captureStackTrace2);
let closure_8 = Symbol.for("zod.compile.invalid");
let closure_9 = Symbol.for("zod.compile.fallback");
let _exports = _asyncToGenerator(async (value, arg1, arg2) => {
  let closure_1 = arg1;
  closure_2 = arg2;
  let c4 = 0;
  let c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            let obj5;
            closure_3 = tmp;
            value = undefined;
            const tmp17 = value;
            const tmp18 = closure_1;
            if (closure_2) {
              const obj4 = { async: true, abortEarly: true };
              const merged = Object.assign(tmp19);
              obj5 = obj4;
            } else {
              obj5 = { async: true, abortEarly: true };
            }
            const _zod = tmp17._zod;
            const obj6 = { value: tmp18, issues: [] };
            value = _zod.run(obj6, obj5);
            if (value instanceof Promise) {
              c4 = 1;
              c5 = 1;
              return { value, done: false };
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        }
        c5 = 3;
        return { value: 0 === value.issues.length, done: true };
      } catch (tmp13) {
        c5 = 3;
        throw tmp13;
      }
    }
  })();
});
(() => {
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

export const _parse = (arg0) => {
  let closure_0 = arg0;
  function fn(_zod, value, arg2, Err) {
    let obj;
    const tmp = arg2;
    if (tmp) {
      const obj2 = { async: false };
      const merged = Object.assign(arg2);
      obj = obj2;
    } else {
      obj = { async: false };
    }
    _zod = _zod._zod;
    const obj3 = { value, issues: [] };
    const iter = _zod.run(obj3, obj);
    if (iter instanceof Promise) {
      const self3 = this;
      const self4 = this;
      const ZodAsyncError = new NEVER.$ZodAsyncError();
      throw ZodAsyncError;
    } else if (iter.issues.length) {
      Err = undefined;
      if (Err != null) {
        Err = Err.Err;
      }
      if (Err == null) {
        Err = closure_0;
      }
      const issues = iter.issues;
      const self = this;
      const self2 = this;
      const err = new Err(issues.map((item) => closure_2_5.finalizeIssue(item, obj, closure_2_4.config())));
      let callee;
      captureStackTrace = captureStackTrace.captureStackTrace;
      if (Err != null) {
        callee = Err.callee;
      }
      if (callee == null) {
        callee = fn;
      }
      captureStackTrace(err, callee);
      throw err;
    } else {
      return iter.value;
    }
  }
  return fn;
};
export const parse = exports._parse($ZodError.$ZodRealError);
export const _parseAsync = (arg0) => {
  let fn;
  let closure_0 = fn((arg0, arg1, value, arg3) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    return (function*(arg0, value, arg2, arg3) {
      const f145784 = (item) => closure_5.finalizeIssue(item, closure_1_1, closure_4.config());
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_7 = tmp3;
              closure_6 = tmp3;
              closure_0 = closure_3;
              let obj5;
              value = undefined;
              closure_3 = undefined;
              const tmp37 = closure_0;
              const tmp38 = closure_1;
              if (value) {
                const obj4 = { async: true };
                const merged = Object.assign(tmp39);
                obj5 = obj4;
              } else {
                obj5 = { async: true };
              }
              const _zod = tmp37._zod;
              const obj6 = { value: tmp38, issues: [] };
              value = _zod.run(obj6, obj5);
              if (value instanceof Promise) {
                c8 = 1;
                c9 = 1;
                return { value, done: false };
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            return { value, done: true };
          }
          if (value.issues.length) {
            let Err;
            if (closure_0 != null) {
              Err = closure_0.Err;
            }
            closure_4 = Err;
            if (Err == null) {
              closure_4 = closure_0;
            }
            const issues = value.issues;
            const self = this;
            const self2 = this;
            closure_3 = new closure_4(issues.map(f145784));
            let callee;
            captureStackTrace = captureStackTrace.captureStackTrace;
            const tmp22 = new closure_4(issues.map(f145784));
            const tmp25 = closure_3;
            if (closure_0 != null) {
              callee = closure_0.callee;
            }
            closure_5 = callee;
            if (callee == null) {
              closure_5 = closure_1;
            }
            captureStackTrace(tmp25, closure_5);
            throw closure_3;
          } else {
            c9 = 3;
            return { value: value.value, done: true };
          }
        } catch (tmp33) {
          c9 = 3;
          throw tmp33;
        }
      }
    })();
  });
  fn = function fn(arg0, arg1, arg2, arg3) {
    return closure_0(...arguments);
  };
  return fn;
};
export const parseAsync = exports._parseAsync($ZodError.$ZodRealError);
export const _safeParse = (arg0) => {
  let closure_0 = arg0;
  return function(_zod, value, arg2) {
    let obj;
    let tmp = arg2;
    if (tmp) {
      const obj2 = { async: false };
      const merged = Object.assign(arg2);
      obj = obj2;
    } else {
      obj = { async: false };
    }
    _zod = _zod._zod;
    const obj3 = { value, issues: [] };
    const iter = _zod.run(obj3, obj);
    if (iter instanceof Promise) {
      let self = this;
      let self2 = this;
      const ZodAsyncError = new NEVER.$ZodAsyncError();
      throw ZodAsyncError;
    } else {
      let obj5;
      if (iter.issues.length) {
        const issues = iter.issues;
        let c2 = obj;
        closure_3 = undefined;
        const obj4 = { success: false };
        Object.defineProperty(obj4, "error", {
          get: function() {
                let tmp = closure_3;
                if (!tmp) {
                  const self = this;
                  const self2 = this;
                  const tmp4 = new closure_0(_undefined.map((item) => closure_2_5.finalizeIssue(item, closure_1_2, closure_2_4.config())));
                  closure_3 = tmp4;
                  _undefined = undefined;
                  c2 = undefined;
                  tmp = tmp4;
                }
                return tmp;
              },
          set: f104120
        });
        obj5 = obj4;
      } else {
        obj5 = { success: true, data: iter.value };
      }
      return obj5;
    }
  };
};
export const safeParse = exports._safeParse($ZodError.$ZodRealError);
export const _safeParseAsync = (arg0) => {
  let closure_0 = _asyncToGenerator(async (arg0, value, arg2) => {
    closure_0 = arg0;
    closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let obj5;
          let obj8;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp;
              obj5 = undefined;
              value = undefined;
              const tmp24 = closure_0;
              const tmp25 = value;
              if (closure_2) {
                const obj4 = { async: true };
                const merged = Object.assign(tmp26);
                obj5 = obj4;
              } else {
                obj5 = { async: true };
              }
              const _zod = tmp24._zod;
              const obj6 = { value: tmp25, issues: [] };
              value = _zod.run(obj6, obj5);
              if (value instanceof Promise) {
                c5 = 1;
                c6 = 1;
                return { value, done: false };
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          }
          if (value.issues.length) {
            obj8 = closure_2_7(closure_0, value.issues, obj5);
          } else {
            obj8 = { success: true, data: value.value };
          }
          c6 = 3;
          return { value: obj8, done: true };
        } catch (tmp20) {
          c6 = 3;
          throw tmp20;
        }
      }
    })();
  });
  return function(arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const safeParseAsync = exports._safeParseAsync($ZodError.$ZodRealError);
export const validate = function(_zod, value, arg2) {
  let fallbackRunResult;
  let obj;
  const validator = _zod._zod.bag.validator;
  if (undefined !== validator) {
    if (validator(value) !== closure_8) {
      return true;
    } else if (true === validator.definite) {
      if (undefined === arg2) {
        return false;
      }
    }
  }
  if (arg2) {
    const obj2 = { async: false, abortEarly: true };
    const merged = Object.assign(arg2);
    obj = obj2;
  } else {
    obj = { async: false, abortEarly: true };
  }
  const fallbackRun = _zod._zod.bag.fallbackRun;
  if (fallbackRun) {
    obj[closure_9] = true;
    const obj3 = { value, issues: [] };
    fallbackRunResult = fallbackRun(obj3, obj);
  } else {
    _zod = _zod._zod;
    const obj4 = { value, issues: [] };
    fallbackRunResult = _zod.run(obj4, obj);
  }
  if (fallbackRunResult instanceof Promise) {
    const self = this;
    const self2 = this;
    const ZodAsyncError = new NEVER.$ZodAsyncError();
    throw ZodAsyncError;
  } else {
    return 0 === fallbackRunResult.issues.length;
  }
};
export function validateAsync(arg0, arg1, arg2) {
  return closure_0(...arguments);
}
export const _encode = (arg0) => {
  let closure_0 = exports._parse(arg0);
  function fn(arg0, arg1, arg2, callee) {
    let Err;
    let obj;
    const tmp = arg2;
    if (tmp) {
      const obj2 = { direction: "backward" };
      const merged = Object.assign(arg2);
      obj = obj2;
    } else {
      obj = { direction: "backward" };
    }
    callee = undefined;
    const tmp5 = closure_0;
    const tmp6 = fn;
    if (callee != null) {
      callee = callee.callee;
    }
    if (callee == null) {
      callee = tmp6;
    }
    const obj3 = { callee, Err };
    Err = undefined;
    if (callee != null) {
      Err = callee.Err;
    }
    return tmp5(arg0, arg1, obj, obj3);
  }
  return fn;
};
export const encode = exports._encode($ZodError.$ZodRealError);
export const _decode = (arg0) => {
  let closure_0 = exports._parse(arg0);
  function fn(arg0, arg1, arg2, callee) {
    let Err;
    callee = undefined;
    const tmp = closure_0;
    const tmp2 = fn;
    if (callee != null) {
      callee = callee.callee;
    }
    if (callee == null) {
      callee = tmp2;
    }
    const obj = { callee, Err };
    Err = undefined;
    if (callee != null) {
      Err = callee.Err;
    }
    return tmp(arg0, arg1, arg2, obj);
  }
  return fn;
};
export const decode = exports._decode($ZodError.$ZodRealError);
export const _encodeAsync = (arg0) => {
  let fn;
  _exports._parseAsync(arg0);
  _exports = fn(function*(arg0, arg1, arg2, arg3) {
    let c4;
    let c5;
    let obj5;
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    const tmp20 = closure_3;
    if (closure_2) {
      const obj4 = { direction: "backward" };
      const merged = Object.assign(tmp19);
      obj5 = obj4;
    } else {
      obj5 = { direction: "backward" };
    }
    yield closure_0(closure_0, closure_1, obj5, closure_2_6(closure_1, tmp20));
    return arg1;
  });
  fn = function fn(arg0, arg1, arg2, arg3) {
    return closure_0(...arguments);
  };
  return fn;
};
export const encodeAsync = exports._encodeAsync($ZodError.$ZodRealError);
export const _decodeAsync = (arg0) => {
  let fn;
  _exports._parseAsync(arg0);
  _exports = fn(function*(arg0, arg1, arg2, arg3) {
    let c4;
    let c5;
    closure_0 = arg0;
    let closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    yield closure_0(closure_0, closure_1, closure_2, closure_2_6(closure_1, closure_3));
    return arg1;
  });
  fn = function fn(arg0, arg1, arg2, arg3) {
    return closure_0(...arguments);
  };
  return fn;
};
export const decodeAsync = exports._decodeAsync($ZodError.$ZodRealError);
export const _safeEncode = (arg0) => {
  let closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    let obj;
    const tmp = arg2;
    if (tmp) {
      const obj2 = { direction: "backward" };
      const merged = Object.assign(arg2);
      obj = obj2;
    } else {
      obj = { direction: "backward" };
    }
    return exports._safeParse(closure_0)(arg0, arg1, obj);
  };
};
export const safeEncode = exports._safeEncode($ZodError.$ZodRealError);
export const _safeDecode = (arg0) => {
  let closure_0 = arg0;
  return (arg0, arg1, arg2) => exports._safeParse(closure_0)(arg0, arg1, arg2);
};
export const safeDecode = exports._safeDecode($ZodError.$ZodRealError);
export const _safeEncodeAsync = (arg0) => {
  let closure_0 = _asyncToGenerator(async (arg0, value, arg2) => {
    closure_0 = arg0;
    let closure_1 = value;
    closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let obj;
          const tmp3 = closure_0;
          const tmp4 = closure_1;
          if (closure_2) {
            const obj4 = { direction: "backward" };
            const merged = Object.assign(tmp5);
            obj = obj4;
          } else {
            obj = { direction: "backward" };
          }
          c3 = 3;
          const obj5 = { value: closure_0._safeParseAsync(closure_0)(tmp3, tmp4, obj), done: true };
          return obj5;
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return function(arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const safeEncodeAsync = exports._safeEncodeAsync($ZodError.$ZodRealError);
export const _safeDecodeAsync = (arg0) => {
  let closure_0 = _asyncToGenerator(async (arg0, value, arg2) => {
    closure_0 = arg0;
    let closure_1 = value;
    closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c3 = 3;
          const obj = { value: closure_0._safeParseAsync(closure_0)(closure_0, closure_1, closure_2), done: true };
          return obj;
        }
      } catch (tmp8) {
        c3 = 3;
        throw tmp8;
      }
    }
  });
  return function(arg0, arg1, arg2) {
    return closure_0(...arguments);
  };
};
export const safeDecodeAsync = exports._safeDecodeAsync($ZodError.$ZodRealError);
