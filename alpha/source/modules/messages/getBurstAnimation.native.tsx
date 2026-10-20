// Module ID: 4904
// Function ID: 4905
// Name: getBurstAnimation
// Dependencies: [5, 4905, 4906, 4907, 4908, 4909, 4910, 4911, 4912, 4913, 4914, 4915, 4916, 4917, 4918, 4919, 4920, 4921, 4922, 4923, 4924, 4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 2]
// Exports: getBurstAnimation

// Module 4904 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_4905");
  }
};
const items = [
  obj,
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
  },
  {
    load() {
      return require("module_4913");
    }
  },
  {
    load() {
      return require("module_4914");
    }
  },
  {
    load() {
      return require("module_4915");
    }
  },
  {
    load() {
      return require("module_4916");
    }
  },
  {
    load() {
      return require("module_4917");
    }
  },
  {
    load() {
      return require("module_4918");
    }
  },
  {
    load() {
      return require("module_4919");
    }
  },
  {
    load() {
      return require("module_4920");
    }
  },
  {
    load() {
      return require("module_4921");
    }
  },
  {
    load() {
      return require("module_4922");
    }
  }
];
const obj2 = {
  load() {
    return require("module_4923");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_4924");
    }
  },
  {
    load() {
      return require("module_4925");
    }
  },
  {
    load() {
      return require("module_4926");
    }
  },
  {
    load() {
      return require("module_4927");
    }
  },
  {
    load() {
      return require("module_4928");
    }
  },
  {
    load() {
      return require("module_4929");
    }
  },
  {
    load() {
      return require("module_4930");
    }
  },
  {
    load() {
      return require("module_4931");
    }
  },
  {
    load() {
      return require("module_4932");
    }
  },
  {
    load() {
      return require("module_4933");
    }
  },
  {
    load() {
      return require("module_4934");
    }
  },
  {
    load() {
      return require("module_4935");
    }
  },
  {
    load() {
      return require("module_4936");
    }
  },
  {
    load() {
      return require("module_4937");
    }
  },
  {
    load() {
      return require("module_4938");
    }
  },
  {
    load() {
      return require("module_4939");
    }
  },
  {
    load() {
      return require("module_4940");
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
            return { value: "test", done: true };
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
