// Module ID: 12784
// Function ID: 12785
// Dependencies: [12770]
// Exports: compile, generate

// Module 12784
import _mod12770 from "module_12770" /* 12770 */;

let fn = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const module_12770 = fn(_mod12770);

export function compile(arg0) {
  const first = arg0[0];
  const diff = arg0[1] - 1;
  if (diff < 0) {
    if (first <= 0) {
      return module_12770.default.falseFunc;
    }
  }
  if (-1 === first) {
    return (arg0) => arg0 <= diff;
  } else if (0 === first) {
    return (arg0) => arg0 === diff;
  } else if (1 === first) {
    let fn;
    if (diff < 0) {
      fn = module_12770.default.trueFunc;
    } else {
      fn = (arg0) => arg0 >= diff;
    }
    return fn;
  } else {
    const _Math = Math;
    const absolute = Math.abs(first);
    let closure_2 = (diff % absolute + absolute) % absolute;
    return first > 1 ? ((arg0) => arg0 >= diff && arg0 % absolute === closure_2) : ((arg0) => arg0 <= diff && arg0 % absolute === closure_2);
  }
}
export function generate(arg0) {
  const first = arg0[0];
  const diff = arg0[1] - 1;
  let closure_1 = diff;
  let closure_2 = 0;
  if (first < 0) {
    let closure_3 = tmp4;
    let closure_4 = (diff % tmp4 + tmp4) % tmp4;
    return () => {
      closure_2 = tmp + 1;
      const sum = closure_4 + closure_3 * tmp;
      let tmp3 = null;
      if (sum <= closure_1) {
        tmp3 = sum;
      }
      return tmp3;
    };
  } else {
    let fn;
    if (0 === first) {
      let fn2;
      if (diff < 0) {
        fn2 = () => null;
      } else {
        fn2 = () => {
          closure_2 = tmp + 1;
          let tmp2 = null;
          if (0 == +closure_2) {
            tmp2 = closure_1;
          }
          return tmp2;
        };
      }
      fn = fn2;
    } else {
      if (diff < 0) {
        let tmp3 = globalThis;
        const _Math = Math;
        closure_1 = diff + first * Math.ceil(-diff / first);
      }
      fn = () => {
        closure_2 = tmp + 1;
        return first * +closure_2 + closure_1;
      };
    }
    return fn;
  }
}
