// Module ID: 11065
// Function ID: 11066
// Name: removeCustomStatus
// Dependencies: [11063, 2]
// Exports: default

// Module 11065 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11063 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
