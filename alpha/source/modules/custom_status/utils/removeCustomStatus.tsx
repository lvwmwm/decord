// Module ID: 11404
// Function ID: 11405
// Name: removeCustomStatus
// Dependencies: [11402, 2]
// Exports: default

// Module 11404 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11402 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
