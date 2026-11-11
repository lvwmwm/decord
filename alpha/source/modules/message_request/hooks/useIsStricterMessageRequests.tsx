// Module ID: 14765
// Function ID: 14766
// Name: useIsStricterMessageRequests
// Dependencies: [14726, 2]
// Exports: default

// Module 14765 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14726 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
