// Module ID: 11120
// Function ID: 11121
// Name: removeCustomStatus
// Dependencies: [11118, 2]
// Exports: default

// Module 11120 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 11118 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
