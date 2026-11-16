// Module ID: 11577
// Function ID: 11578
// Name: removeCustomStatus
// Dependencies: [11575, 2]
// Exports: default

// Module 11577 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11575 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
