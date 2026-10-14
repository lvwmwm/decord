// Module ID: 10534
// Function ID: 10535
// Name: removeCustomStatus
// Dependencies: [10532, 2]
// Exports: default

// Module 10534 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10532 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
