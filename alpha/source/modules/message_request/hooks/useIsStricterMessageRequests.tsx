// Module ID: 14236
// Function ID: 14237
// Name: useIsStricterMessageRequests
// Dependencies: [14201, 2]
// Exports: default

// Module 14236 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14201 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
