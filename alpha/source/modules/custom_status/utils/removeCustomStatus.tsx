// Module ID: 10860
// Function ID: 10861
// Name: removeCustomStatus
// Dependencies: [10858, 2]
// Exports: default

// Module 10860 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
