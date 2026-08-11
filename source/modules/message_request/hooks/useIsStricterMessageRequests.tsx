// Module ID: 11809
// Function ID: 11810
// Name: set
// Dependencies: [11791, 2]
// Exports: default

// Module 11809 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11791) /* set */.useIsTeenInCountrySet(set);
};
