// Module ID: 5937
// Function ID: 5938
// Name: getParticipantUserKey
// Dependencies: [2]
// Exports: default

// Module 5937 (getParticipantUserKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
