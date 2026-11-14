// Module ID: 5265
// Function ID: 5266
// Name: getBurstAnimation
// Dependencies: [5, 5266, 5267, 5268, 5269, 5270, 5271, 5272, 5273, 5274, 5275, 5276, 5277, 5278, 5279, 5280, 5281, 5282, 5283, 5284, 5285, 5286, 5287, 5288, 5289, 5290, 5291, 5292, 5293, 5294, 5295, 5296, 5297, 5298, 5299, 5300, 5301, 5302, 2]
// Exports: getBurstAnimation

// Module 5265 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_5266");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_5267");
    }
  },
  {
    load() {
      return require("module_5268");
    }
  },
  {
    load() {
      return require("module_5269");
    }
  },
  {
    load() {
      return require("module_5270");
    }
  },
  {
    load() {
      return require("module_5271");
    }
  },
  {
    load() {
      return require("module_5272");
    }
  },
  {
    load() {
      return require("module_5273");
    }
  },
  {
    load() {
      return require("module_5274");
    }
  },
  {
    load() {
      return require("module_5275");
    }
  },
  {
    load() {
      return require("module_5276");
    }
  },
  {
    load() {
      return require("module_5277");
    }
  },
  {
    load() {
      return require("module_5278");
    }
  },
  {
    load() {
      return require("module_5279");
    }
  },
  {
    load() {
      return require("module_5280");
    }
  },
  {
    load() {
      return require("module_5281");
    }
  },
  {
    load() {
      return require("module_5282");
    }
  },
  {
    load() {
      return require("module_5283");
    }
  }
];
const obj2 = {
  load() {
    return require("module_5284");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_5285");
    }
  },
  {
    load() {
      return require("module_5286");
    }
  },
  {
    load() {
      return require("module_5287");
    }
  },
  {
    load() {
      return require("module_5288");
    }
  },
  {
    load() {
      return require("module_5289");
    }
  },
  {
    load() {
      return require("module_5290");
    }
  },
  {
    load() {
      return require("module_5291");
    }
  },
  {
    load() {
      return require("module_5292");
    }
  },
  {
    load() {
      return require("module_5293");
    }
  },
  {
    load() {
      return require("module_5294");
    }
  },
  {
    load() {
      return require("module_5295");
    }
  },
  {
    load() {
      return require("module_5296");
    }
  },
  {
    load() {
      return require("module_5297");
    }
  },
  {
    load() {
      return require("module_5298");
    }
  },
  {
    load() {
      return require("module_5299");
    }
  },
  {
    load() {
      return require("module_5300");
    }
  },
  {
    load() {
      return require("module_5301");
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
