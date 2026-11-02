// Module ID: 14018
// Function ID: 14019
// Name: useIsStricterMessageRequests
// Dependencies: [13983, 2]
// Exports: default

// Module 14018 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13983 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
