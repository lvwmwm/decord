// Module ID: 7926
// Function ID: 7927
// Name: getBurstAnimation
// Dependencies: [5, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7936, 7937, 7938, 7939, 7940, 7941, 7942, 7943, 7944, 7945, 7946, 7947, 7948, 7949, 7950, 7951, 7952, 7953, 7954, 7955, 7956, 7957, 7958, 7959, 7960, 7961, 7962, 7963, 2]
// Exports: getBurstAnimation

// Module 7926 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_7927");
  }
};
const items = [
  obj,
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
  },
  {
    load() {
      return require("module_7936");
    }
  },
  {
    load() {
      return require("module_7937");
    }
  },
  {
    load() {
      return require("module_7938");
    }
  },
  {
    load() {
      return require("module_7939");
    }
  },
  {
    load() {
      return require("module_7940");
    }
  },
  {
    load() {
      return require("module_7941");
    }
  },
  {
    load() {
      return require("module_7942");
    }
  },
  {
    load() {
      return require("module_7943");
    }
  },
  {
    load() {
      return require("module_7944");
    }
  }
];
const obj2 = {
  load() {
    return require("module_7945");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_7946");
    }
  },
  {
    load() {
      return require("module_7947");
    }
  },
  {
    load() {
      return require("module_7948");
    }
  },
  {
    load() {
      return require("module_7949");
    }
  },
  {
    load() {
      return require("module_7950");
    }
  },
  {
    load() {
      return require("module_7951");
    }
  },
  {
    load() {
      return require("module_7952");
    }
  },
  {
    load() {
      return require("module_7953");
    }
  },
  {
    load() {
      return require("module_7954");
    }
  },
  {
    load() {
      return require("module_7955");
    }
  },
  {
    load() {
      return require("module_7956");
    }
  },
  {
    load() {
      return require("module_7957");
    }
  },
  {
    load() {
      return require("module_7958");
    }
  },
  {
    load() {
      return require("module_7959");
    }
  },
  {
    load() {
      return require("module_7960");
    }
  },
  {
    load() {
      return require("module_7961");
    }
  },
  {
    load() {
      return require("module_7962");
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
        return { value: "IconComponent", done: "+51" };
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
            return { value: "Set", done: true };
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
