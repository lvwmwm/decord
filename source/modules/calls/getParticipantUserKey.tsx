// Module ID: 4958
// Function ID: 42613
// Name: getParticipantUserKey
// Dependencies: [284214097]
// Exports: default

// Module 4958 (getParticipantUserKey)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
