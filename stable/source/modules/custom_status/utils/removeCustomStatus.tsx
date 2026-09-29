// Module ID: 11416
// Function ID: 11417
// Name: removeCustomStatus
// Dependencies: [11414, 2]
// Exports: default

// Module 11416 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11414 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
