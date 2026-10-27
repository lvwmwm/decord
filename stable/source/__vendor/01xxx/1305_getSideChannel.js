// Module ID: 1305
// Function ID: 1306
// Name: getSideChannel
// Dependencies: [1306, 1344, 1345, 1308, 1342]

// Module 1305 (getSideChannel)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1308 from "module_1308" /* 1308 */;
import inspect_ from "inspect_" /* 1342 */;
import _mod1344 from "module_1344" /* 1344 */;
import getSideChannelList from "getSideChannelList" /* 1345 */;

let closure_0;

let closure_2 = _mod1306 || _mod1344 || getSideChannelList;
const tmp = _mod1306 || _mod1344 || getSideChannelList;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const self = this;
        const self2 = this;
        const tmp3 = _mod1308;
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
