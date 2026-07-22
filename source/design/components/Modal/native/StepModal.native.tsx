// Module ID: 12972
// Function ID: 98680
// Name: StepModal
// Dependencies: [161, 219, 0, 4, 65, 57, 6, 7, 15, 17]
// Exports: StepModal

// Module 12972 (StepModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import WebSocketModule from "WebSocketModule";
import { View } from "__exportStarResult1";
import log from "log";
import _toConsumableArray from "_toConsumableArray";
import _getPrototypeOf from "_getPrototypeOf";

({ jsx: closure_6, jsxs: closure_7 } = log);
_toConsumableArray = { container: { height: "100%" } };
_toConsumableArray = { 0: -95027199, 0: 2010710017, 9223372036854775807: -1150550015, 0: 709951489, "Bool(false)": -1823407817, "Bool(false)": 732123400, height: require("_slicedToArray").NAV_BAR_HEIGHT };
_toConsumableArray.stepContainer = _toConsumableArray;
_toConsumableArray = _toConsumableArray.createStyles(_toConsumableArray);
const result = _getPrototypeOf.fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const arg1 = steps;
  const onWillFocus = steps.onWillFocus;
  const importDefault = onWillFocus;
  let obj = Object.create(null);
  obj.steps = 0;
  obj.onWillFocus = 0;
  const merged = Object.assign(steps, obj);
  const tmp3 = _toConsumableArray();
  const tmp4 = importDefault(closure_2[6])();
  const tmp5 = callback(React.useState(0), 2);
  closure_2 = tmp5[1];
  const items = [onWillFocus, steps];
  obj = { style: tmp3.container };
  const callback = React.useCallback((route) => {
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
  obj["headerStyle"] = { height: arg1(closure_2[5]).NAV_BAR_HEIGHT + tmp4.top };
  obj["hideTitle"] = true;
  const items1 = [callback2(arg1(closure_2[7]).Modal, obj), ];
  const obj2 = { style: items2, pointerEvents: "box-none" };
  const items2 = [tmp3.stepContainer, { marginTop: tmp4.top }];
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
  obj2.children = callback2(arg1(closure_2[8]).ModalStepIndicator, obj3);
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  return closure_7(View, obj);
};
