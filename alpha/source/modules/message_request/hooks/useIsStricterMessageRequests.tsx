// Module ID: 13376
// Function ID: 13377
// Name: useIsStricterMessageRequests
// Dependencies: [13338, 2]
// Exports: default

// Module 13376 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13338 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
