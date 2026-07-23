// Module ID: 554
// Function ID: 6694
// Name: getSideChannelMap
// Dependencies: [517, 551, 518, 552]

// Module 554 (getSideChannelMap)
const tmp = require("getEvalledConstructor")("%Map%", true);
let closure_2 = tmp;
let closure_3 = require("callBoundIntrinsic")("Map.prototype.get", true);
let closure_4 = require("callBoundIntrinsic")("Map.prototype.set", true);
let closure_5 = require("callBoundIntrinsic")("Map.prototype.has", true);
let closure_6 = require("callBoundIntrinsic")("Map.prototype.delete", true);
let closure_7 = require("callBoundIntrinsic")("Map.prototype.size", true);
let getSideChannelMap = !tmp2;
if (!!tmp) {
  getSideChannelMap = function getSideChannelMap() {
    const obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          let tmp3 = outer1_0(obj[2]);
          const prototype = tmp3.prototype;
          tmp3 = new tmp3("Side channel does not contain " + outer1_0(obj[3])(arg0));
          throw tmp3;
        }
      },
      delete: function _delete(arg0) {
        if (c0) {
          if (0 === outer1_7(c0)) {
            c0 = undefined;
          }
          return outer1_6(c0, arg0);
        } else {
          return false;
        }
      },
      get(arg0) {
        if (closure_0) {
          return outer1_3(closure_0, arg0);
        }
      },
      has(arg0) {
        let tmp2 = !tmp;
        if (!!closure_0) {
          tmp2 = outer1_5(closure_0, arg0);
        }
        return tmp2;
      },
      set(arg0, arg1) {
        if (!closure_0) {
          const prototype = outer1_2.prototype;
          const tmp4 = new outer1_2();
          closure_0 = tmp4;
        }
        outer1_4(closure_0, arg0, arg1);
      }
    };
    return obj;
  };
}

export default getSideChannelMap;
