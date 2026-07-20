// Module ID: 4956
// Function ID: 42572
// Name: getParticipantUserKey
// Dependencies: []
// Exports: default

// Module 4956 (getParticipantUserKey)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
