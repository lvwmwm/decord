// Module ID: 3842
// Function ID: 32011
// Name: updateAccessibilityAnnouncerLiveRegionMessage
// Dependencies: [0, 0]
// Exports: updateAccessibilityAnnouncerLiveRegionMessage

// Module 3842 (updateAccessibilityAnnouncerLiveRegionMessage)
import { Text } from "__exportStarResult1";
import importAllResult from "__exportStarResult1";

const jsx = arg1(dependencyMap[2]).jsx;
let closure_2 = arg1(dependencyMap[3]).create(() => ({ message: undefined, version: 0 }));
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(() => {
  const tmp = state();
  return <Text key={tmp.version} accessibilityLiveRegion="polite" style={{ display: "none" }}>{tmp.message}</Text>;
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  const Text = intl;
  state.setState((version) => ({ message: version, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;
