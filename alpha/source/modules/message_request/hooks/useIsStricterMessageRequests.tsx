// Module ID: 14283
// Function ID: 14284
// Name: useIsStricterMessageRequests
// Dependencies: [14243, 2]
// Exports: default

// Module 14283 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14243 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
