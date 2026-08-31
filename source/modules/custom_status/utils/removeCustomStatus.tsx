// Module ID: 9059
// Function ID: 9060
// Name: removeCustomStatus
// Dependencies: [9057, 2]
// Exports: default

// Module 9059 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9057 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
