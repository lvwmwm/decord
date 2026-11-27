// Module ID: 13436
// Function ID: 13437
// Name: useIsStricterMessageRequests
// Dependencies: [13398, 2]
// Exports: default

// Module 13436 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13398 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
