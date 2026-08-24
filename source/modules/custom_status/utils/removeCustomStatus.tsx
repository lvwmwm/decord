// Module ID: 9334
// Function ID: 9335
// Name: removeCustomStatus
// Dependencies: [9332, 2]
// Exports: default

// Module 9334 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9332 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
