// Module ID: 8144
// Function ID: 8145
// Name: getBurstAnimation
// Dependencies: [5, 8145, 8146, 8147, 8148, 8149, 8150, 8151, 8152, 8153, 8154, 8155, 8156, 8157, 8158, 8159, 8160, 8161, 8162, 8163, 8164, 8165, 8166, 8167, 8168, 8169, 8170, 8171, 8172, 8173, 8174, 8175, 8176, 8177, 8178, 8179, 8180, 8181, 2]
// Exports: getBurstAnimation

// Module 8144 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_8145");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_8146");
    }
  },
  {
    load() {
      return require("module_8147");
    }
  },
  {
    load() {
      return require("module_8148");
    }
  },
  {
    load() {
      return require("module_8149");
    }
  },
  {
    load() {
      return require("module_8150");
    }
  },
  {
    load() {
      return require("module_8151");
    }
  },
  {
    load() {
      return require("module_8152");
    }
  },
  {
    load() {
      return require("module_8153");
    }
  },
  {
    load() {
      return require("module_8154");
    }
  },
  {
    load() {
      return require("module_8155");
    }
  },
  {
    load() {
      return require("module_8156");
    }
  },
  {
    load() {
      return require("module_8157");
    }
  },
  {
    load() {
      return require("module_8158");
    }
  },
  {
    load() {
      return require("module_8159");
    }
  },
  {
    load() {
      return require("module_8160");
    }
  },
  {
    load() {
      return require("module_8161");
    }
  },
  {
    load() {
      return require("module_8162");
    }
  }
];
const obj2 = {
  load() {
    return require("module_8163");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_8164");
    }
  },
  {
    load() {
      return require("module_8165");
    }
  },
  {
    load() {
      return require("module_8166");
    }
  },
  {
    load() {
      return require("module_8167");
    }
  },
  {
    load() {
      return require("module_8168");
    }
  },
  {
    load() {
      return require("module_8169");
    }
  },
  {
    load() {
      return require("module_8170");
    }
  },
  {
    load() {
      return require("module_8171");
    }
  },
  {
    load() {
      return require("module_8172");
    }
  },
  {
    load() {
      return require("module_8173");
    }
  },
  {
    load() {
      return require("module_8174");
    }
  },
  {
    load() {
      return require("module_8175");
    }
  },
  {
    load() {
      return require("module_8176");
    }
  },
  {
    load() {
      return require("module_8177");
    }
  },
  {
    load() {
      return require("module_8178");
    }
  },
  {
    load() {
      return require("module_8179");
    }
  },
  {
    load() {
      return require("module_8180");
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
