// Module ID: 8968
// Function ID: 8969
// Name: removeCustomStatus
// Dependencies: [8966, 2]
// Exports: default

// Module 8968 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 8966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
