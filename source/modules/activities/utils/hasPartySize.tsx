// Module ID: 10948
// Function ID: 10949
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 10948 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
