// Module ID: 7027
// Function ID: 56422
// Name: items
// Dependencies: [5, 7028, 7029, 7030, 7031, 7032, 7033, 7034, 7035, 7036, 7037, 7038, 7039, 7040, 7041, 7042, 7043, 7044, 7045, 7046, 7047, 7048, 7049, 7050, 7051, 7052, 7053, 7054, 7055, 7056, 7057, 7058, 7059, 7060, 7061, 7062, 7063, 7064, 2]

// Module 7027 (items)
import items from "items";

const require = arg1;
let obj = {
  load() {
    return require(7028) /* items */;
  }
};
const items = [
  obj,
  {
    load() {
      return require(7029) /* items1 */;
    }
  },
  {
    load() {
      return require(7030) /* items1 */;
    }
  },
  {
    load() {
      return require(7031) /* items */;
    }
  },
  {
    load() {
      return require(7032) /* items */;
    }
  },
  {
    load() {
      return require(7033) /* items3 */;
    }
  },
  {
    load() {
      return require(7034) /* items */;
    }
  },
  {
    load() {
      return require(7035) /* items2 */;
    }
  },
  {
    load() {
      return require(7036) /* items */;
    }
  },
  {
    load() {
      return require(7037) /* items1 */;
    }
  },
  {
    load() {
      return require(7038) /* items1 */;
    }
  },
  {
    load() {
      return require(7039) /* items3 */;
    }
  },
  {
    load() {
      return require(7040) /* items */;
    }
  },
  {
    load() {
      return require(7041) /* items */;
    }
  },
  {
    load() {
      return require(7042) /* items */;
    }
  },
  {
    load() {
      return require(7043) /* items */;
    }
  },
  {
    load() {
      return require(7044) /* items2 */;
    }
  },
  {
    load() {
      return require(7045) /* items */;
    }
  }
];
obj = {
  load() {
    return require(7046) /* items */;
  }
};
const items1 = [
  obj,
  {
    load() {
      return require(7047) /* items1 */;
    }
  },
  {
    load() {
      return require(7048) /* items1 */;
    }
  },
  {
    load() {
      return require(7049) /* items */;
    }
  },
  {
    load() {
      return require(7050) /* items */;
    }
  },
  {
    load() {
      return require(7051) /* items3 */;
    }
  },
  {
    load() {
      return require(7052) /* items */;
    }
  },
  {
    load() {
      return require(7053) /* items2 */;
    }
  },
  {
    load() {
      return require(7054) /* items */;
    }
  },
  {
    load() {
      return require(7055) /* items1 */;
    }
  },
  {
    load() {
      return require(7056) /* items1 */;
    }
  },
  {
    load() {
      return require(7057) /* items3 */;
    }
  },
  {
    load() {
      return require(7058) /* items */;
    }
  },
  {
    load() {
      return require(7059) /* items */;
    }
  },
  {
    load() {
      return require(7060) /* items */;
    }
  },
  {
    load() {
      return require(7061) /* items */;
    }
  },
  {
    load() {
      return require(7062) /* items2 */;
    }
  },
  {
    load() {
      return require(7063) /* items */;
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
