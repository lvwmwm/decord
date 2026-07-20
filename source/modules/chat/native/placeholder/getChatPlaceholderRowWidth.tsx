// Module ID: 10059
// Function ID: 77683
// Name: getChatPlaceholderRowWidth
// Dependencies: []
// Exports: default

// Module 10059 (getChatPlaceholderRowWidth)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};
