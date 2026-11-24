// Module ID: 4876
// Function ID: 4877
// Name: getBurstAnimation
// Dependencies: [5, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4903, 4904, 4905, 4906, 4907, 4908, 4909, 4910, 4911, 4912, 4913, 2]
// Exports: getBurstAnimation

// Module 4876 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_4877");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_4878");
    }
  },
  {
    load() {
      return require("module_4879");
    }
  },
  {
    load() {
      return require("module_4880");
    }
  },
  {
    load() {
      return require("module_4881");
    }
  },
  {
    load() {
      return require("module_4882");
    }
  },
  {
    load() {
      return require("module_4883");
    }
  },
  {
    load() {
      return require("module_4884");
    }
  },
  {
    load() {
      return require("module_4885");
    }
  },
  {
    load() {
      return require("module_4886");
    }
  },
  {
    load() {
      return require("module_4887");
    }
  },
  {
    load() {
      return require("module_4888");
    }
  },
  {
    load() {
      return require("module_4889");
    }
  },
  {
    load() {
      return require("module_4890");
    }
  },
  {
    load() {
      return require("module_4891");
    }
  },
  {
    load() {
      return require("module_4892");
    }
  },
  {
    load() {
      return require("module_4893");
    }
  },
  {
    load() {
      return require("module_4894");
    }
  }
];
const obj2 = {
  load() {
    return require("module_4895");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_4896");
    }
  },
  {
    load() {
      return require("module_4897");
    }
  },
  {
    load() {
      return require("module_4898");
    }
  },
  {
    load() {
      return require("module_4899");
    }
  },
  {
    load() {
      return require("module_4900");
    }
  },
  {
    load() {
      return require("module_4901");
    }
  },
  {
    load() {
      return require("module_4902");
    }
  },
  {
    load() {
      return require("module_4903");
    }
  },
  {
    load() {
      return require("module_4904");
    }
  },
  {
    load() {
      return require("module_4905");
    }
  },
  {
    load() {
      return require("module_4906");
    }
  },
  {
    load() {
      return require("module_4907");
    }
  },
  {
    load() {
      return require("module_4908");
    }
  },
  {
    load() {
      return require("module_4909");
    }
  },
  {
    load() {
      return require("module_4910");
    }
  },
  {
    load() {
      return require("module_4911");
    }
  },
  {
    load() {
      return require("module_4912");
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
