// Module ID: 14289
// Function ID: 14290
// Name: useIsStricterMessageRequests
// Dependencies: [14249, 2]
// Exports: default

// Module 14289 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14249 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
