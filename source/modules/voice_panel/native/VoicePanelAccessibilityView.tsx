// Module ID: 17019
// Function ID: 17020
// Name: VoicePanelAccessibilityView
// Dependencies: [19, 17010, 21, 4920, 17014, 2]
// Exports: default

// Module 17019 (VoicePanelAccessibilityView)
import context from "context" /* 17014 */;
import { VoicePanelPIPModes } from "VoicePanelPIPModes" /* 17010 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = importAllResult.memo(require("AccessibilityView").AccessibilityViewAnimated);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
  let str = pointerEvents.pointerEvents;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  ({ nativeID, onAccessibilityEscape } = pointerEvents);
  const merged = Object.assign(pointerEvents, Object.create(null));
  let obj = context;
  obj = { style: pointerEvents.style, pointerEvents: str, nativeID, accessibilityViewIsModal: null, onAccessibilityEscape: null };
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  obj[3] = accessibilityViewIsModal;
  obj[4] = onAccessibilityEscape;
  const merged1 = Object.assign(merged);
  return <closure_4 style={arg0.style} pointerEvents={str} nativeID={nativeID} accessibilityViewIsModal={null} onAccessibilityEscape={null} />;
};
