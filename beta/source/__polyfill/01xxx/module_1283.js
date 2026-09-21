// Module ID: 1283
// Function ID: 1284
// Dependencies: [1284, 1322, 1323, 1286, 1320]

// Module 1283
import _mod1284 from "module_1284" /* 1284 */;
import _mod1286 from "module_1286" /* 1286 */;
import _mod1320 from "module_1320" /* 1320 */;
import _mod1322 from "module_1322" /* 1322 */;
import _mod1323 from "module_1323" /* 1323 */;

let closure_2 = _mod1284 || _mod1322 || _mod1323;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1286("Side channel does not contain " + _mod1320(arg0));
        throw tmp32;
      }
    },
    delete(arg0) {
      let deleteResult = set;
      if (deleteResult) {
        deleteResult = set.delete(arg0);
      }
      return deleteResult;
    },
    get(arg0) {
      value = set;
      if (set) {
        value = set.get(arg0);
      }
      return value;
    },
    has(arg0) {
      let hasItem = set;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    },
    set(arg0, arg1) {
      obj = closure_0;
      if (!closure_0) {
        const tmp2 = closure_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    }
  };
  return obj;
};
