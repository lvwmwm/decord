// Module ID: 9554
// Function ID: 9555
// Name: removeCustomStatus
// Dependencies: [9552, 2]
// Exports: default

// Module 9554 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
