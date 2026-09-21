// Module ID: 1322
// Function ID: 1323
// Dependencies: [1285, 1319, 1286, 1320]

// Module 1322
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import _mod1320 from "module_1320" /* 1320 */;

let tmp = _mod1285("%Map%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("Map.prototype.get", true);
let closure_4 = callBoundIntrinsic("Map.prototype.set", true);
let closure_5 = callBoundIntrinsic("Map.prototype.has", true);
let closure_6 = callBoundIntrinsic("Map.prototype.delete", true);
let closure_7 = callBoundIntrinsic("Map.prototype.size", true);

export default tmp && (function getSideChannelMap() {
  const obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1286("Side channel does not contain " + _mod1320(arg0));
        throw tmp32;
      }
    },
    delete(arg0) {
      if (closure_0) {
        if (0 === closure_7(closure_0)) {
          closure_0 = undefined;
        }
        return closure_6(tmp, arg0);
      } else {
        return false;
      }
    },
    get(arg0) {
      if (closure_0) {
        return closure_3(tmp, arg0);
      }
    },
    has(arg0) {
      let tmp = closure_0;
      if (tmp) {
        tmp = closure_5(closure_0, arg0);
      }
      return tmp;
    },
    set(arg0, arg1) {
      let tmp = closure_0;
      if (!closure_0) {
        const tmp5 = new closure_2();
        closure_0 = tmp5;
        tmp = tmp5;
      }
      closure_4(tmp, arg0, arg1);
    }
  };
  return obj;
});
