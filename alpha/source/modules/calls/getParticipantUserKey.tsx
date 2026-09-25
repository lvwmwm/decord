// Module ID: 5735
// Function ID: 5736
// Name: getParticipantUserKey
// Dependencies: [2]
// Exports: default

// Module 5735 (getParticipantUserKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};
