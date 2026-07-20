// Module ID: 10892
// Function ID: 84684
// Name: hasPartySize
// Dependencies: []
// Exports: hasPartySize

// Module 10892 (hasPartySize)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
