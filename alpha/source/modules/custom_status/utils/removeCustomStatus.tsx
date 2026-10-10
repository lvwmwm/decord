// Module ID: 10523
// Function ID: 10524
// Name: removeCustomStatus
// Dependencies: [10521, 2]
// Exports: default

// Module 10523 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10521 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
