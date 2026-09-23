// Module ID: 12785
// Function ID: 12786
// Name: useIsStricterMessageRequests
// Dependencies: [12759, 2]
// Exports: default

// Module 12785 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12759 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
