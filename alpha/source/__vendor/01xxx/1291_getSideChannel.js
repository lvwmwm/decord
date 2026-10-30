// Module ID: 1291
// Function ID: 1292
// Name: getSideChannel
// Dependencies: [1292, 1330, 1331, 1294, 1328]

// Module 1291 (getSideChannel)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1294 from "module_1294" /* 1294 */;
import inspect_ from "inspect_" /* 1328 */;
import _mod1330 from "module_1330" /* 1330 */;
import getSideChannelList from "getSideChannelList" /* 1331 */;

let closure_0;

let closure_2 = _mod1292 || _mod1330 || getSideChannelList;
const tmp = _mod1292 || _mod1330 || getSideChannelList;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const self = this;
        const self2 = this;
        const tmp3 = _mod1294;
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
