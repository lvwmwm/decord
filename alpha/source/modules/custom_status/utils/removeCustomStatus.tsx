// Module ID: 11403
// Function ID: 11404
// Name: removeCustomStatus
// Dependencies: [11401, 2]
// Exports: default

// Module 11403 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11401 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
