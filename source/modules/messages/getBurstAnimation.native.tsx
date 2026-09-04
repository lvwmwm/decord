// Module ID: 7717
// Function ID: 7718
// Name: items
// Dependencies: [5, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 2]
// Exports: getBurstAnimation

// Module 7717 (items)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

let closure_0 = arg1;
let obj = {
  load() {
    return callback(7718);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7719);
    }
  },
  {
    load() {
      return callback(7720);
    }
  },
  {
    load() {
      return callback(7721);
    }
  },
  {
    load() {
      return callback(7722);
    }
  },
  {
    load() {
      return callback(7723);
    }
  },
  {
    load() {
      return callback(7724);
    }
  },
  {
    load() {
      return callback(7725);
    }
  },
  {
    load() {
      return callback(7726);
    }
  },
  {
    load() {
      return callback(7727);
    }
  },
  {
    load() {
      return callback(7728);
    }
  },
  {
    load() {
      return callback(7729);
    }
  },
  {
    load() {
      return callback(7730);
    }
  },
  {
    load() {
      return callback(7731);
    }
  },
  {
    load() {
      return callback(7732);
    }
  },
  {
    load() {
      return callback(7733);
    }
  },
  {
    load() {
      return callback(7734);
    }
  },
  {
    load() {
      return callback(7735);
    }
  }
];
obj = {
  load() {
    return callback(7736);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7737);
    }
  },
  {
    load() {
      return callback(7738);
    }
  },
  {
    load() {
      return callback(7739);
    }
  },
  {
    load() {
      return callback(7740);
    }
  },
  {
    load() {
      return callback(7741);
    }
  },
  {
    load() {
      return callback(7742);
    }
  },
  {
    load() {
      return callback(7743);
    }
  },
  {
    load() {
      return callback(7744);
    }
  },
  {
    load() {
      return callback(7745);
    }
  },
  {
    load() {
      return callback(7746);
    }
  },
  {
    load() {
      return callback(7747);
    }
  },
  {
    load() {
      return callback(7748);
    }
  },
  {
    load() {
      return callback(7749);
    }
  },
  {
    load() {
      return callback(7750);
    }
  },
  {
    load() {
      return callback(7751);
    }
  },
  {
    load() {
      return callback(7752);
    }
  },
  {
    load() {
      return callback(7753);
    }
  }
];
closure_0 = asyncGeneratorStepDefault((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  const iter = (function*(arg0, arg1, arg2) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = tmp5;
            let burstAnimationHash = tmp2;
            let flag;
            if (flag === undefined) {
              flag = false;
            }
            burstAnimationHash = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          const _HermesInternal = HermesInternal;
          burstAnimationHash = callback(table[37]).getBurstAnimationHash("" + callback + table + closure_2);
          let tmp10 = closure_5;
          if (flag) {
            let tmp6 = closure_2;
          } else {
            tmp6 = length;
          }
          tmp10 = burstAnimationHash;
          obj = tmp6[burstAnimationHash % length.length];
          obj.load();
          c7 = 3;
          const obj5 = callback(table[37]);
        }
      } catch (tmp16) {
        c7 = tmp;
        throw tmp16;
      }
    }
  })();
  iter.next();
  return iter;
});
const result = require("set").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
