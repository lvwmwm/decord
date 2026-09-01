// Module ID: 12009
// Function ID: 12010
// Name: set
// Dependencies: [11988, 2]
// Exports: default

// Module 12009 (set)
import set2 from "set" /* 11988 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
