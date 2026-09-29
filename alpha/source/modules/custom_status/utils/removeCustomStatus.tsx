// Module ID: 10751
// Function ID: 10752
// Name: removeCustomStatus
// Dependencies: [10749, 2]
// Exports: default

// Module 10751 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
