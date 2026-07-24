// Module ID: 4807
// Function ID: 41879
// Name: requireSortedDescending
// Dependencies: [44, 21, 2]
// Exports: requireSortedDescending

// Module 4807 (requireSortedDescending)
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp2 = messages.length <= 2;
  if (!tmp2) {
    tmp2 = importDefault(21).compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const obj = importDefault(21);
  }
  importDefault(44)(tmp2, "messages must be sorted in descending order.");
};
