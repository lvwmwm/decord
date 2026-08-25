// Module ID: 12005
// Function ID: 12006
// Name: set
// Dependencies: [11983, 2]
// Exports: default

// Module 12005 (set)
import set2 from "set" /* 11983 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
