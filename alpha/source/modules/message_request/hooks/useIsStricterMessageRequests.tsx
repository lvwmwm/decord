// Module ID: 14875
// Function ID: 14876
// Name: useIsStricterMessageRequests
// Dependencies: [14835, 2]
// Exports: default

// Module 14875 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14835 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
