// Module ID: 11545
// Function ID: 11546
// Name: removeCustomStatus
// Dependencies: [11543, 2]
// Exports: default

// Module 11545 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11543 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
