// Module ID: 14235
// Function ID: 14236
// Name: useIsStricterMessageRequests
// Dependencies: [14200, 2]
// Exports: default

// Module 14235 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14200 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
