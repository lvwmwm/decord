// Module ID: 3844
// Function ID: 32024
// Name: updateAccessibilityAnnouncerLiveRegionMessage
// Dependencies: [31, 27, 33, 3845, 2]
// Exports: updateAccessibilityAnnouncerLiveRegionMessage

// Module 3844 (updateAccessibilityAnnouncerLiveRegionMessage)
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import keys from "keys";
import importAllResult from "result";

let closure_2 = keys.create(() => ({ message: undefined, version: 0 }));
const memoResult = require("result").memo(() => {
  const tmp = state();
  return <Text key={tmp.version} accessibilityLiveRegion="polite" style={{ display: "none" }}>{tmp.message}</Text>;
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  let closure_0 = intl;
  state.setState((version) => ({ message: closure_0, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;
