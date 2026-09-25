// Module ID: 11920
// Function ID: 11921
// Name: useIsStricterMessageRequests
// Dependencies: [11894, 2]
// Exports: default

// Module 11920 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 11894 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
