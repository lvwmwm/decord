// Module ID: 7899
// Function ID: 7900
// Name: getBurstAnimation
// Dependencies: [5, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7936, 2]
// Exports: getBurstAnimation

// Module 7899 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_7900");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_7901");
    }
  },
  {
    load() {
      return require("module_7902");
    }
  },
  {
    load() {
      return require("module_7903");
    }
  },
  {
    load() {
      return require("module_7904");
    }
  },
  {
    load() {
      return require("module_7905");
    }
  },
  {
    load() {
      return require("module_7906");
    }
  },
  {
    load() {
      return require("module_7907");
    }
  },
  {
    load() {
      return require("module_7908");
    }
  },
  {
    load() {
      return require("module_7909");
    }
  },
  {
    load() {
      return require("module_7910");
    }
  },
  {
    load() {
      return require("module_7911");
    }
  },
  {
    load() {
      return require("module_7912");
    }
  },
  {
    load() {
      return require("module_7913");
    }
  },
  {
    load() {
      return require("module_7914");
    }
  },
  {
    load() {
      return require("module_7915");
    }
  },
  {
    load() {
      return require("module_7916");
    }
  },
  {
    load() {
      return require("module_7917");
    }
  }
];
const obj2 = {
  load() {
    return require("module_7918");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_7919");
    }
  },
  {
    load() {
      return require("module_7920");
    }
  },
  {
    load() {
      return require("module_7921");
    }
  },
  {
    load() {
      return require("module_7922");
    }
  },
  {
    load() {
      return require("module_7923");
    }
  },
  {
    load() {
      return require("module_7924");
    }
  },
  {
    load() {
      return require("module_7925");
    }
  },
  {
    load() {
      return require("module_7926");
    }
  },
  {
    load() {
      return require("module_7927");
    }
  },
  {
    load() {
      return require("module_7928");
    }
  },
  {
    load() {
      return require("module_7929");
    }
  },
  {
    load() {
      return require("module_7930");
    }
  },
  {
    load() {
      return require("module_7931");
    }
  },
  {
    load() {
      return require("module_7932");
    }
  },
  {
    load() {
      return require("module_7933");
    }
  },
  {
    load() {
      return require("module_7934");
    }
  },
  {
    load() {
      return require("module_7935");
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

export const getBurstAnimation = function getBurstAnimation() {
  return closure_0(...arguments);
};
