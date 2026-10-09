// Module ID: 1304
// Function ID: 1305
// Dependencies: [1305, 1339, 1306, 1340, 1342]

// Module 1304
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import inspect_ from "inspect_" /* 1340 */;
import _mod1342 from "module_1342" /* 1342 */;

let closure_0, closure_1;

let getSideChannelWeakMap;
let tmp = GetIntrinsic("%WeakMap%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("WeakMap.prototype.get", true);
let closure_4 = callBoundIntrinsic("WeakMap.prototype.set", true);
let closure_5 = callBoundIntrinsic("WeakMap.prototype.has", true);
let closure_6 = callBoundIntrinsic("WeakMap.prototype.delete", true);
if (tmp) {
  getSideChannelWeakMap = function getSideChannelWeakMap() {
    let obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          const self = this;
          const self2 = this;
          const tmp3 = _mod1306;
          const tmp32 = new tmp3("Side channel does not contain " + inspect_(arg0));
          throw tmp32;
        }
      },
      delete: (obj) => {
        const tmp = closure_2;
        if (tmp) {
          if (obj) {
            if (closure_0) {
              return closure_6(tmp2, obj);
            }
          }
          return false;
        }
        if (_mod1342) {
          if (set) {
            return set.delete(obj);
          }
        }
      },
      get(obj) {
        const tmp = closure_2;
        if (tmp) {
          if (obj) {
            if (typeof obj === "object") {
              let tmp3;
              if (closure_0) {
                tmp3 = closure_3(tmp2, obj);
              }
              return tmp3;
            }
          }
        }
        tmp3 = set && set.get(obj);
      },
      has(obj) {
        const tmp = closure_2;
        if (tmp) {
          if (obj) {
            if (typeof obj === "object") {
              let hasItem;
              if (closure_0) {
                hasItem = closure_5(tmp2, obj);
              }
              return hasItem;
            }
          }
        }
        hasItem = set && set.has(obj);
      },
      set(obj, arg1) {
        if (closure_2) {
          if (obj) {
            let tmp6 = closure_0;
            if (!tmp6) {
              const self = this;
              const self2 = this;
              const tmp5 = new tmp();
              closure_0 = tmp5;
              tmp6 = tmp5;
            }
            closure_4(tmp6, obj, arg1);
          }
        }
        if (_mod1342) {
          obj = closure_1;
          if (!obj) {
            const tmp4 = _mod1342();
            closure_1 = tmp4;
            obj = tmp4;
          }
          const result = obj.set(obj, arg1);
        }
      }
    };
    return obj;
  };
} else {
  getSideChannelWeakMap = _mod1342;
}

export default getSideChannelWeakMap;
