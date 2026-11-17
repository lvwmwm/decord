// Module ID: 13956
// Function ID: 13957
// Name: useIsStricterMessageRequests
// Dependencies: [13915, 2]
// Exports: default

// Module 13956 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13915 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
