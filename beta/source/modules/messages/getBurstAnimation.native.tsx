// Module ID: 8194
// Function ID: 8195
// Name: getBurstAnimation
// Dependencies: [5, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8203, 8204, 8205, 8206, 8207, 8208, 8209, 8210, 8211, 8212, 8213, 8214, 8215, 8216, 8217, 8218, 8219, 8220, 8221, 8222, 8223, 8224, 8225, 8226, 8227, 8228, 8229, 8230, 8231, 2]
// Exports: getBurstAnimation

// Module 8194 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_8195");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_8196");
    }
  },
  {
    load() {
      return require("module_8197");
    }
  },
  {
    load() {
      return require("module_8198");
    }
  },
  {
    load() {
      return require("module_8199");
    }
  },
  {
    load() {
      return require("module_8200");
    }
  },
  {
    load() {
      return require("module_8201");
    }
  },
  {
    load() {
      return require("module_8202");
    }
  },
  {
    load() {
      return require("module_8203");
    }
  },
  {
    load() {
      return require("module_8204");
    }
  },
  {
    load() {
      return require("module_8205");
    }
  },
  {
    load() {
      return require("module_8206");
    }
  },
  {
    load() {
      return require("module_8207");
    }
  },
  {
    load() {
      return require("module_8208");
    }
  },
  {
    load() {
      return require("module_8209");
    }
  },
  {
    load() {
      return require("module_8210");
    }
  },
  {
    load() {
      return require("module_8211");
    }
  },
  {
    load() {
      return require("module_8212");
    }
  }
];
const obj2 = {
  load() {
    return require("module_8213");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_8214");
    }
  },
  {
    load() {
      return require("module_8215");
    }
  },
  {
    load() {
      return require("module_8216");
    }
  },
  {
    load() {
      return require("module_8217");
    }
  },
  {
    load() {
      return require("module_8218");
    }
  },
  {
    load() {
      return require("module_8219");
    }
  },
  {
    load() {
      return require("module_8220");
    }
  },
  {
    load() {
      return require("module_8221");
    }
  },
  {
    load() {
      return require("module_8222");
    }
  },
  {
    load() {
      return require("module_8223");
    }
  },
  {
    load() {
      return require("module_8224");
    }
  },
  {
    load() {
      return require("module_8225");
    }
  },
  {
    load() {
      return require("module_8226");
    }
  },
  {
    load() {
      return require("module_8227");
    }
  },
  {
    load() {
      return require("module_8228");
    }
  },
  {
    load() {
      return require("module_8229");
    }
  },
  {
    load() {
      return require("module_8230");
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
