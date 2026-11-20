// Module ID: 13210
// Function ID: 13211
// Name: useIsStricterMessageRequests
// Dependencies: [13169, 2]
// Exports: default

// Module 13210 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13169 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
