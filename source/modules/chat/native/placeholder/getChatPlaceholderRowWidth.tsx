// Module ID: 12127
// Function ID: 12128
// Name: getChatPlaceholderRowWidth
// Dependencies: [2]
// Exports: default

// Module 12127 (getChatPlaceholderRowWidth)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};
