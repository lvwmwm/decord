// Module ID: 15945
// Function ID: 15946
// Name: VoicePanelAccessibilityView
// Dependencies: [19, 15936, 21, 4587, 15940, 2]
// Exports: default

// Module 15945 (VoicePanelAccessibilityView)
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_4 = require("noop").memo(require("AccessibilityView").AccessibilityViewAnimated);
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
  let nativeID;
  let onAccessibilityEscape;
  let str = pointerEvents.pointerEvents;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  ({ nativeID, onAccessibilityEscape } = pointerEvents);
  const merged = Object.assign(pointerEvents, Object.create(null));
  let obj = require(15940) /* context */;
  obj = { style: pointerEvents.style, pointerEvents: str, nativeID, accessibilityViewIsModal: null, onAccessibilityEscape: null };
  if (accessibilityViewIsModal) {
    accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
  }
  obj[3] = accessibilityViewIsModal;
  obj[4] = onAccessibilityEscape;
  const merged1 = Object.assign(merged);
  return <closure_4 style={arg0.style} pointerEvents={str} nativeID={nativeID} accessibilityViewIsModal={null} onAccessibilityEscape={null} />;
};
