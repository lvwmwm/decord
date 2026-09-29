// Module ID: 4763
// Function ID: 4764
// Name: _playHaptic
// Dependencies: [5, 17, 4759]
// Exports: playHaptic

// Module 4763 (_playHaptic)
import _modDef4759 from "module_4759" /* 4759 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _playHaptic(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        if (obj.isEnabled()) {
          c2 = 3;
          const obj4 = { value: tmp6(tmp7[2]).triggerPattern(tmp4, tmp5), done: true };
          return obj4;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
        obj = _modDef4759;
        tmp4 = closure_0;
        tmp5 = closure_1;
        tmp6 = importDefault;
        tmp7 = dependencyMap;
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
};
const Platform = fn(17).Platform;

export const playHaptic = function playHaptic(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
