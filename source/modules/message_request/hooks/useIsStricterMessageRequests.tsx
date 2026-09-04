// Module ID: 12377
// Function ID: 12378
// Name: set
// Dependencies: [12351, 2]
// Exports: default

// Module 12377 (set)
import set2 from "set" /* 12351 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
