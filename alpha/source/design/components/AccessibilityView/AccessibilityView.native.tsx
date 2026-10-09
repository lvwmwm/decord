// Module ID: 5358
// Function ID: 5359
// Name: AccessibilityView
// Dependencies: [109, 19, 17, 21, 558, 576, 5359, 4811, 2]

// Module 5358 (AccessibilityView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle" /* 5359 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import size from "module_2" /* 2 */;

let closure_3 = ["accessibilityViewIsModal", "nativeID", "collapsable", "onAccessibilityEscape", "ref"];
const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccessibilityView(arg0) {
  let accessibilityViewIsModal;
  let collapsable;
  let nativeID;
  let onAccessibilityEscape;
  let ref;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(17);
  if (cResult[0] !== arg0) {
    ({ accessibilityViewIsModal, nativeID, collapsable, onAccessibilityEscape, ref } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = collapsable;
    cResult[2] = nativeID;
    cResult[3] = onAccessibilityEscape;
    cResult[4] = tmp11;
    cResult[5] = ref;
    cResult[6] = accessibilityViewIsModal;
    tmp8 = accessibilityViewIsModal;
    tmp7 = ref;
    tmp6 = tmp11;
    tmp5 = onAccessibilityEscape;
    tmp4 = nativeID;
    tmp3 = collapsable;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
  }
  if (undefined !== tmp8 && tmp8) {
    if (null == tmp5) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  if (cResult[7] === (undefined !== tmp8 && tmp8)) {
    let tmp14;
    if (cResult[8] === tmp4) {
      tmp14 = cResult[9];
    }
    useAccessibilityViewIsModalToggleDefault(tmp14);
    if (cResult[10] === (undefined !== tmp8 && tmp8)) {
      if (cResult[11] === tmp4) {
        if (cResult[12] === tmp5) {
          if (cResult[13] === tmp6) {
            if (cResult[14] === tmp7) {
              let tmp19;
              if (cResult[15] === (null == tmp4 && tmp3)) {
                tmp19 = cResult[16];
              }
              return tmp19;
            }
          }
        }
      }
    }
    const merged = Object.assign(tmp6);
    const tmp25 = <View ref={tmp7} nativeID={tmp4} collapsable={null == tmp4 && tmp3} onAccessibilityEscape={tmp5} accessibilityViewIsModal={undefined !== tmp8 && tmp8} />;
    cResult[10] = undefined !== tmp8 && tmp8;
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = tmp6;
    cResult[14] = tmp7;
    cResult[15] = null == tmp4 && tmp3;
    cResult[16] = tmp25;
    tmp19 = tmp25;
  }
  const obj3 = { accessibilityViewIsModal: undefined !== tmp8 && tmp8, nativeID: tmp4 };
  cResult[7] = undefined !== tmp8 && tmp8;
  cResult[8] = tmp4;
  cResult[9] = obj3;
  tmp14 = obj3;
}) : (function AccessibilityView(accessibilityViewIsModal) {
  let collapsable;
  let nativeID;
  let onAccessibilityEscape;
  let ref;
  let tmp5;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  ({ collapsable, ref } = accessibilityViewIsModal);
  const merged = Object.assign(accessibilityViewIsModal, Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0, ref: 0 }));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
  const obj = { ref, nativeID, collapsable: tmp5, onAccessibilityEscape, accessibilityViewIsModal: flag };
  tmp5 = null == nativeID;
  const tmp3 = jsx;
  const tmp4 = View;
  if (tmp5) {
    tmp5 = collapsable;
  }
  const merged1 = Object.assign(merged);
  return tmp3(tmp4, obj);
});
const animatedComponent = ReanimatedRexport.createAnimatedComponent(tmp3);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = tmp3;
export const AccessibilityViewAnimated = animatedComponent;
