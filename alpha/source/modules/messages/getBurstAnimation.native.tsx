// Module ID: 5129
// Function ID: 5130
// Name: getBurstAnimation
// Dependencies: [5, 5130, 5131, 5132, 5133, 5134, 5135, 5136, 5137, 5138, 5139, 5140, 5141, 5142, 5143, 5144, 5145, 5146, 5147, 5148, 5149, 5150, 5151, 5152, 5153, 5154, 5155, 5156, 5157, 5158, 5159, 5160, 5161, 5162, 5163, 5164, 5165, 5166, 2]
// Exports: getBurstAnimation

// Module 5129 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_5130");
  }
};
const items = [
  obj,
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
  },
  {
    load() {
      return require("module_5136");
    }
  },
  {
    load() {
      return require("module_5137");
    }
  },
  {
    load() {
      return require("module_5138");
    }
  },
  {
    load() {
      return require("module_5139");
    }
  },
  {
    load() {
      return require("module_5140");
    }
  },
  {
    load() {
      return require("module_5141");
    }
  },
  {
    load() {
      return require("module_5142");
    }
  },
  {
    load() {
      return require("module_5143");
    }
  },
  {
    load() {
      return require("module_5144");
    }
  },
  {
    load() {
      return require("module_5145");
    }
  },
  {
    load() {
      return require("module_5146");
    }
  },
  {
    load() {
      return require("module_5147");
    }
  }
];
const obj2 = {
  load() {
    return require("module_5148");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_5149");
    }
  },
  {
    load() {
      return require("module_5150");
    }
  },
  {
    load() {
      return require("module_5151");
    }
  },
  {
    load() {
      return require("module_5152");
    }
  },
  {
    load() {
      return require("module_5153");
    }
  },
  {
    load() {
      return require("module_5154");
    }
  },
  {
    load() {
      return require("module_5155");
    }
  },
  {
    load() {
      return require("module_5156");
    }
  },
  {
    load() {
      return require("module_5157");
    }
  },
  {
    load() {
      return require("module_5158");
    }
  },
  {
    load() {
      return require("module_5159");
    }
  },
  {
    load() {
      return require("module_5160");
    }
  },
  {
    load() {
      return require("module_5161");
    }
  },
  {
    load() {
      return require("module_5162");
    }
  },
  {
    load() {
      return require("module_5163");
    }
  },
  {
    load() {
      return require("module_5164");
    }
  },
  {
    load() {
      return require("module_5165");
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
            return { value: "flexDirection", done: true };
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
