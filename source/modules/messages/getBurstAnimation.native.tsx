// Module ID: 7022
// Function ID: 56388
// Name: items
// Dependencies: []

// Module 7022 (items)
let closure_2 = importDefault(dependencyMap[0]);
let obj = {
  load() {
    return arg1(dependencyMap[1]);
  }
};
const items = [
  obj,
  {
    load() {
      return arg1(dependencyMap[2]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[3]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[4]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[5]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[6]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[7]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[8]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[9]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[10]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[11]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[12]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[13]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[14]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[15]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[16]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[17]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[18]);
    }
  }
];
obj = {
  load() {
    return arg1(dependencyMap[19]);
  }
};
const items1 = [
  obj,
  {
    load() {
      return arg1(dependencyMap[20]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[21]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[22]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[23]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[24]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[25]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[26]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[27]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[28]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[29]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[30]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[31]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[32]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[33]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[34]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[35]);
    }
  },
  {
    load() {
      return arg1(dependencyMap[36]);
    }
  }
];
const tmp2 = () => {
  let closure_0 = callback(async (arg0, arg1, arg2) => {
    const fn = function*(arg0, arg1, arg2) {
      let flag = arg3;
      if (flag === undefined) {
        flag = false;
      }
      yield undefined;
      const obj = callback(closure_1[37]);
      return flag ? closure_3 : closure_4[obj.getBurstAnimationHash(obj, "" + arg0 + arg1 + arg2) % closure_4.length].load();
    };
    fn.next();
    return fn;
  });
  return function() {
    return callback(...arguments);
  };
}();
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = tmp2;
