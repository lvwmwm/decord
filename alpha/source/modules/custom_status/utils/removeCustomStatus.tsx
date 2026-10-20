// Module ID: 10871
// Function ID: 10872
// Name: removeCustomStatus
// Dependencies: [10869, 2]
// Exports: default

// Module 10871 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 10869 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
