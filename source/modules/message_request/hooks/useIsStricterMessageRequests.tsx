// Module ID: 11885
// Function ID: 11886
// Name: set
// Dependencies: [11863, 2]
// Exports: default

// Module 11885 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11863) /* set */.useIsTeenInCountrySet(set);
};
