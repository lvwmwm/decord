// Module ID: 7369
// Function ID: 7370
// Name: getBurstAnimation
// Dependencies: [5, 7370, 7371, 7372, 7373, 7374, 7375, 7376, 7377, 7378, 7379, 7380, 7381, 7382, 7383, 7384, 7385, 7386, 7387, 7388, 7389, 7390, 7391, 7392, 7393, 7394, 7395, 7396, 7397, 7398, 7399, 7400, 7401, 7402, 7403, 7404, 7405, 7406, 2]
// Exports: getBurstAnimation

// Module 7369 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(7370);
    }
  },
  {
    load() {
      return closure_0(7371);
    }
  },
  {
    load() {
      return closure_0(7372);
    }
  },
  {
    load() {
      return closure_0(7373);
    }
  },
  {
    load() {
      return closure_0(7374);
    }
  },
  {
    load() {
      return closure_0(7375);
    }
  },
  {
    load() {
      return closure_0(7376);
    }
  },
  {
    load() {
      return closure_0(7377);
    }
  },
  {
    load() {
      return closure_0(7378);
    }
  },
  {
    load() {
      return closure_0(7379);
    }
  },
  {
    load() {
      return closure_0(7380);
    }
  },
  {
    load() {
      return closure_0(7381);
    }
  },
  {
    load() {
      return closure_0(7382);
    }
  },
  {
    load() {
      return closure_0(7383);
    }
  },
  {
    load() {
      return closure_0(7384);
    }
  },
  {
    load() {
      return closure_0(7385);
    }
  },
  {
    load() {
      return closure_0(7386);
    }
  },
  {
    load() {
      return closure_0(7387);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(7388);
    }
  },
  {
    load() {
      return closure_0(7389);
    }
  },
  {
    load() {
      return closure_0(7390);
    }
  },
  {
    load() {
      return closure_0(7391);
    }
  },
  {
    load() {
      return closure_0(7392);
    }
  },
  {
    load() {
      return closure_0(7393);
    }
  },
  {
    load() {
      return closure_0(7394);
    }
  },
  {
    load() {
      return closure_0(7395);
    }
  },
  {
    load() {
      return closure_0(7396);
    }
  },
  {
    load() {
      return closure_0(7397);
    }
  },
  {
    load() {
      return closure_0(7398);
    }
  },
  {
    load() {
      return closure_0(7399);
    }
  },
  {
    load() {
      return closure_0(7400);
    }
  },
  {
    load() {
      return closure_0(7401);
    }
  },
  {
    load() {
      return closure_0(7402);
    }
  },
  {
    load() {
      return closure_0(7403);
    }
  },
  {
    load() {
      return closure_0(7404);
    }
  },
  {
    load() {
      return closure_0(7405);
    }
  }
];
let closure_0 = asyncGeneratorStepDefault(function*(arg0, value, arg2) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_3 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = dependencyMap;
          closure_132_2 = closure_2;
          let flag = length;
          if (length === undefined) {
            flag = false;
          }
          closure_132_3 = flag;
          let burstAnimationHash;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const _HermesInternal = HermesInternal;
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash("" + closure_132_0 + closure_132_1 + closure_132_2);
        if (closure_132_3) {
          let tmp6 = closure_2;
        } else {
          tmp6 = length;
        }
        tmp6[burstAnimationHash % length.length].load();
        c7 = 3;
        const obj5 = closure_0(dependencyMap[37]);
      }
    } catch (tmp16) {
      c7 = tmp;
      throw tmp16;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

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
