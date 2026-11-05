// Module ID: 14116
// Function ID: 14117
// Name: getChatPlaceholderRowWidth
// Dependencies: [2]
// Exports: default

// Module 14116 (getChatPlaceholderRowWidth)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};
