// Module ID: 3879
// Function ID: 32153
// Name: defaultOnError
// Dependencies: [29, 31, 33, 3880, 3881, 3883, 3861]
// Exports: RiveView

// Module 3879 (defaultOnError)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
let closure_2 = ["onError", "hybridRef"];
({ useEffect: closure_4, useRef: closure_5 } = result);
function defaultOnError(message) {
  return console.error("[" + require(3880).RiveErrorType[message.type] + "] " + message.message);
}

export const RiveView = function RiveView(arg0) {
  let hybridRef;
  let onError;
  let obj = _require(3881);
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ onError, hybridRef } = arg0);
    _require = hybridRef;
    const tmp7 = callback(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onError;
    cResult[2] = tmp7;
    cResult[3] = hybridRef;
    let tmp2 = onError;
    let tmp3 = tmp7;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    _require = cResult[3];
  }
  if (null == tmp2) {
    tmp2 = defaultOnError;
  }
  const dependencyMap = callback3(null);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    function t0() {
      return () => {
        if (outer1_1.current) {
          callback(table[5]).callDispose(outer1_1.current);
          outer1_1.current = null;
          const obj = callback(table[5]);
        }
      };
    }
    const items = [];
    cResult[4] = t0;
    cResult[5] = items;
    let tmp8 = t0;
    let tmp9 = items;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  callback2(tmp8, tmp9);
  if (cResult[6] !== tmp4) {
    function t2(current) {
      closure_1.current = current;
      if (tmp) {
        closure_0.f(current);
      }
    }
    cResult[6] = tmp4;
    cResult[7] = t2;
    let tmp11 = t2;
  } else {
    tmp11 = cResult[7];
  }
  if (cResult[8] !== tmp2) {
    obj = { f: tmp2 };
    cResult[8] = tmp2;
    cResult[9] = obj;
    let tmp12 = obj;
  } else {
    tmp12 = cResult[9];
  }
  if (cResult[10] !== tmp11) {
    obj = { f: tmp11 };
    cResult[10] = tmp11;
    cResult[11] = obj;
    let tmp13 = obj;
  } else {
    tmp13 = cResult[11];
  }
  if (cResult[12] === tmp3) {
    if (cResult[13] === tmp12) {
      if (cResult[14] === tmp13) {
        let tmp14 = cResult[15];
      }
      return tmp14;
    }
  }
  const obj1 = { onError: tmp12, hybridRef: tmp13 };
  const tmp15 = jsx(_require(3861).NitroRiveView, Object.assign({}, tmp3, obj1));
  cResult[12] = tmp3;
  cResult[13] = tmp12;
  cResult[14] = tmp13;
  cResult[15] = tmp15;
  tmp14 = tmp15;
};
