// Module ID: 5002
// Function ID: 5003
// Name: getBurstAnimation
// Dependencies: [5, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 5019, 5020, 5021, 5022, 5023, 5024, 5025, 5026, 5027, 5028, 5029, 5030, 5031, 5032, 5033, 5034, 5035, 5036, 5037, 5038, 5039, 2]
// Exports: getBurstAnimation

// Module 5002 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_5003");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_5004");
    }
  },
  {
    load() {
      return require("module_5005");
    }
  },
  {
    load() {
      return require("module_5006");
    }
  },
  {
    load() {
      return require("module_5007");
    }
  },
  {
    load() {
      return require("module_5008");
    }
  },
  {
    load() {
      return require("module_5009");
    }
  },
  {
    load() {
      return require("module_5010");
    }
  },
  {
    load() {
      return require("module_5011");
    }
  },
  {
    load() {
      return require("module_5012");
    }
  },
  {
    load() {
      return require("module_5013");
    }
  },
  {
    load() {
      return require("module_5014");
    }
  },
  {
    load() {
      return require("module_5015");
    }
  },
  {
    load() {
      return require("module_5016");
    }
  },
  {
    load() {
      return require("module_5017");
    }
  },
  {
    load() {
      return require("module_5018");
    }
  },
  {
    load() {
      return require("module_5019");
    }
  },
  {
    load() {
      return require("module_5020");
    }
  }
];
const obj2 = {
  load() {
    return require("module_5021");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_5022");
    }
  },
  {
    load() {
      return require("module_5023");
    }
  },
  {
    load() {
      return require("module_5024");
    }
  },
  {
    load() {
      return require("module_5025");
    }
  },
  {
    load() {
      return require("module_5026");
    }
  },
  {
    load() {
      return require("module_5027");
    }
  },
  {
    load() {
      return require("module_5028");
    }
  },
  {
    load() {
      return require("module_5029");
    }
  },
  {
    load() {
      return require("module_5030");
    }
  },
  {
    load() {
      return require("module_5031");
    }
  },
  {
    load() {
      return require("module_5032");
    }
  },
  {
    load() {
      return require("module_5033");
    }
  },
  {
    load() {
      return require("module_5034");
    }
  },
  {
    load() {
      return require("module_5035");
    }
  },
  {
    load() {
      return require("module_5036");
    }
  },
  {
    load() {
      return require("module_5037");
    }
  },
  {
    load() {
      return require("module_5038");
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
        return { value: "HermesInternal", done: "+95" };
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
            return { value: "Path", done: true };
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
