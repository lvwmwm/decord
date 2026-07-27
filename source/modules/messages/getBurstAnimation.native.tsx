// Module ID: 6044
// Function ID: 54244
// Name: items
// Dependencies: [5, 6045, 6046, 6047, 6048, 6049, 6050, 6051, 6052, 6053, 6054, 6055, 6056, 6057, 6058, 6059, 6060, 6061, 6062, 6063, 6064, 6065, 6066, 6067, 6068, 6069, 6070, 6071, 6072, 6073, 6074, 6075, 6076, 6077, 6078, 6079, 6080, 6081, 2]

// Module 6044 (items)
import items from "items";

const require = arg1;
let obj = {
  load() {
    return require(6045) /* items */;
  }
};
const items = [
  obj,
  {
    load() {
      return require(6046) /* items1 */;
    }
  },
  {
    load() {
      return require(6047) /* items1 */;
    }
  },
  {
    load() {
      return require(6048) /* items */;
    }
  },
  {
    load() {
      return require(6049) /* items */;
    }
  },
  {
    load() {
      return require(6050) /* items3 */;
    }
  },
  {
    load() {
      return require(6051) /* items */;
    }
  },
  {
    load() {
      return require(6052) /* items2 */;
    }
  },
  {
    load() {
      return require(6053) /* items */;
    }
  },
  {
    load() {
      return require(6054) /* items1 */;
    }
  },
  {
    load() {
      return require(6055) /* items1 */;
    }
  },
  {
    load() {
      return require(6056) /* items3 */;
    }
  },
  {
    load() {
      return require(6057) /* items */;
    }
  },
  {
    load() {
      return require(6058) /* items */;
    }
  },
  {
    load() {
      return require(6059) /* items */;
    }
  },
  {
    load() {
      return require(6060) /* items */;
    }
  },
  {
    load() {
      return require(6061) /* items2 */;
    }
  },
  {
    load() {
      return require(6062) /* items */;
    }
  }
];
obj = {
  load() {
    return require(6063) /* items */;
  }
};
const items1 = [
  obj,
  {
    load() {
      return require(6064) /* items1 */;
    }
  },
  {
    load() {
      return require(6065) /* items1 */;
    }
  },
  {
    load() {
      return require(6066) /* items */;
    }
  },
  {
    load() {
      return require(6067) /* items */;
    }
  },
  {
    load() {
      return require(6068) /* items3 */;
    }
  },
  {
    load() {
      return require(6069) /* items */;
    }
  },
  {
    load() {
      return require(6070) /* items2 */;
    }
  },
  {
    load() {
      return require(6071) /* items */;
    }
  },
  {
    load() {
      return require(6072) /* items1 */;
    }
  },
  {
    load() {
      return require(6073) /* items1 */;
    }
  },
  {
    load() {
      return require(6074) /* items3 */;
    }
  },
  {
    load() {
      return require(6075) /* items */;
    }
  },
  {
    load() {
      return require(6076) /* items */;
    }
  },
  {
    load() {
      return require(6077) /* items */;
    }
  },
  {
    load() {
      return require(6078) /* items */;
    }
  },
  {
    load() {
      return require(6079) /* items2 */;
    }
  },
  {
    load() {
      return require(6080) /* items */;
    }
  }
];
const tmp2 = (() => {
  let closure_0 = callback(async (arg0, arg1, arg2) => {
    const iter = (function*(arg0, arg1, arg2) {
      let flag = arg3;
      if (flag === undefined) {
        flag = false;
      }
      yield undefined;
      const obj = callback(outer2_1[37]);
      return flag ? outer2_3 : outer2_4[obj.getBurstAnimationHash(obj, "" + arg0 + arg1 + arg2) % outer2_4.length].load();
    })();
    iter.next();
    return iter;
  });
  return function() {
    return callback(...arguments);
  };
})();
const result = require("items1").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = tmp2;
