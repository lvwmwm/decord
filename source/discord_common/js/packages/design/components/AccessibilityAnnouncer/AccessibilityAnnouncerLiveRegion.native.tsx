// Module ID: 1352
// Function ID: 1353
// Name: updateAccessibilityAnnouncerLiveRegionMessage
// Dependencies: [19, 17, 21, 1353, 2]
// Exports: updateAccessibilityAnnouncerLiveRegionMessage

// Module 1352 (updateAccessibilityAnnouncerLiveRegionMessage)
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import keys from "keys";
import importAllResult from "noop";

let closure_2 = keys.create(() => ({ message: "disabled", version: false }));
const memoResult = require("noop").memo(() => {
  const tmp = state();
  return <Text key={tmp.version} accessibilityLiveRegion="polite" style={{ display: "none" }}>{tmp.message}</Text>;
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx");

export const updateAccessibilityAnnouncerLiveRegionMessage = function updateAccessibilityAnnouncerLiveRegionMessage(intl) {
  let closure_0 = intl;
  state.setState((version) => ({ message: closure_0, version: version.version + 1 }));
};
export const AccessibilityAnnouncerLiveRegion = memoResult;
