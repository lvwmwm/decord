// Module ID: 9607
// Function ID: 9608
// Name: removeCustomStatus
// Dependencies: [9605, 2]
// Exports: default

// Module 9607 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9605 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
