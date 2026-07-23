// Module ID: 9306
// Function ID: 72681
// Name: measureInWindowForFWO
// Dependencies: [9307, 2]

// Module 9306 (measureInWindowForFWO)
import NativeFWOMeasureModule from "NativeFWOMeasureModule";

const __measureInWindowForFWO = global.__measureInWindowForFWO;
let closure_1 = { code: "function measureInWindowForFWO_FWOMeasureUtilsTsx1(tag){const{_measureInWindowForFWO}=this.__closure;var _measureInWindowForFW,_measureInWindowForFW2;return(_measureInWindowForFW=(_measureInWindowForFW2=_measureInWindowForFWO)===null||_measureInWindowForFW2===void 0?void 0:_measureInWindowForFW2(tag))!==null&&_measureInWindowForFW!==void 0?_measureInWindowForFW:null;}" };
const tmp3 = (() => {
  export function measureInWindowForFWO(value) {
    let tmp;
    if (null != outer1_0) {
      tmp = outer1_0(value);
    }
    let tmp4 = null;
    if (null != tmp) {
      tmp4 = tmp;
    }
    return tmp4;
  }
  measureInWindowForFWO.__closure = { _measureInWindowForFWO: __measureInWindowForFWO };
  measureInWindowForFWO.__workletHash = 12993496951221;
  measureInWindowForFWO.__initData = closure_1;
  return measureInWindowForFWO;
})();
const result = require("set").fileFinishedImporting("modules/screen/native/FWOMeasureUtils.tsx");
