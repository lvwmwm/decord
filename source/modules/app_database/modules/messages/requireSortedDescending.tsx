// Module ID: 4804
// Function ID: 41857
// Name: requireSortedDescending
// Dependencies: []
// Exports: requireSortedDescending

// Module 4804 (requireSortedDescending)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp2 = messages.length <= 2;
  if (!tmp2) {
    tmp2 = importDefault(dependencyMap[1]).compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const obj = importDefault(dependencyMap[1]);
  }
  importDefault(dependencyMap[0])(tmp2, "messages must be sorted in descending order.");
};
