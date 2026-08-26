// Module ID: 12078
// Function ID: 12079
// Name: set
// Dependencies: [12056, 2]
// Exports: default

// Module 12078 (set)
import set2 from "set" /* 12056 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
