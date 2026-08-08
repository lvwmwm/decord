// Module ID: 11805
// Function ID: 11806
// Name: set
// Dependencies: [11787, 2]
// Exports: default

// Module 11805 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11787) /* set */.useIsTeenInCountrySet(set);
};
