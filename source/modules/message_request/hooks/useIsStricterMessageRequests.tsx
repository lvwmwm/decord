// Module ID: 11976
// Function ID: 11977
// Name: set
// Dependencies: [11955, 2]
// Exports: default

// Module 11976 (set)
import set2 from "set" /* 11955 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
