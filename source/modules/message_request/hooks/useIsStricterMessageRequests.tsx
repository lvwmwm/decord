// Module ID: 11690
// Function ID: 11691
// Name: set
// Dependencies: [11672, 2]
// Exports: default

// Module 11690 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11672) /* set */.useIsTeenInCountrySet(set);
};
