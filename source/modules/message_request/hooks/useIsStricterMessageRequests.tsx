// Module ID: 11724
// Function ID: 11725
// Name: set
// Dependencies: [11706, 2]
// Exports: default

// Module 11724 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11706) /* set */.useIsTeenInCountrySet(set);
};
