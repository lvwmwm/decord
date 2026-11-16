// Module ID: 12249
// Function ID: 12250
// Name: input
// Dependencies: [12240, 12160, 12248]
// Exports: input, output

// Module 12249 (input)
import captureStackTrace from "captureStackTrace" /* 12160 */;
import ZodType2 from "ZodType" /* 12240 */;
import visit from "visit" /* 12248 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  const tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
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
let closure_3 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_4 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = closure_3(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_4(obj, __esModule);
  return obj;
});
const ZodType = tmp5(ZodType2);
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

export function input(arg0) {
  let obj = {
    pipe(_zod) {
      let _in;
      let checks;
      let items;
      let out;
      const def = _zod._zod.def;
      const traits = def.in._zod.traits;
      if (traits.has("$ZodTransform")) {
        ({ out, checks } = def);
        let length;
        if (checks != null) {
          length = checks.length;
        }
        let cloneResult = out;
        if (length) {
          const def2 = out._zod.def;
          const clone = captureStackTrace.clone;
          let checks1 = def2.checks;
          const mergeDefs = captureStackTrace.mergeDefs;
          if (checks1 == null) {
            checks1 = [];
          }
          const obj = { checks: items };
          items = [];
          HermesBuiltin.arraySpread(items, checks, HermesBuiltin.arraySpread(items, checks1, 0));
          cloneResult = clone(out, mergeDefs(def2, obj), { parent: true });
        }
        _in = cloneResult;
      } else {
        _in = def.in;
      }
      return _in;
    },
    default: (_zod, arg1) => {
      let optionalResult = _zod;
      if (arg1) {
        optionalResult = ZodType.optional(_zod._zod.def.innerType);
      }
      return optionalResult;
    },
    catch: (_zod, arg1) => {
      let innerType = _zod;
      if (arg1) {
        innerType = _zod._zod.def.innerType;
      }
      return innerType;
    }
  };
  return visit.visit(arg0, obj);
}
export function output(arg0) {
  let obj = {
    pipe(_zod) {
      let checks;
      let items;
      let out;
      ({ out, checks } = _zod._zod.def);
      let length;
      if (checks != null) {
        length = checks.length;
      }
      let cloneResult = out;
      if (length) {
        const def = out._zod.def;
        const clone = captureStackTrace.clone;
        let checks1 = def.checks;
        const mergeDefs = captureStackTrace.mergeDefs;
        if (checks1 == null) {
          checks1 = [];
        }
        const obj = { checks: items };
        items = [];
        HermesBuiltin.arraySpread(items, checks, HermesBuiltin.arraySpread(items, checks1, 0));
        cloneResult = clone(out, mergeDefs(def, obj), { parent: true });
      }
      return cloneResult;
    },
    prefault(_zod, arg1) {
      let innerType = _zod;
      if (arg1) {
        innerType = _zod._zod.def.innerType;
      }
      return innerType;
    }
  };
  return visit.visit(arg0, obj);
}
