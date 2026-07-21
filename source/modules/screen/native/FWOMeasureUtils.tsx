// Module ID: 9298
// Function ID: 72616
// Name: measureInWindowForFWO
// Dependencies: []

// Module 9298 (measureInWindowForFWO)
const _module = require(dependencyMap[0]);
const __measureInWindowForFWO = global.__measureInWindowForFWO;
let closure_1 = { code: "function measureInWindowForFWO_FWOMeasureUtilsTsx1(tag){const{_measureInWindowForFWO}=this.__closure;var _measureInWindowForFW,_measureInWindowForFW2;return(_measureInWindowForFW=(_measureInWindowForFW2=_measureInWindowForFWO)===null||_measureInWindowForFW2===void 0?void 0:_measureInWindowForFW2(tag))!==null&&_measureInWindowForFW!==void 0?_measureInWindowForFW:null;}" };
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/screen/native/FWOMeasureUtils.tsx");

export const measureInWindowForFWO = () => {
  function measureInWindowForFWO(value) {
    let tmp;
    if (null != callback) {
      tmp = callback(value);
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
}();
