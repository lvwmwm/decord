// Module ID: 12699
// Function ID: 12700
// Name: useIsStricterMessageRequests
// Dependencies: [12673, 2]
// Exports: default

// Module 12699 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12673 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
