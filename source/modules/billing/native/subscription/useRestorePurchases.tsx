// Module ID: 14099
// Function ID: 108411
// Name: useRestorePurchases
// Dependencies: [5, 57, 31, 3, 6658, 2]
// Exports: default

// Module 14099 (useRestorePurchases)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";
import importDefaultResult from "timestamp";

importDefaultResult = new importDefaultResult("useRestorePurchases");
const result = require("result").fileFinishedImporting("modules/billing/native/subscription/useRestorePurchases.tsx");

export default function useRestorePurchases() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.forceRestore;
  if (flag === undefined) {
    flag = true;
  }
  let closure_1;
  let set;
  function _restore(result, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  closure_1 = React.useRef(false);
  let tmp = _restore(React.useState(false), 2);
  set = tmp[1];
  const items = [flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = !ref.current;
    }
    if (tmp) {
      (function restore() {
        return outer1_3(...arguments);
      })();
    }
  }, items);
  return tmp[0];
};
