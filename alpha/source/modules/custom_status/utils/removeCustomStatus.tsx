// Module ID: 11041
// Function ID: 11042
// Name: removeCustomStatus
// Dependencies: [11039, 2]
// Exports: default

// Module 11041 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
