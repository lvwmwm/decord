// Module ID: 5336
// Function ID: 5337
// Name: getParticipantUserKey
// Dependencies: [2]
// Exports: default

// Module 5336 (getParticipantUserKey)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
