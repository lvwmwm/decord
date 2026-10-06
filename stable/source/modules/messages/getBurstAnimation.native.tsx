// Module ID: 7208
// Function ID: 7209
// Name: getBurstAnimation
// Dependencies: [5, 7209, 7210, 7211, 7212, 7213, 7214, 7215, 7216, 7217, 7218, 7219, 7220, 7221, 7222, 7223, 7224, 7225, 7226, 7227, 7228, 7229, 7230, 7231, 7232, 7233, 7234, 7235, 7236, 7237, 7238, 7239, 7240, 7241, 7242, 7243, 7244, 7245, 2]
// Exports: getBurstAnimation

// Module 7208 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_7209");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_7210");
    }
  },
  {
    load() {
      return require("module_7211");
    }
  },
  {
    load() {
      return require("module_7212");
    }
  },
  {
    load() {
      return require("module_7213");
    }
  },
  {
    load() {
      return require("module_7214");
    }
  },
  {
    load() {
      return require("module_7215");
    }
  },
  {
    load() {
      return require("module_7216");
    }
  },
  {
    load() {
      return require("module_7217");
    }
  },
  {
    load() {
      return require("module_7218");
    }
  },
  {
    load() {
      return require("module_7219");
    }
  },
  {
    load() {
      return require("module_7220");
    }
  },
  {
    load() {
      return require("module_7221");
    }
  },
  {
    load() {
      return require("module_7222");
    }
  },
  {
    load() {
      return require("module_7223");
    }
  },
  {
    load() {
      return require("module_7224");
    }
  },
  {
    load() {
      return require("module_7225");
    }
  },
  {
    load() {
      return require("module_7226");
    }
  }
];
const obj2 = {
  load() {
    return require("module_7227");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_7228");
    }
  },
  {
    load() {
      return require("module_7229");
    }
  },
  {
    load() {
      return require("module_7230");
    }
  },
  {
    load() {
      return require("module_7231");
    }
  },
  {
    load() {
      return require("module_7232");
    }
  },
  {
    load() {
      return require("module_7233");
    }
  },
  {
    load() {
      return require("module_7234");
    }
  },
  {
    load() {
      return require("module_7235");
    }
  },
  {
    load() {
      return require("module_7236");
    }
  },
  {
    load() {
      return require("module_7237");
    }
  },
  {
    load() {
      return require("module_7238");
    }
  },
  {
    load() {
      return require("module_7239");
    }
  },
  {
    load() {
      return require("module_7240");
    }
  },
  {
    load() {
      return require("module_7241");
    }
  },
  {
    load() {
      return require("module_7242");
    }
  },
  {
    load() {
      return require("module_7243");
    }
  },
  {
    load() {
      return require("module_7244");
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
        return { value: "IconComponent", done: null };
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
            return { value: "Reflect", done: true };
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

export const getBurstAnimation = function() {
  return closure_0(...arguments);
};
