// Module ID: 13428
// Function ID: 13429
// Name: useIsStricterMessageRequests
// Dependencies: [13390, 2]
// Exports: default

// Module 13428 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13390 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
