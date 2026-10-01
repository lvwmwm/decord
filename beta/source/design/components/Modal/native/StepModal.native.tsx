// Module ID: 13993
// Function ID: 13994
// Name: StepModal
// Dependencies: [32, 19, 17, 21, 4836, 5994, 1613, 10769, 13994, 2]
// Exports: StepModal

// Module 13993 (StepModal)
import react_native from "react-native" /* 17 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import Modal2 from "Modal" /* 10769 */;
import ModalStepIndicator2 from "ModalStepIndicator" /* 13994 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let rect;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { height: "100%" }, stepContainer: rect };
rect = { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, height: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  let ModalStepIndicator;
  let closure_2;
  let first;
  let items1;
  let items2;
  let num;
  let obj5;
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.assign({ steps: 0, onWillFocus: 0 }));
  closure_2 = undefined;
  let tmp2 = closure_8();
  const tmp3 = useSafeAreaInsetsDefault();
  [first, closure_2] = react.useState(0);
  const items = [onWillFocus, steps];
  const obj = { style: tmp2.container, children: items1 };
  const callback = react.useCallback((onDidFocus) => {
    let num;
    const arr = steps;
    const tmp2 = closure_2;
    if (steps != null) {
      num = arr.indexOf(tmp.name);
    }
    if (num == null) {
      num = 0;
    }
    tmp2(num);
    if (onWillFocus != null) {
      onWillFocus(onDidFocus);
    }
  }, items);
  const obj2 = { onWillFocus: callback, headerStyle: { height: NavigatorConstants.NAV_BAR_HEIGHT + tmp3.top }, hideTitle: true };
  const Modal = Modal2.Modal;
  const merged1 = Object.assign(merged);
  items1 = [, ];
  ({ height: NavigatorConstants.NAV_BAR_HEIGHT + tmp3.top });
  items1[0] = metroRequire(Modal, obj2);
  const obj4 = { style: items2, pointerEvents: "box-none", children: metroRequire(ModalStepIndicator, obj5) };
  items2 = [tmp2.stepContainer, { marginTop: tmp3.top }];
  obj5 = { currentStep: first, totalSteps: num };
  num = undefined;
  ModalStepIndicator = ModalStepIndicator2.ModalStepIndicator;
  const tmp7 = metroImportDefault;
  if (steps != null) {
    num = steps.length;
  }
  if (num == null) {
    num = 0;
  }
  items1[1] = metroRequire(View, obj4);
  return tmp7(View, obj);
};
