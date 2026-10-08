// Module ID: 1302
// Function ID: 1303
// Name: getSideChannel
// Dependencies: [1303, 1341, 1342, 1305, 1339]

// Module 1302 (getSideChannel)
import _mod1303 from "module_1303" /* 1303 */;
import _mod1305 from "module_1305" /* 1305 */;
import inspect_ from "inspect_" /* 1339 */;
import _mod1341 from "module_1341" /* 1341 */;
import getSideChannelList from "getSideChannelList" /* 1342 */;

let closure_0;

let closure_2 = _mod1303 || _mod1341 || getSideChannelList;
const tmp = _mod1303 || _mod1341 || getSideChannelList;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const self = this;
        const self2 = this;
        const tmp3 = _mod1305;
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
