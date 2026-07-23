// Module ID: 7353
// Function ID: 59292
// Name: makeFifoCache
// Dependencies: []

// Module 7353 (makeFifoCache)
arg5.makeFifoCache = function makeFifoCache(arg0) {
  let closure_0 = arg0;
  let closure_1 = [];
  let closure_2 = {};
  return {
    add(arg0, arg1) {
      const self = this;
      if (arr.length >= closure_0) {
        do {
          let tmp3 = arr;
          if (undefined !== arr.shift()) {
            let tmp4 = dependencyMap;
            delete tmp[tmp2];
          }
          let tmp5 = arr;
          let tmp6 = closure_0;
        } while (arr.length >= closure_0);
      }
      if (dependencyMap[arg0]) {
        self.delete(arg0);
      }
      arr = arr.push(arg0);
      dependencyMap[arg0] = arg1;
    },
    clear() {
      let closure_2 = {};
      let closure_1 = [];
    },
    get(arg0) {
      return dependencyMap[arg0];
    },
    size() {
      return arr.length;
    },
    delete: function _delete(arg0) {
      if (dependencyMap[arg0]) {
        delete tmp[tmp2];
        let num = 0;
        if (0 < arr.length) {
          while (arr[num] !== arg0) {
            num = num + 1;
            let tmp7 = arr;
          }
          arr.splice(num, 1);
        }
        return true;
      } else {
        return false;
      }
    }
  };
};
