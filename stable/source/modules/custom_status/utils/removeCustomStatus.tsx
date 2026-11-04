// Module ID: 11100
// Function ID: 11101
// Name: removeCustomStatus
// Dependencies: [11098, 2]
// Exports: default

// Module 11100 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
