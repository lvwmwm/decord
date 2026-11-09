// Module ID: 14257
// Function ID: 14258
// Name: useIsStricterMessageRequests
// Dependencies: [14217, 2]
// Exports: default

// Module 14257 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14217 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
