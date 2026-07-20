// Module ID: 11460
// Function ID: 89303
// Name: set
// Dependencies: []
// Exports: default

// Module 11460 (set)
const set = new Set(["isArray"]);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(dependencyMap[0]).useIsTeenInCountrySet(set);
};
