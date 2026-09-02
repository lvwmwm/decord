// Module ID: 9111
// Function ID: 9112
// Name: removeCustomStatus
// Dependencies: [9109, 2]
// Exports: default

// Module 9111 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9109 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
