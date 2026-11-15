// Module ID: 11576
// Function ID: 11577
// Name: removeCustomStatus
// Dependencies: [11574, 2]
// Exports: default

// Module 11576 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
