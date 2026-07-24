// Module ID: 14759
// Function ID: 112469
// Dependencies: [57, 31, 4534, 33, 4130, 7636, 5503, 14760, 2]

// Module 14759
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ getVisualEffectViewOverrides: closure_5, setVisualEffectViewOverides: closure_6 } = useVisualEffectViewOverrides);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const memoResult = importAllResult.memo(function VEVOOPropBlurAmount() {
  const tmp2 = callback(importAllResult.useState(false), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  const tmp4 = callback(importAllResult.useState(callback().blurAmountOverride), 2);
  const first1 = tmp4[0];
  const dependencyMap = tmp4[1];
  const tmp = callback2();
  callback = importAllResult.useCallback((arg0) => {
    if (null != arg0) {
      callback2(arg0);
    }
    const obj = {};
    const merged = Object.assign(outer1_5());
    obj["blurAmountOverride"] = arg0;
    outer1_6(obj);
  }, []);
  let obj = {};
  let toFixedResult;
  if (null != first1) {
    toFixedResult = first1.toFixed(3);
  }
  let str = "";
  if (null != toFixedResult) {
    str = toFixedResult;
  }
  obj.label = "Blur Amount " + str;
  obj.leadingStyle = tmp.enabledSwitchStyle;
  obj = {
    value: first,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first1;
      }
      callback(tmp3);
    }
  };
  obj.leading = jsx(_require(5503).FormSwitch, {
    value: first,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first1;
      }
      callback(tmp3);
    }
  });
  const ref = importAllResult.useRef(first1);
  const tmp7 = jsx;
  obj.subLabel = jsx(first1(14760), { disabled: !first, disabledOpacity: !first, initialValue: importAllResult.useRef(first1), onValueChange: callback });
  obj.disabled = !first;
  return tmp7(_require(7636).FormRow, obj);
});
const result = require("useVisualEffectViewOverrides").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;
