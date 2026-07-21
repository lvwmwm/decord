// Module ID: 11467
// Function ID: 89339
// Name: set
// Dependencies: []
// Exports: default

// Module 11467 (set)
const set = new Set([102]);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(dependencyMap[0]).useIsTeenInCountrySet(set);
};
