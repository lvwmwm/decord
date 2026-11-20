// Module ID: 4753
// Function ID: 4754
// Name: getBurstAnimation
// Dependencies: [5, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762, 4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4772, 4773, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 2]
// Exports: getBurstAnimation

// Module 4753 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_4754");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_4755");
    }
  },
  {
    load() {
      return require("module_4756");
    }
  },
  {
    load() {
      return require("module_4757");
    }
  },
  {
    load() {
      return require("module_4758");
    }
  },
  {
    load() {
      return require("module_4759");
    }
  },
  {
    load() {
      return require("module_4760");
    }
  },
  {
    load() {
      return require("module_4761");
    }
  },
  {
    load() {
      return require("module_4762");
    }
  },
  {
    load() {
      return require("module_4763");
    }
  },
  {
    load() {
      return require("module_4764");
    }
  },
  {
    load() {
      return require("module_4765");
    }
  },
  {
    load() {
      return require("module_4766");
    }
  },
  {
    load() {
      return require("module_4767");
    }
  },
  {
    load() {
      return require("module_4768");
    }
  },
  {
    load() {
      return require("module_4769");
    }
  },
  {
    load() {
      return require("module_4770");
    }
  },
  {
    load() {
      return require("module_4771");
    }
  }
];
const obj2 = {
  load() {
    return require("module_4772");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_4773");
    }
  },
  {
    load() {
      return require("module_4774");
    }
  },
  {
    load() {
      return require("module_4775");
    }
  },
  {
    load() {
      return require("module_4776");
    }
  },
  {
    load() {
      return require("module_4777");
    }
  },
  {
    load() {
      return require("module_4778");
    }
  },
  {
    load() {
      return require("module_4779");
    }
  },
  {
    load() {
      return require("module_4780");
    }
  },
  {
    load() {
      return require("module_4781");
    }
  },
  {
    load() {
      return require("module_4782");
    }
  },
  {
    load() {
      return require("module_4783");
    }
  },
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
