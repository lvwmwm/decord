// Module ID: 6078
// Function ID: 54363
// Name: items
// Dependencies: [5, 6079, 6080, 6081, 6082, 6083, 6084, 6085, 6086, 6087, 6088, 6089, 6090, 6091, 6092, 6093, 6094, 6095, 6096, 6097, 6098, 6099, 6100, 6101, 6102, 6103, 6104, 6105, 6106, 6107, 6108, 6109, 6110, 6111, 6112, 6113, 6114, 6115, 2]

// Module 6078 (items)
import items from "items";

const require = arg1;
let obj = {
  load() {
    return require(6079) /* items */;
  }
};
const items = [
  obj,
  {
    load() {
      return require(6080) /* items1 */;
    }
  },
  {
    load() {
      return require(6081) /* items1 */;
    }
  },
  {
    load() {
      return require(6082) /* items */;
    }
  },
  {
    load() {
      return require(6083) /* items */;
    }
  },
  {
    load() {
      return require(6084) /* items3 */;
    }
  },
  {
    load() {
      return require(6085) /* items */;
    }
  },
  {
    load() {
      return require(6086) /* items2 */;
    }
  },
  {
    load() {
      return require(6087) /* items */;
    }
  },
  {
    load() {
      return require(6088) /* items1 */;
    }
  },
  {
    load() {
      return require(6089) /* items1 */;
    }
  },
  {
    load() {
      return require(6090) /* items3 */;
    }
  },
  {
    load() {
      return require(6091) /* items */;
    }
  },
  {
    load() {
      return require(6092) /* items */;
    }
  },
  {
    load() {
      return require(6093) /* items */;
    }
  },
  {
    load() {
      return require(6094) /* items */;
    }
  },
  {
    load() {
      return require(6095) /* items2 */;
    }
  },
  {
    load() {
      return require(6096) /* items */;
    }
  }
];
obj = {
  load() {
    return require(6097) /* items */;
  }
};
const items1 = [
  obj,
  {
    load() {
      return require(6098) /* items1 */;
    }
  },
  {
    load() {
      return require(6099) /* items1 */;
    }
  },
  {
    load() {
      return require(6100) /* items */;
    }
  },
  {
    load() {
      return require(6101) /* items */;
    }
  },
  {
    load() {
      return require(6102) /* items3 */;
    }
  },
  {
    load() {
      return require(6103) /* items */;
    }
  },
  {
    load() {
      return require(6104) /* items2 */;
    }
  },
  {
    load() {
      return require(6105) /* items */;
    }
  },
  {
    load() {
      return require(6106) /* items1 */;
    }
  },
  {
    load() {
      return require(6107) /* items1 */;
    }
  },
  {
    load() {
      return require(6108) /* items3 */;
    }
  },
  {
    load() {
      return require(6109) /* items */;
    }
  },
  {
    load() {
      return require(6110) /* items */;
    }
  },
  {
    load() {
      return require(6111) /* items */;
    }
  },
  {
    load() {
      return require(6112) /* items */;
    }
  },
  {
    load() {
      return require(6113) /* items2 */;
    }
  },
  {
    load() {
      return require(6114) /* items */;
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
