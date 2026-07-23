// Module ID: 515
// Function ID: 6598
// Name: getSideChannel
// Dependencies: [516, 554, 555, 518, 552]

// Module 515 (getSideChannel)
import getSideChannelWeakMap from "getSideChannelWeakMap";

if (!getSideChannelWeakMap) {
  getSideChannelWeakMap = require("getSideChannelMap");
}
if (!getSideChannelWeakMap) {
  getSideChannelWeakMap = require("listGetNode");
}

export default function getSideChannel() {
  const obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = outer1_0(obj[3]);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3("Side channel does not contain " + outer1_0(obj[4])(arg0));
        throw tmp3;
      }
    },
    delete: function _delete(arg0) {
      let deleteResult = !tmp;
      if (!!store) {
        deleteResult = store.delete(arg0);
      }
      return deleteResult;
    },
    get(arg0) {
      let value = store;
      if (store) {
        value = store.get(arg0);
      }
      return value;
    },
    has(arg0) {
      let hasItem = !tmp;
      if (!!store) {
        hasItem = store.has(arg0);
      }
      return hasItem;
    },
    set(arg0, arg1) {
      if (!store) {
        store = outer1_2();
      }
      const result = store.set(arg0, arg1);
    }
  };
  return obj;
};
