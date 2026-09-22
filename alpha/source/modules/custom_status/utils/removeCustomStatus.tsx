// Module ID: 11391
// Function ID: 11392
// Name: removeCustomStatus
// Dependencies: [11389, 2]
// Exports: default

// Module 11391 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11389 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
