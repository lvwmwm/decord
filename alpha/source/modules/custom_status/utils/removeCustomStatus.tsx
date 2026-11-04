// Module ID: 11593
// Function ID: 11594
// Name: removeCustomStatus
// Dependencies: [11591, 2]
// Exports: default

// Module 11593 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11591 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
