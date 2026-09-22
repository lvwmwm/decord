// Module ID: 11258
// Function ID: 11259
// Name: removeCustomStatus
// Dependencies: [11256, 2]
// Exports: default

// Module 11258 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11256 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
