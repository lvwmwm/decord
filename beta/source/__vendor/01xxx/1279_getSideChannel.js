// Module ID: 1279
// Function ID: 1280
// Name: getSideChannel
// Dependencies: [1280, 1318, 1319, 1282, 1316]

// Module 1279 (getSideChannel)
import _mod1280 from "module_1280" /* 1280 */;
import _mod1282 from "module_1282" /* 1282 */;
import inspect_ from "inspect_" /* 1316 */;
import _mod1318 from "module_1318" /* 1318 */;
import getSideChannelList from "getSideChannelList" /* 1319 */;

let closure_0;

let closure_2 = _mod1280 || _mod1318 || getSideChannelList;
const tmp = _mod1280 || _mod1318 || getSideChannelList;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const self = this;
        const self2 = this;
        const tmp3 = _mod1282;
        const tmp32 = new tmp3("Side channel does not contain " + inspect_(arg0));
        throw tmp32;
      }
    },
    delete: (arg0) => {
      const deleteResult = set && set.delete(arg0);
      return deleteResult;
    },
    get(arg0) {
      let value = set;
      obj = set;
      if (value) {
        value = obj.get(arg0);
      }
      return value;
    },
    has(arg0) {
      const hasItem = set && set.has(arg0);
      return hasItem;
    },
    set(arg0, arg1) {
      obj = closure_0;
      if (!obj) {
        const tmp2 = closure_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    }
  };
  return obj;
};
