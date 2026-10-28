// Module ID: 4963
// Function ID: 4964
// Name: getBurstAnimation
// Dependencies: [5, 4964, 4965, 4966, 4967, 4968, 4969, 4970, 4971, 4972, 4973, 4974, 4975, 4976, 4977, 4978, 4979, 4980, 4981, 4982, 4983, 4984, 4985, 4986, 4987, 4988, 4989, 4990, 4991, 4992, 4993, 4994, 4995, 4996, 4997, 4998, 4999, 5000, 2]
// Exports: getBurstAnimation

// Module 4963 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_4964");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_4965");
    }
  },
  {
    load() {
      return require("module_4966");
    }
  },
  {
    load() {
      return require("module_4967");
    }
  },
  {
    load() {
      return require("module_4968");
    }
  },
  {
    load() {
      return require("module_4969");
    }
  },
  {
    load() {
      return require("module_4970");
    }
  },
  {
    load() {
      return require("module_4971");
    }
  },
  {
    load() {
      return require("module_4972");
    }
  },
  {
    load() {
      return require("module_4973");
    }
  },
  {
    load() {
      return require("module_4974");
    }
  },
  {
    load() {
      return require("module_4975");
    }
  },
  {
    load() {
      return require("module_4976");
    }
  },
  {
    load() {
      return require("module_4977");
    }
  },
  {
    load() {
      return require("module_4978");
    }
  },
  {
    load() {
      return require("module_4979");
    }
  },
  {
    load() {
      return require("module_4980");
    }
  },
  {
    load() {
      return require("module_4981");
    }
  }
];
const obj2 = {
  load() {
    return require("module_4982");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_4983");
    }
  },
  {
    load() {
      return require("module_4984");
    }
  },
  {
    load() {
      return require("module_4985");
    }
  },
  {
    load() {
      return require("module_4986");
    }
  },
  {
    load() {
      return require("module_4987");
    }
  },
  {
    load() {
      return require("module_4988");
    }
  },
  {
    load() {
      return require("module_4989");
    }
  },
  {
    load() {
      return require("module_4990");
    }
  },
  {
    load() {
      return require("module_4991");
    }
  },
  {
    load() {
      return require("module_4992");
    }
  },
  {
    load() {
      return require("module_4993");
    }
  },
  {
    load() {
      return require("module_4994");
    }
  },
  {
    load() {
      return require("module_4995");
    }
  },
  {
    load() {
      return require("module_4996");
    }
  },
  {
    load() {
      return require("module_4997");
    }
  },
  {
    load() {
      return require("module_4998");
    }
  },
  {
    load() {
      return require("module_4999");
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
