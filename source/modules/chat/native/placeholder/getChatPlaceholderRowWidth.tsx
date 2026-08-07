// Module ID: 11642
// Function ID: 11643
// Name: getChatPlaceholderRowWidth
// Dependencies: [2]
// Exports: default

// Module 11642 (getChatPlaceholderRowWidth)
let result = require("set").fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};
