// Module ID: 11938
// Function ID: 11939
// Name: useIsStricterMessageRequests
// Dependencies: [11912, 2]
// Exports: default

// Module 11938 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 11912 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
