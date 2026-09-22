// Module ID: 12703
// Function ID: 12704
// Name: useIsStricterMessageRequests
// Dependencies: [12677, 2]
// Exports: default

// Module 12703 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12677 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
