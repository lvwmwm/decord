// Module ID: 11068
// Function ID: 11069
// Name: removeCustomStatus
// Dependencies: [11066, 2]
// Exports: default

// Module 11068 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
