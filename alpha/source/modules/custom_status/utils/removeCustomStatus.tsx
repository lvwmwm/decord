// Module ID: 11064
// Function ID: 11065
// Name: removeCustomStatus
// Dependencies: [11062, 2]
// Exports: default

// Module 11064 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11062 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
