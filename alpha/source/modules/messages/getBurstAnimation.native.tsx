// Module ID: 4782
// Function ID: 4783
// Name: getBurstAnimation
// Dependencies: [5, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 2]
// Exports: getBurstAnimation

// Module 4782 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_4783");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_4784");
    }
  },
  {
    load() {
      return require("module_4785");
    }
  },
  {
    load() {
      return require("module_4786");
    }
  },
  {
    load() {
      return require("module_4787");
    }
  },
  {
    load() {
      return require("module_4788");
    }
  },
  {
    load() {
      return require("module_4789");
    }
  },
  {
    load() {
      return require("module_4790");
    }
  },
  {
    load() {
      return require("module_4791");
    }
  },
  {
    load() {
      return require("module_4792");
    }
  },
  {
    load() {
      return require("module_4793");
    }
  },
  {
    load() {
      return require("module_4794");
    }
  },
  {
    load() {
      return require("module_4795");
    }
  },
  {
    load() {
      return require("module_4796");
    }
  },
  {
    load() {
      return require("module_4797");
    }
  },
  {
    load() {
      return require("module_4798");
    }
  },
  {
    load() {
      return require("module_4799");
    }
  },
  {
    load() {
      return require("module_4800");
    }
  }
];
const obj2 = {
  load() {
    return require("module_4801");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_4802");
    }
  },
  {
    load() {
      return require("module_4803");
    }
  },
  {
    load() {
      return require("module_4804");
    }
  },
  {
    load() {
      return require("module_4805");
    }
  },
  {
    load() {
      return require("module_4806");
    }
  },
  {
    load() {
      return require("module_4807");
    }
  },
  {
    load() {
      return require("module_4808");
    }
  },
  {
    load() {
      return require("module_4809");
    }
  },
  {
    load() {
      return require("module_4810");
    }
  },
  {
    load() {
      return require("module_4811");
    }
  },
  {
    load() {
      return require("module_4812");
    }
  },
  {
    load() {
      return require("module_4813");
    }
  },
  {
    load() {
      return require("module_4814");
    }
  },
  {
    load() {
      return require("module_4815");
    }
  },
  {
    load() {
      return require("module_4816");
    }
  },
  {
    load() {
      return require("module_4817");
    }
  },
  {
    load() {
      return require("module_4818");
    }
  }
];
let closure_0 = _asyncToGeneratorDefault((arg0, arg1, arg2) => {
  let closure_4;
  closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const length = arg3;
  let c6 = 0;
  let c7 = 0;
  const iter = (function*(arg0, value, arg2) {
    if (c7 === 2) {
      c7 = 3;
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
        let flag;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_5 = tmp4;
            let burstAnimationHash = tmp;
            flag = length;
            if (length === undefined) {
              flag = false;
            }
            burstAnimationHash = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Path", done: true };
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else {
          const _HermesInternal = HermesInternal;
          const obj6 = closure_0(closure_1[37]);
          burstAnimationHash = obj6.getBurstAnimationHash("" + closure_0 + closure_1 + closure_2);
          c7 = 3;
          const obj5 = { value: obj.load(), done: true };
          return obj5;
        }
      } catch (tmp14) {
        c7 = 3;
        throw tmp14;
      }
    }
  })();
  iter.next();
  return iter;
});
const result = size.fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export function getBurstAnimation() {
  return closure_0(...arguments);
}
