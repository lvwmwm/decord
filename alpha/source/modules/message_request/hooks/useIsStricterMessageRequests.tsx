// Module ID: 14249
// Function ID: 14250
// Name: useIsStricterMessageRequests
// Dependencies: [14214, 2]
// Exports: default

// Module 14249 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14214 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
