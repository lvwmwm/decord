// Module ID: 15826
// Function ID: 122143
// Name: VoicePanelAccessibilityView
// Dependencies: [31, 15817, 33, 4525, 15821, 2]
// Exports: default

// Module 15826 (VoicePanelAccessibilityView)
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_4 = require("result").memo(require("AccessibilityView").AccessibilityViewAnimated);
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
  let nativeID;
  let onAccessibilityEscape;
  let str = pointerEvents.pointerEvents;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  let obj = { style: 0, pointerEvents: 0, nativeID: 0, accessibilityViewIsModal: 0, onAccessibilityEscape: 0 };
  ({ nativeID, onAccessibilityEscape } = pointerEvents);
  Object.setPrototypeOf(null);
  const merged = Object.assign(pointerEvents, obj);
  obj = { style: pointerEvents.style, pointerEvents: str, nativeID };
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj2.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  obj.accessibilityViewIsModal = accessibilityViewIsModal;
  obj.onAccessibilityEscape = onAccessibilityEscape;
  const merged1 = Object.assign(merged);
  return <closure_4 style={arg0.style} pointerEvents={str} nativeID={nativeID} />;
};
