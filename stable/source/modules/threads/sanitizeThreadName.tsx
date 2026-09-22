// Module ID: 7377
// Function ID: 7378
// Name: sanitizeThreadName
// Dependencies: [2]
// Exports: default

// Module 7377 (sanitizeThreadName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/sanitizeThreadName.tsx");

export default function sanitizeThreadName(str, arg1) {
  let trimmed = str;
  if (arg1) {
    trimmed = str.trim();
  }
  return trimmed;
};
