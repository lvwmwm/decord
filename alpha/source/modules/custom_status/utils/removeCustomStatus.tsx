// Module ID: 10832
// Function ID: 10833
// Name: removeCustomStatus
// Dependencies: [10830, 2]
// Exports: default

// Module 10832 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
