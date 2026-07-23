// Module ID: 516
// Function ID: 6605
// Name: getSideChannelWeakMap
// Dependencies: [517, 551, 518, 552, 554]

// Module 516 (getSideChannelWeakMap)
const tmp = require("getEvalledConstructor")("%WeakMap%", true);
let closure_2 = tmp;
let closure_3 = require("callBoundIntrinsic")("WeakMap.prototype.get", true);
let closure_4 = require("callBoundIntrinsic")("WeakMap.prototype.set", true);
let closure_5 = require("callBoundIntrinsic")("WeakMap.prototype.has", true);
let closure_6 = require("callBoundIntrinsic")("WeakMap.prototype.delete", true);
if (tmp) {
  function getSideChannelWeakMap() {
    const obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          let tmp3 = outer1_0(outer1_1[2]);
          const prototype = tmp3.prototype;
          tmp3 = new tmp3("Side channel does not contain " + outer1_0(outer1_1[3])(arg0));
          throw tmp3;
        }
      },
      delete: function _delete(arg0) {
        if (obj) {
          if (arg0) {
            if (closure_0) {
              return outer1_6(closure_0, arg0);
            }
          }
          return false;
        }
        if (outer1_0(outer1_1[4])) {
          if (store) {
            return store.delete(arg0);
          }
        }
      },
      get(arg0) {
        if (obj) {
          if (arg0) {
            if ("object" === typeof arg0) {
              if (closure_0) {
                let value = outer1_3(closure_0, arg0);
              }
              return value;
            }
          }
        }
        value = store;
        if (store) {
          value = store.get(arg0);
        }
      },
      has(arg0) {
        if (obj) {
          if (arg0) {
            if ("object" === typeof arg0) {
              if (closure_0) {
                let hasItem = outer1_5(closure_0, arg0);
              }
              return hasItem;
            }
          }
        }
        hasItem = !tmp3;
        if (!!store) {
          hasItem = store.has(arg0);
        }
      },
      set(arg0, arg1) {
        if (obj) {
          if (arg0) {
            if (!closure_0) {
              const prototype = obj.prototype;
              const tmp11 = new obj();
              closure_0 = tmp11;
            }
            outer1_4(closure_0, arg0, arg1);
          }
        }
        if (outer1_0(outer1_1[4])) {
          if (!store) {
            store = outer1_0(outer1_1[4])();
          }
          const result = store.set(arg0, arg1);
        }
      }
    };
    return obj;
  }
} else {
  getSideChannelWeakMap = require("getSideChannelMap");
}

export default getSideChannelWeakMap;
