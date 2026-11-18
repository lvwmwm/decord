// Module ID: 13258
// Function ID: 13259
// Name: useIsStricterMessageRequests
// Dependencies: [13217, 2]
// Exports: default

// Module 13258 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13217 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
