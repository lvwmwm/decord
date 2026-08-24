// Module ID: 11662
// Function ID: 11663
// Name: set
// Dependencies: [11640, 2]
// Exports: default

// Module 11662 (set)
import set2 from "set" /* 11640 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
