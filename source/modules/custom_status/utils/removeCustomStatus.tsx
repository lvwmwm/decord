// Module ID: 11052
// Function ID: 11053
// Name: removeCustomStatus
// Dependencies: [11050, 2]
// Exports: default

// Module 11052 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 11050 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
