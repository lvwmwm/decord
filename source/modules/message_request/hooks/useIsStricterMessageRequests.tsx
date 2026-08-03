// Module ID: 11657
// Function ID: 11658
// Name: set
// Dependencies: [11637, 2]
// Exports: default

// Module 11657 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11637) /* set */.useIsTeenInCountrySet(set);
};
