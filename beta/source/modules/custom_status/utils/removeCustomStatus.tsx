// Module ID: 10525
// Function ID: 10526
// Name: removeCustomStatus
// Dependencies: [10523, 2]
// Exports: default

// Module 10525 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10523 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
