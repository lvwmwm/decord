// Module ID: 10595
// Function ID: 10596
// Name: removeCustomStatus
// Dependencies: [10593, 2]
// Exports: default

// Module 10595 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10593 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
