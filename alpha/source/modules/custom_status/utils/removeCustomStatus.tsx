// Module ID: 10848
// Function ID: 10849
// Name: removeCustomStatus
// Dependencies: [10846, 2]
// Exports: default

// Module 10848 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
