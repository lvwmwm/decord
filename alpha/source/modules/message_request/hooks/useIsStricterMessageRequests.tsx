// Module ID: 14003
// Function ID: 14004
// Name: useIsStricterMessageRequests
// Dependencies: [13968, 2]
// Exports: default

// Module 14003 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13968 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
