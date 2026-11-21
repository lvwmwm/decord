// Module ID: 13332
// Function ID: 13333
// Name: useIsStricterMessageRequests
// Dependencies: [13291, 2]
// Exports: default

// Module 13332 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13291 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
