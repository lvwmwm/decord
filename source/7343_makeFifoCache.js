// Module ID: 7343
// Function ID: 59224
// Name: makeFifoCache
// Dependencies: []

// Module 7343 (makeFifoCache)
arg5.makeFifoCache = function makeFifoCache(arg0) {
  let closure_1 = [];
  let closure_2 = {};
  return {
    add(arg0, arg1) {
      const self = this;
      if (arr.length >= arg0) {
        do {
          let tmp = closure_1;
          if (undefined !== closure_1.shift()) {
            let tmp2 = closure_2;
            delete r2[r5];
          }
          let tmp3 = closure_1;
          let tmp4 = closure_0;
        } while (closure_1.length >= closure_0);
      }
      if (closure_2[arg0]) {
        self.delete(arg0);
      }
      const arr = arr.push(arg0);
      closure_2[arg0] = arg1;
    },
    clear() {
      let closure_2 = {};
      let closure_1 = [];
    },
    get(arg0) {
      return closure_2[arg0];
    },
    size() {
      return arr.length;
    },
    delete: function _delete(arg0) {
      if (closure_2[arg0]) {
        delete r1[r4];
        let num = 0;
        if (0 < arr.length) {
          while (arr[num] !== arg0) {
            num = num + 1;
            let tmp5 = arr;
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
