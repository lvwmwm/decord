// Module ID: 14256
// Function ID: 14257
// Name: useIsStricterMessageRequests
// Dependencies: [14216, 2]
// Exports: default

// Module 14256 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14216 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
