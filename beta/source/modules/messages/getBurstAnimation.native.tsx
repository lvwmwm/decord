// Module ID: 8064
// Function ID: 8065
// Name: getBurstAnimation
// Dependencies: [5, 8065, 8066, 8067, 8068, 8069, 8070, 8071, 8072, 8073, 8074, 8075, 8076, 8077, 8078, 8079, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088, 8089, 8090, 8091, 8092, 8093, 8094, 8095, 8096, 8097, 8098, 8099, 8100, 8101, 2]
// Exports: getBurstAnimation

// Module 8064 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(8065);
    }
  },
  {
    load() {
      return closure_0(8066);
    }
  },
  {
    load() {
      return closure_0(8067);
    }
  },
  {
    load() {
      return closure_0(8068);
    }
  },
  {
    load() {
      return closure_0(8069);
    }
  },
  {
    load() {
      return closure_0(8070);
    }
  },
  {
    load() {
      return closure_0(8071);
    }
  },
  {
    load() {
      return closure_0(8072);
    }
  },
  {
    load() {
      return closure_0(8073);
    }
  },
  {
    load() {
      return closure_0(8074);
    }
  },
  {
    load() {
      return closure_0(8075);
    }
  },
  {
    load() {
      return closure_0(8076);
    }
  },
  {
    load() {
      return closure_0(8077);
    }
  },
  {
    load() {
      return closure_0(8078);
    }
  },
  {
    load() {
      return closure_0(8079);
    }
  },
  {
    load() {
      return closure_0(8080);
    }
  },
  {
    load() {
      return closure_0(8081);
    }
  },
  {
    load() {
      return closure_0(8082);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(8083);
    }
  },
  {
    load() {
      return closure_0(8084);
    }
  },
  {
    load() {
      return closure_0(8085);
    }
  },
  {
    load() {
      return closure_0(8086);
    }
  },
  {
    load() {
      return closure_0(8087);
    }
  },
  {
    load() {
      return closure_0(8088);
    }
  },
  {
    load() {
      return closure_0(8089);
    }
  },
  {
    load() {
      return closure_0(8090);
    }
  },
  {
    load() {
      return closure_0(8091);
    }
  },
  {
    load() {
      return closure_0(8092);
    }
  },
  {
    load() {
      return closure_0(8093);
    }
  },
  {
    load() {
      return closure_0(8094);
    }
  },
  {
    load() {
      return closure_0(8095);
    }
  },
  {
    load() {
      return closure_0(8096);
    }
  },
  {
    load() {
      return closure_0(8097);
    }
  },
  {
    load() {
      return closure_0(8098);
    }
  },
  {
    load() {
      return closure_0(8099);
    }
  },
  {
    load() {
      return closure_0(8100);
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
      return { value: "IconComponent", done: null };
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
          return { value: "Set", done: true };
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
