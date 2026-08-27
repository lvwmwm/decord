// Module ID: 11924
// Function ID: 11925
// Name: set
// Dependencies: [11902, 2]
// Exports: default

// Module 11924 (set)
import set2 from "set" /* 11902 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
