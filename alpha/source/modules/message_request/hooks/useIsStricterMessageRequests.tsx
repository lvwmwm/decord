// Module ID: 12151
// Function ID: 12152
// Name: useIsStricterMessageRequests
// Dependencies: [12125, 2]
// Exports: default

// Module 12151 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12125 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
