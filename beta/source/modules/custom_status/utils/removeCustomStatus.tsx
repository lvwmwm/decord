// Module ID: 11435
// Function ID: 11436
// Name: removeCustomStatus
// Dependencies: [11433, 2]
// Exports: default

// Module 11435 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11433 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
