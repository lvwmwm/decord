// Module ID: 10898
// Function ID: 84729
// Name: hasPartySize
// Dependencies: []
// Exports: hasPartySize

// Module 10898 (hasPartySize)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
