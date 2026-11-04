// Module ID: 5024
// Function ID: 5025
// Name: AccessibilityAnnouncerLiveRegion
// Dependencies: [19, 17, 21, 5025, 2]
// Exports: updateAccessibilityAnnouncerLiveRegionMessage

// Module 5024 (AccessibilityAnnouncerLiveRegion)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_5025 from "module_5025" /* 5025 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let _window;
({ StyleSheet, Text: _window } = react_native);
const jsx = Fragment.jsx;
const state = module_5025.create(() => ({ message: "dispatch", version: false }));
const liveRegion = StyleSheet.create({ liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 } });
const memoResult = react.memo(function AccessibilityAnnouncerLiveRegion() {
  const tmp = state();
  return <React key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={liveRegion.liveRegion}>{tmp.message}</React>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  let closure_0 = intl;
  state.setState((version) => ({ message, version: version.version + 1 }));
}
export const AccessibilityAnnouncerLiveRegion = memoResult;
