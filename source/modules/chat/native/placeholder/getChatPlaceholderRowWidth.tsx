// Module ID: 10065
// Function ID: 77701
// Name: getChatPlaceholderRowWidth
// Dependencies: [284214097]
// Exports: default

// Module 10065 (getChatPlaceholderRowWidth)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};
