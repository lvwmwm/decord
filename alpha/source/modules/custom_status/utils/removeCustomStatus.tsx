// Module ID: 9476
// Function ID: 9477
// Name: removeCustomStatus
// Dependencies: [9474, 2]
// Exports: default

// Module 9476 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9474 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
