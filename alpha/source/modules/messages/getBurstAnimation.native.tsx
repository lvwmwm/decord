// Module ID: 5202
// Function ID: 5203
// Name: getBurstAnimation
// Dependencies: [5, 5203, 5204, 5205, 5206, 5207, 5208, 5209, 5210, 5211, 5212, 5213, 5214, 5215, 5216, 5217, 5218, 5219, 5220, 5221, 5222, 5223, 5224, 5225, 5226, 5227, 5228, 5229, 5230, 5231, 5232, 5233, 5234, 5235, 5236, 5237, 5238, 5239, 2]
// Exports: getBurstAnimation

// Module 5202 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_5203");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_5204");
    }
  },
  {
    load() {
      return require("module_5205");
    }
  },
  {
    load() {
      return require("module_5206");
    }
  },
  {
    load() {
      return require("module_5207");
    }
  },
  {
    load() {
      return require("module_5208");
    }
  },
  {
    load() {
      return require("module_5209");
    }
  },
  {
    load() {
      return require("module_5210");
    }
  },
  {
    load() {
      return require("module_5211");
    }
  },
  {
    load() {
      return require("module_5212");
    }
  },
  {
    load() {
      return require("module_5213");
    }
  },
  {
    load() {
      return require("module_5214");
    }
  },
  {
    load() {
      return require("module_5215");
    }
  },
  {
    load() {
      return require("module_5216");
    }
  },
  {
    load() {
      return require("module_5217");
    }
  },
  {
    load() {
      return require("module_5218");
    }
  },
  {
    load() {
      return require("module_5219");
    }
  },
  {
    load() {
      return require("module_5220");
    }
  }
];
const obj2 = {
  load() {
    return require("module_5221");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_5222");
    }
  },
  {
    load() {
      return require("module_5223");
    }
  },
  {
    load() {
      return require("module_5224");
    }
  },
  {
    load() {
      return require("module_5225");
    }
  },
  {
    load() {
      return require("module_5226");
    }
  },
  {
    load() {
      return require("module_5227");
    }
  },
  {
    load() {
      return require("module_5228");
    }
  },
  {
    load() {
      return require("module_5229");
    }
  },
  {
    load() {
      return require("module_5230");
    }
  },
  {
    load() {
      return require("module_5231");
    }
  },
  {
    load() {
      return require("module_5232");
    }
  },
  {
    load() {
      return require("module_5233");
    }
  },
  {
    load() {
      return require("module_5234");
    }
  },
  {
    load() {
      return require("module_5235");
    }
  },
  {
    load() {
      return require("module_5236");
    }
  },
  {
    load() {
      return require("module_5237");
    }
  },
  {
    load() {
      return require("module_5238");
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
            return { value: "flexDirection", done: true };
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
