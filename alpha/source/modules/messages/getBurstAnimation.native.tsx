// Module ID: 4930
// Function ID: 4931
// Name: getBurstAnimation
// Dependencies: [5, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4947, 4948, 4949, 4950, 4951, 4952, 4953, 4954, 4955, 4956, 4957, 4958, 4959, 4960, 4961, 4962, 4963, 4964, 4965, 4966, 4967, 2]
// Exports: getBurstAnimation

// Module 4930 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_4931");
  }
};
const items = [
  obj,
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
  },
  {
    load() {
      return require("module_4941");
    }
  },
  {
    load() {
      return require("module_4942");
    }
  },
  {
    load() {
      return require("module_4943");
    }
  },
  {
    load() {
      return require("module_4944");
    }
  },
  {
    load() {
      return require("module_4945");
    }
  },
  {
    load() {
      return require("module_4946");
    }
  },
  {
    load() {
      return require("module_4947");
    }
  },
  {
    load() {
      return require("module_4948");
    }
  }
];
const obj2 = {
  load() {
    return require("module_4949");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_4950");
    }
  },
  {
    load() {
      return require("module_4951");
    }
  },
  {
    load() {
      return require("module_4952");
    }
  },
  {
    load() {
      return require("module_4953");
    }
  },
  {
    load() {
      return require("module_4954");
    }
  },
  {
    load() {
      return require("module_4955");
    }
  },
  {
    load() {
      return require("module_4956");
    }
  },
  {
    load() {
      return require("module_4957");
    }
  },
  {
    load() {
      return require("module_4958");
    }
  },
  {
    load() {
      return require("module_4959");
    }
  },
  {
    load() {
      return require("module_4960");
    }
  },
  {
    load() {
      return require("module_4961");
    }
  },
  {
    load() {
      return require("module_4962");
    }
  },
  {
    load() {
      return require("module_4963");
    }
  },
  {
    load() {
      return require("module_4964");
    }
  },
  {
    load() {
      return require("module_4965");
    }
  },
  {
    load() {
      return require("module_4966");
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
        return { value: "IconComponent", done: "+352" };
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
            return { value: "Reflect", done: null };
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
