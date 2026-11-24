// Module ID: 13253
// Function ID: 13254
// Name: useIsStricterMessageRequests
// Dependencies: [13215, 2]
// Exports: default

// Module 13253 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13215 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
