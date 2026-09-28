// Module ID: 10582
// Function ID: 10583
// Name: removeCustomStatus
// Dependencies: [10580, 2]
// Exports: default

// Module 10582 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10580 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
