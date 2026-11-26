// Module ID: 9536
// Function ID: 9537
// Name: removeCustomStatus
// Dependencies: [9534, 2]
// Exports: default

// Module 9536 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9534 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
