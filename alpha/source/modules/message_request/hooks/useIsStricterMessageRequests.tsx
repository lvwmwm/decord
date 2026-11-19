// Module ID: 13240
// Function ID: 13241
// Name: useIsStricterMessageRequests
// Dependencies: [13199, 2]
// Exports: default

// Module 13240 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13199 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
