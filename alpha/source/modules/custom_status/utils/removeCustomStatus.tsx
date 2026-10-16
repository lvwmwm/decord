// Module ID: 10772
// Function ID: 10773
// Name: removeCustomStatus
// Dependencies: [10770, 2]
// Exports: default

// Module 10772 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10770 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
