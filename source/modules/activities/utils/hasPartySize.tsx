// Module ID: 10897
// Function ID: 84716
// Name: hasPartySize
// Dependencies: []
// Exports: hasPartySize

// Module 10897 (hasPartySize)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
