// Module ID: 4829
// Function ID: 4830
// Name: AccessibilityAnnouncerLiveRegion
// Dependencies: [19, 17, 21, 4812, 558, 576, 2]
// Exports: updateAccessibilityAnnouncerLiveRegionMessage

// Module 4829 (AccessibilityAnnouncerLiveRegion)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_4812 from "module_4812" /* 4812 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
({ StyleSheet, Text: c2 } = react_native);
const jsx = Fragment.jsx;
const state = module_4812.create(() => ({ message: "emoji", version: false }));
const styles = StyleSheet.create({ liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AccessibilityAnnouncerLiveRegion() {
  let message;
  let version;
  const obj = react2;
  const cResult = obj.c(3);
  ({ message, version } = state());
  state();
  if (cResult[0] === message) {
    let tmp3;
    if (cResult[1] === version) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <React2 key={version} accessibilityLiveRegion="polite" pointerEvents="none" style={closure_5.liveRegion}>{message}</React2>;
  cResult[0] = message;
  cResult[1] = version;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function AccessibilityAnnouncerLiveRegion() {
  const tmp = state();
  return <React2 key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={closure_5.liveRegion}>{tmp.message}</React2>;
}));
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  let closure_0 = intl;
  state.setState((version) => ({ message, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;
