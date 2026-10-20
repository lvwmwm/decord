// Module ID: 1303
// Function ID: 1304
// Name: getSideChannel
// Dependencies: [1304, 1342, 1343, 1306, 1340]

// Module 1303 (getSideChannel)
import _mod1304 from "module_1304" /* 1304 */;
import _mod1306 from "module_1306" /* 1306 */;
import inspect_ from "inspect_" /* 1340 */;
import _mod1342 from "module_1342" /* 1342 */;
import getSideChannelList from "getSideChannelList" /* 1343 */;

let closure_0;

let closure_2 = _mod1304 || _mod1342 || getSideChannelList;
const tmp = _mod1304 || _mod1342 || getSideChannelList;

export default function getSideChannel() {
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
