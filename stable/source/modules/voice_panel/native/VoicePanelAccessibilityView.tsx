// Module ID: 16851
// Function ID: 16852
// Name: VoicePanelAccessibilityView
// Dependencies: [109, 19, 16846, 21, 5264, 558, 576, 16847, 2]

// Module 16851 (VoicePanelAccessibilityView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AccessibilityView from "AccessibilityView" /* 5264 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16846 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const VoicePanelPIPStateContext = tmp(16847);
let closure_2 = ["style", "pointerEvents", "nativeID", "accessibilityViewIsModal", "onAccessibilityEscape"];
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const jsx = Fragment.jsx;
let closure_6 = react.memo(AccessibilityView.AccessibilityViewAnimated);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityViewIsModal;
  let nativeID;
  let onAccessibilityEscape;
  let pointerEvents;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(14);
  if (cResult[0] !== arg0) {
    ({ style, pointerEvents, nativeID, accessibilityViewIsModal, onAccessibilityEscape } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = accessibilityViewIsModal;
    cResult[2] = nativeID;
    cResult[3] = onAccessibilityEscape;
    cResult[4] = tmp12;
    cResult[5] = style;
    cResult[6] = pointerEvents;
    tmp9 = pointerEvents;
    tmp8 = style;
    tmp7 = tmp12;
    tmp6 = onAccessibilityEscape;
    tmp5 = nativeID;
    tmp4 = accessibilityViewIsModal;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  let str = "box-none";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  const tmpResult = VoicePanelPIPStateContext;
  if (tmp4) {
    tmp4 = tmpResult.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp6) {
      if (cResult[9] === str) {
        if (cResult[10] === tmp7) {
          if (cResult[11] === tmp8) {
            let tmp14;
            if (cResult[12] === tmp4) {
              tmp14 = cResult[13];
            }
            return tmp14;
          }
        }
      }
    }
  }
  const merged = Object.assign(tmp7);
  const tmp16 = <closure_6 style={tmp8} pointerEvents={str} nativeID={tmp5} accessibilityViewIsModal={tmp4} onAccessibilityEscape={tmp6} />;
  cResult[7] = tmp5;
  cResult[8] = tmp6;
  cResult[9] = str;
  cResult[10] = tmp7;
  cResult[11] = tmp8;
  cResult[12] = tmp4;
  cResult[13] = tmp16;
  tmp14 = tmp16;
}) : ((pointerEvents) => {
  let nativeID;
  let onAccessibilityEscape;
  let str = pointerEvents.pointerEvents;
  const style = pointerEvents.style;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  ({ nativeID, onAccessibilityEscape } = pointerEvents);
  const merged = Object.assign(pointerEvents, Object.assign({ style: 0, pointerEvents: 0, nativeID: 0, accessibilityViewIsModal: 0, onAccessibilityEscape: 0 }));
  const obj2 = { style, pointerEvents: str, nativeID, accessibilityViewIsModal, onAccessibilityEscape };
  const obj = VoicePanelPIPStateContext;
  const tmp2 = jsx;
  const tmp3 = closure_6;
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  const merged1 = Object.assign(merged);
  return tmp2(tmp3, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default tmp2;
