// Module ID: 11563
// Function ID: 11564
// Name: removeCustomStatus
// Dependencies: [11561, 2]
// Exports: default

// Module 11563 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11561 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
