// Module ID: 16922
// Function ID: 16923
// Name: VoicePanelAccessibilityView
// Dependencies: [19, 16913, 21, 5263, 16916, 2]
// Exports: default

// Module 16922 (VoicePanelAccessibilityView)
import Fragment from "Fragment" /* 21 */;
import AccessibilityView from "AccessibilityView" /* 5263 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16913 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 16916 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const jsx = Fragment.jsx;
let closure_4 = react.memo(AccessibilityView.AccessibilityViewAnimated);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
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
  const tmp3 = closure_4;
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  const merged1 = Object.assign(merged);
  return tmp2(tmp3, obj2);
};
