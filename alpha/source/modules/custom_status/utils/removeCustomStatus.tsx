// Module ID: 11015
// Function ID: 11016
// Name: removeCustomStatus
// Dependencies: [11013, 2]
// Exports: default

// Module 11015 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11013 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
