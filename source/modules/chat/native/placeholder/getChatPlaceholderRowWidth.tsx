// Module ID: 10065
// Function ID: 77712
// Name: getChatPlaceholderRowWidth
// Dependencies: []
// Exports: default

// Module 10065 (getChatPlaceholderRowWidth)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/chat/native/placeholder/getChatPlaceholderRowWidth.tsx");

export default function getChatPlaceholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 60;
};
