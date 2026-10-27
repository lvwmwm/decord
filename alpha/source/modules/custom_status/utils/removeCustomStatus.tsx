// Module ID: 11069
// Function ID: 11070
// Name: removeCustomStatus
// Dependencies: [11067, 2]
// Exports: default

// Module 11069 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11067 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
