// Module ID: 13138
// Function ID: 101159
// Name: StepModal
// Dependencies: [57, 31, 27, 33, 4130, 5084, 1557, 11100, 13139, 2]
// Exports: StepModal

// Module 13138 (StepModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { height: "100%" } };
_createForOfIteratorHelperLoose = { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.stepContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  let obj = Object.create(null);
  obj.steps = 0;
  obj.onWillFocus = 0;
  const merged = Object.assign(steps, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  const tmp4 = onWillFocus(1557)();
  const tmp5 = callback(React.useState(0), 2);
  const dependencyMap = tmp5[1];
  const items = [onWillFocus, steps];
  obj = { style: tmp3.container };
  callback = React.useCallback((route) => {
    let index;
    if (null != steps) {
      index = steps.indexOf(tmp.name);
    }
    let num = 0;
    if (null != index) {
      num = index;
    }
    closure_2(num);
    if (null != onWillFocus) {
      onWillFocus(route);
    }
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onWillFocus"] = callback;
  obj["headerStyle"] = { height: steps(5084).NAV_BAR_HEIGHT + tmp4.top };
  obj["hideTitle"] = true;
  const items1 = [callback2(steps(11100).Modal, obj), ];
  const obj2 = { style: items2, pointerEvents: "box-none" };
  items2 = [tmp3.stepContainer, { marginTop: tmp4.top }];
  const obj3 = { currentStep: tmp5[0] };
  let length;
  if (null != steps) {
    length = steps.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  obj3.totalSteps = num;
  obj2.children = callback2(steps(13139).ModalStepIndicator, obj3);
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  return closure_7(View, obj);
};
