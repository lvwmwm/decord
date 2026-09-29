// Module ID: 12728
// Function ID: 12729
// Name: useIsStricterMessageRequests
// Dependencies: [12702, 2]
// Exports: default

// Module 12728 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12702 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
