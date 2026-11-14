// Module ID: 12248
// Function ID: 12249
// Name: visit
// Dependencies: [109, 12163, 12160]
// Exports: visit

// Module 12248 (visit)
import $ZodType2 from "$ZodType" /* 12163 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let hasOwnProperty, map;

let self = this;
let closure_4 = ["_cachedInner"];
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
let closure_5 = tmp;
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
let closure_6 = tmp3;
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
        let tmp6 = closure_5(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_6(obj, __esModule);
  return obj;
});
const $ZodType = tmp5($ZodType2);
let closure_8 = Symbol("z.visit/resolving");
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

export function visit(_zod, fn) {
  function mapInner(_zod) {
    let catchall2;
    let clone4;
    let clone4Result;
    let clone8;
    let clone8Result;
    let obj10;
    let obj6;
    let rest2;
    let tmp27;
    let tmp31;
    let tmp69;
    let tmp70;
    let tmp74;
    let def = _zod._zod.def;
    switch (def.type) {
      case "object":
      {
        let catchall;
        let shape = def.shape;
        let tmp104 = globalThis;
        let _Object = Object;
        let keys = Object.keys(shape);
        let flag3 = false;
        let obj2 = {};
        let tmp106 = keys;
        let iter3 = keys[Symbol.iterator]();
        let num10 = 0;
        let tmp107 = keys;
        let nextResult = iter3.next();
        let tmp109 = iter3;
        while (iter3 !== undefined) {
          let tmp111 = closure_3;
          let tmp110 = nextResult;
          let tmp112 = closure_3(shape[nextResult]);
          let tmp113 = tmp112;
          if (tmp112 !== shape[nextResult]) {
            flag3 = true;
          }
          let tmp114 = nextResult;
          let tmp115 = tmp112;
          obj2[tmp110] = tmp113;
          continue;
        }
        ({ catchall, catchall: catchall2 } = def);
        if (catchall2) {
          let tmp116 = closure_3;
          let tmp117 = closure_3(def.catchall);
          catchall2 = tmp117 !== def.catchall;
          catchall = tmp117;
        }
        if (catchall2) {
          flag3 = true;
        }
        let tmp118 = flag3;
        let clone11Result = _zod;
        if (flag3) {
          let tmp120 = closure_1_0;
          let tmp121 = closure_1_2;
          let obj3 = { shape: obj2, catchall };
          let tmp122 = obj3;
          let tmp123 = def;
          let clone11 = closure_1_0(closure_1_2[2]).clone;
          let merged = Object.assign(def);
          clone11Result = clone11(_zod, obj3);
        }
        return clone11Result;
      }
      case "array":
      {
        let tmp96 = closure_3;
        let num9 = 0;
        let tmp97 = closure_3(def.element);
        let clone10Result = _zod;
        if (tmp97 !== def.element) {
          let tmp99 = closure_1_0;
          let tmp100 = closure_1_2;
          let obj4 = { element: tmp97 };
          let tmp101 = obj4;
          let tmp102 = def;
          let clone10 = closure_1_0(closure_1_2[2]).clone;
          let merged1 = Object.assign(def);
          clone10Result = clone10(_zod, obj4);
        }
        return clone10Result;
      }
      case "tuple":
      {
        let rest;
        let items = def.items;
        let flag2 = false;
        let items1 = [];
        let tmp78 = items;
        let iter2 = items[Symbol.iterator]();
        let num8 = 0;
        let tmp79 = items;
        let nextResult1 = iter2.next();
        let tmp81 = iter2;
        while (iter2 !== undefined) {
          let tmp82 = closure_3;
          let tmp83 = closure_3(nextResult1);
          let tmp84 = tmp83;
          if (tmp83 !== nextResult1) {
            flag2 = true;
          }
          let tmp85 = tmp83;
          let arr = items1.push(tmp84);
          continue;
        }
        ({ rest, rest: rest2 } = def);
        if (rest2) {
          let tmp87 = closure_3;
          let tmp88 = closure_3(def.rest);
          rest2 = tmp88 !== def.rest;
          rest = tmp88;
        }
        if (rest2) {
          flag2 = true;
        }
        let tmp89 = flag2;
        let clone9Result = _zod;
        if (flag2) {
          let tmp91 = closure_1_0;
          let tmp92 = closure_1_2;
          let obj5 = { items: items1, rest };
          let tmp93 = obj5;
          let tmp94 = def;
          let clone9 = closure_1_0(closure_1_2[2]).clone;
          let merged2 = Object.assign(def);
          clone9Result = clone9(_zod, obj5);
        }
        return clone9Result;
      }
      case "record":
      {
        let tmp68 = closure_3;
        let num7 = 0;
        tmp69 = closure_3(def.keyType);
        tmp70 = closure_3(def.valueType);
        if (tmp69 !== def.keyType) {
          let tmp72 = closure_1_0;
          let tmp73 = closure_1_2;
          tmp74 = closure_1_0(closure_1_2[2]);
          clone8 = tmp74.clone;
          obj6 = { keyType: tmp69, valueType: tmp70 };
          let tmp75 = obj6;
          let tmp76 = def;
          let merged3 = Object.assign(def);
          clone8Result = clone8(_zod, obj6);
        } else {
          clone8Result = _zod;
        }
        return clone8Result;
      }
      case "map":
      {
        let tmp68 = closure_3;
        let num7 = 0;
        tmp69 = closure_3(def.keyType);
        tmp70 = closure_3(def.valueType);
        if (tmp69 !== def.keyType) {
          let tmp72 = closure_1_0;
          let tmp73 = closure_1_2;
          tmp74 = closure_1_0(closure_1_2[2]);
          clone8 = tmp74.clone;
          obj6 = { keyType: tmp69, valueType: tmp70 };
          let tmp75 = obj6;
          let tmp76 = def;
          let merged3 = Object.assign(def);
          clone8Result = clone8(_zod, obj6);
        } else {
          clone8Result = _zod;
        }
        return clone8Result;
      }
      case "set":
      {
        let tmp60 = closure_3;
        let num6 = 0;
        let tmp61 = closure_3(def.valueType);
        let clone7Result = _zod;
        if (tmp61 !== def.valueType) {
          let tmp63 = closure_1_0;
          let tmp64 = closure_1_2;
          let obj7 = { valueType: tmp61 };
          let tmp65 = obj7;
          let tmp66 = def;
          let clone7 = closure_1_0(closure_1_2[2]).clone;
          let merged4 = Object.assign(def);
          clone7Result = clone7(_zod, obj7);
        }
        return clone7Result;
      }
      case "union":
      {
        let options = def.options;
        let flag = false;
        let items2 = [];
        let tmp44 = options;
        let iter = options[Symbol.iterator]();
        let num5 = 0;
        let tmp45 = options;
        let nextResult2 = iter.next();
        let tmp47 = iter;
        while (iter !== undefined) {
          let tmp48 = closure_3;
          let tmp49 = closure_3(nextResult2);
          let tmp50 = tmp49;
          if (tmp49 !== nextResult2) {
            flag = true;
          }
          let tmp51 = tmp49;
          let arr2 = items2.push(tmp50);
          continue;
        }
        let tmp53 = flag;
        let clone6Result = _zod;
        if (flag) {
          let tmp55 = closure_1_0;
          let tmp56 = closure_1_2;
          let obj8 = { options: items2 };
          let tmp57 = obj8;
          let tmp58 = def;
          let clone6 = closure_1_0(closure_1_2[2]).clone;
          let merged5 = Object.assign(def);
          clone6Result = clone6(_zod, obj8);
        }
        return clone6Result;
      }
      case "intersection":
      {
        let clone5Result;
        let tmp35 = closure_3;
        let num4 = 0;
        let tmp36 = closure_3(def.left);
        let tmp37 = closure_3(def.right);
        if (tmp36 !== def.left) {
          let tmp39 = closure_1_0;
          let tmp40 = closure_1_2;
          let obj9 = { left: tmp36, right: tmp37 };
          let tmp41 = obj9;
          let tmp42 = def;
          let clone5 = closure_1_0(closure_1_2[2]).clone;
          let merged6 = Object.assign(def);
          clone5Result = clone5(_zod, obj9);
        } else {
          clone5Result = _zod;
        }
        return clone5Result;
      }
      case "optional":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "nullable":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "default":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "prefault":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "catch":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "readonly":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "nonoptional":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "promise":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "success":
      {
        let tmp26 = closure_3;
        let num3 = 0;
        tmp27 = closure_3(def.innerType);
        clone4Result = _zod;
        if (tmp27 !== def.innerType) {
          let tmp29 = closure_1_0;
          let tmp30 = closure_1_2;
          tmp31 = closure_1_0(closure_1_2[2]);
          clone4 = tmp31.clone;
          obj10 = { innerType: tmp27 };
          let tmp32 = obj10;
          let tmp33 = def;
          let merged7 = Object.assign(def);
          clone4Result = clone4(_zod, obj10);
        }
        return clone4Result;
      }
      case "pipe":
      {
        let clone3Result;
        let tmp17 = closure_3;
        let num2 = 0;
        let tmp18 = closure_3(def.in);
        let tmp19 = closure_3(def.out);
        if (tmp18 !== def.in) {
          let tmp21 = closure_1_0;
          let tmp22 = closure_1_2;
          let obj11 = { in: tmp18, out: tmp19 };
          let tmp23 = obj11;
          let tmp24 = def;
          let clone3 = closure_1_0(closure_1_2[2]).clone;
          let merged8 = Object.assign(def);
          clone3Result = clone3(_zod, obj11);
        } else {
          clone3Result = _zod;
        }
        return clone3Result;
      }
      case "function":
      {
        let clone2Result;
        let tmp8 = closure_3;
        let num = 0;
        let tmp9 = closure_3(def.input);
        let tmp10 = closure_3(def.output);
        if (tmp9 !== def.input) {
          let tmp12 = closure_1_0;
          let tmp13 = closure_1_2;
          let obj12 = { input: tmp9, output: tmp10 };
          let tmp14 = obj12;
          let tmp15 = def;
          let clone2 = closure_1_0(closure_1_2[2]).clone;
          let merged9 = Object.assign(def);
          clone2Result = clone2(_zod, obj12);
        } else {
          clone2Result = _zod;
        }
        return clone2Result;
      }
      case "lazy":
      {
        let _cachedInner;
        let closure_0;
        ({ getter: closure_0, _cachedInner } = def);
        let tmp = closure_1_3;
        let tmp2 = closure_1_4;
        let tmp4 = closure_1_0;
        let tmp5 = closure_1_2;
        let tmp3 = closure_1_3(def, closure_1_4);
        let obj = { getter };
        let tmp6 = obj;
        let clone = closure_1_0(closure_1_2[2]).clone;
        let merged10 = Object.assign(tmp3);
        return clone(_zod, obj);
      }
      default:
      {
        return _zod;
      }
    }
  }
  let closure_0 = fn;
  function run(_zod) {
    let closure_0 = _zod;
    const value = map.get(_zod);
    if (value === closure_1_8) {
      const self = this;
      const self2 = this;
      const obj2 = {
        type: "lazy",
        getter() {
            return closure_2_2.get(closure_0);
          }
      };
      ZodLazy = new ZodLazy.$ZodLazy(obj2);
      return ZodLazy;
    } else if (undefined !== value) {
      return value;
    } else {
      const result = obj.set(_zod, tmp2);
      const tmp4 = mapInner(_zod);
      const tmp6 = fn(tmp4, tmp4 !== _zod);
      const result1 = obj.set(_zod, tmp6);
      return tmp6;
    }
  }
  if (typeof fn !== "function") {
    fn = (arg0, arg1) => {
      let tmpResult = arg0;
      if (fn[arg0._zod.def.type]) {
        tmpResult = tmp(arg0, arg1);
      }
      return tmpResult;
    };
  }
  map = new Map();
  closure_0 = _zod;
  let ZodLazy = map.get(_zod);
  if (ZodLazy === closure_8) {
    const obj = {
      type: "lazy",
      getter() {
          return closure_2_2.get(closure_0);
        }
    };
    let self = this;
    let self2 = this;
    ZodLazy = new $ZodType.$ZodLazy(obj);
  } else if (undefined === ZodLazy) {
    let result = map.set(_zod, tmp2);
    let tmp4 = mapInner(_zod);
    const fnResult = fn(tmp4, tmp4 !== _zod);
    let result1 = map.set(_zod, fnResult);
    ZodLazy = fnResult;
  }
  return ZodLazy;
}
