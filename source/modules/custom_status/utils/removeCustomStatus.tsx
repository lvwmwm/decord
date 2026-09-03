// Module ID: 9115
// Function ID: 9116
// Name: removeCustomStatus
// Dependencies: [9113, 2]
// Exports: default

// Module 9115 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9113 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
