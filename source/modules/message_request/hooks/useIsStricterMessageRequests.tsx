// Module ID: 11869
// Function ID: 11870
// Name: set
// Dependencies: [11847, 2]
// Exports: default

// Module 11869 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11847) /* set */.useIsTeenInCountrySet(set);
};
