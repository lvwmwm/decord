// Module ID: 9097
// Function ID: 9098
// Name: removeCustomStatus
// Dependencies: [9095, 2]
// Exports: default

// Module 9097 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9095 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
