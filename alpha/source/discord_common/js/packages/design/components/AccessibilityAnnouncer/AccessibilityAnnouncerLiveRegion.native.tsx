// Module ID: 4542
// Function ID: 4543
// Name: AccessibilityAnnouncerLiveRegion
// Dependencies: [19, 17, 21, 4543, 2]
// Exports: updateAccessibilityAnnouncerLiveRegionMessage

// Module 4542 (AccessibilityAnnouncerLiveRegion)
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ StyleSheet, Text: closure_0 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const module_4543 = fn(4543);
const state = module_4543.create(() => ({ message: "disabled", version: false }));
const liveRegion = StyleSheet.create({ liveRegion: { position: "absolute", top: 0, left: 0, width: 1, height: 1, opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  const message = intl;
  state.setState((version) => ({ message, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = noop.memo(() => {
  const tmp = state();
  return <React key={tmp.version} accessibilityLiveRegion="polite" pointerEvents="none" style={liveRegion.liveRegion}>{tmp.message}</React>;
});
