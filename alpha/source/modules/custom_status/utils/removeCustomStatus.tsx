// Module ID: 11542
// Function ID: 11543
// Name: removeCustomStatus
// Dependencies: [11540, 2]
// Exports: default

// Module 11542 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11540 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
