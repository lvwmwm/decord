// Module ID: 14761
// Function ID: 14762
// Name: useIsStricterMessageRequests
// Dependencies: [14722, 2]
// Exports: default

// Module 14761 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 14722 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
