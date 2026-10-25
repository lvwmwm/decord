// Module ID: 11066
// Function ID: 11067
// Name: removeCustomStatus
// Dependencies: [11064, 2]
// Exports: default

// Module 11066 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
