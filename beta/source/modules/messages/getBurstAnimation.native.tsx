// Module ID: 5099
// Function ID: 5100
// Name: getBurstAnimation
// Dependencies: [5, 5100, 5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5110, 5111, 5112, 5113, 5114, 5115, 5116, 5117, 5118, 5119, 5120, 5121, 5122, 5123, 5124, 5125, 5126, 5127, 5128, 5129, 5130, 5131, 5132, 5133, 5134, 5135, 5136, 2]
// Exports: getBurstAnimation

// Module 5099 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_5100");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_5101");
    }
  },
  {
    load() {
      return require("module_5102");
    }
  },
  {
    load() {
      return require("module_5103");
    }
  },
  {
    load() {
      return require("module_5104");
    }
  },
  {
    load() {
      return require("module_5105");
    }
  },
  {
    load() {
      return require("module_5106");
    }
  },
  {
    load() {
      return require("module_5107");
    }
  },
  {
    load() {
      return require("module_5108");
    }
  },
  {
    load() {
      return require("module_5109");
    }
  },
  {
    load() {
      return require("module_5110");
    }
  },
  {
    load() {
      return require("module_5111");
    }
  },
  {
    load() {
      return require("module_5112");
    }
  },
  {
    load() {
      return require("module_5113");
    }
  },
  {
    load() {
      return require("module_5114");
    }
  },
  {
    load() {
      return require("module_5115");
    }
  },
  {
    load() {
      return require("module_5116");
    }
  },
  {
    load() {
      return require("module_5117");
    }
  }
];
const obj2 = {
  load() {
    return require("module_5118");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_5119");
    }
  },
  {
    load() {
      return require("module_5120");
    }
  },
  {
    load() {
      return require("module_5121");
    }
  },
  {
    load() {
      return require("module_5122");
    }
  },
  {
    load() {
      return require("module_5123");
    }
  },
  {
    load() {
      return require("module_5124");
    }
  },
  {
    load() {
      return require("module_5125");
    }
  },
  {
    load() {
      return require("module_5126");
    }
  },
  {
    load() {
      return require("module_5127");
    }
  },
  {
    load() {
      return require("module_5128");
    }
  },
  {
    load() {
      return require("module_5129");
    }
  },
  {
    load() {
      return require("module_5130");
    }
  },
  {
    load() {
      return require("module_5131");
    }
  },
  {
    load() {
      return require("module_5132");
    }
  },
  {
    load() {
      return require("module_5133");
    }
  },
  {
    load() {
      return require("module_5134");
    }
  },
  {
    load() {
      return require("module_5135");
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
            return { value: "flexDirection", done: null };
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
