// Module ID: 11613
// Function ID: 11614
// Name: set
// Dependencies: [11591, 2]
// Exports: default

// Module 11613 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11591) /* set */.useIsTeenInCountrySet(set);
};
