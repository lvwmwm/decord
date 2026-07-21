// Module ID: 516
// Function ID: 6605
// Name: getSideChannelWeakMap
// Dependencies: [528, 517, 553, 517, 551]

// Module 516 (getSideChannelWeakMap)
const tmp = require("callBindBasic")("%WeakMap%", true);
let closure_3 = require("getEvalledConstructor")("WeakMap.prototype.get", true);
let closure_4 = require("getEvalledConstructor")("WeakMap.prototype.set", true);
let closure_5 = require("getEvalledConstructor")("WeakMap.prototype.has", true);
let closure_6 = require("getEvalledConstructor")("WeakMap.prototype.delete", true);
if (tmp) {
  function getSideChannelWeakMap() {
    const obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          let tmp3 = callback(closure_1[2]);
          const prototype = tmp3.prototype;
          tmp3 = new tmp3("Side channel does not contain " + callback(closure_1[3])(arg0));
          throw tmp3;
        }
      },
      delete: function _delete(arg0) {
        if (obj) {
          if (arg0) {
            if (callback) {
              return callback5(callback, arg0);
            }
          }
          return false;
        }
        if (callback(store[4])) {
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
                let value = callback2(closure_0, arg0);
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
                let hasItem = callback4(closure_0, arg0);
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
            if (!tmp11) {
              const prototype = obj.prototype;
              const tmp11 = new obj();
            }
            callback3(tmp11, arg0, arg1);
          }
        }
        if (tmp11(store[4])) {
          if (!store) {
            const store = tmp11(store[4])();
          }
          const result = store.set(arg0, arg1);
        }
      }
    };
    return obj;
  }
} else {
  getSideChannelWeakMap = require("callBoundIntrinsic");
}

export default getSideChannelWeakMap;
