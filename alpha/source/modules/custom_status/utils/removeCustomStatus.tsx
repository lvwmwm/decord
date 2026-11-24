// Module ID: 9395
// Function ID: 9396
// Name: removeCustomStatus
// Dependencies: [9393, 2]
// Exports: default

// Module 9395 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 9393 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
