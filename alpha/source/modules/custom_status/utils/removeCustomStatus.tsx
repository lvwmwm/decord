// Module ID: 11367
// Function ID: 11368
// Name: removeCustomStatus
// Dependencies: [11365, 2]
// Exports: default

// Module 11367 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
