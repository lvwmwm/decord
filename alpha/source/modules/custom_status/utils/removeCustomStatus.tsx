// Module ID: 10785
// Function ID: 10786
// Name: removeCustomStatus
// Dependencies: [10783, 2]
// Exports: default

// Module 10785 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10783 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
