// Module ID: 12578
// Function ID: 12579
// Name: useIsStricterMessageRequests
// Dependencies: [12552, 2]
// Exports: default

// Module 12578 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12552 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
