// Module ID: 9542
// Function ID: 9543
// Name: removeCustomStatus
// Dependencies: [9540, 2]
// Exports: default

// Module 9542 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9540 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
