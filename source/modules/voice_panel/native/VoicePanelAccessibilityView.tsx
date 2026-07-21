// Module ID: 15654
// Function ID: 119605
// Name: VoicePanelAccessibilityView
// Dependencies: []
// Exports: default

// Module 15654 (VoicePanelAccessibilityView)
const VoicePanelPIPModes = arg1(dependencyMap[1]).VoicePanelPIPModes;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = importAll(dependencyMap[0]).memo(arg1(dependencyMap[3]).AccessibilityViewAnimated);
const importAllResult = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default function VoicePanelAccessibilityView(pointerEvents) {
  let nativeID;
  let onAccessibilityEscape;
  let str = pointerEvents.pointerEvents;
  if (str === undefined) {
    str = "box-none";
  }
  let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
  let obj = { 9223372036854775807: null, 0: null, 9223372036854775807: null, 9223372036854775807: null, 0: null };
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
  return <closure_4 {...obj} />;
};
