// Module ID: 13330
// Function ID: 13331
// Name: useIsStricterMessageRequests
// Dependencies: [13289, 2]
// Exports: default

// Module 13330 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13289 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
