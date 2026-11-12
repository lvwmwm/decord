// Module ID: 9475
// Function ID: 9476
// Name: removeCustomStatus
// Dependencies: [9473, 2]
// Exports: default

// Module 9475 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9473 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
