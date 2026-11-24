// Module ID: 9062
// Function ID: 9063
// Name: removeCustomStatus
// Dependencies: [9060, 2]
// Exports: default

// Module 9062 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
