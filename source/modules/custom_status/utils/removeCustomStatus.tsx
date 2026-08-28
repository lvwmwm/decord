// Module ID: 9036
// Function ID: 9037
// Name: removeCustomStatus
// Dependencies: [9034, 2]
// Exports: default

// Module 9036 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9034 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
