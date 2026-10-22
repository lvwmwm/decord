// Module ID: 11032
// Function ID: 11033
// Name: removeCustomStatus
// Dependencies: [11030, 2]
// Exports: default

// Module 11032 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
