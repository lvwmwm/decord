// Module ID: 9675
// Function ID: 9676
// Name: removeCustomStatus
// Dependencies: [9673, 2]
// Exports: default

// Module 9675 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9673 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
