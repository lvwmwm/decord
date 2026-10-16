// Module ID: 8470
// Function ID: 8471
// Name: sanitizeMediaDimension
// Dependencies: [2]
// Exports: sanitizeMediaDimension

// Module 8470 (sanitizeMediaDimension)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/sanitizeMediaDimension.tsx");

export const sanitizeMediaDimension = function sanitizeMediaDimension(height) {
  let num;
  if (typeof height !== "number") {
    num = height;
  } else {
    const _Number = Number;
    num = 0;
    if (Number.isFinite(height)) {
      num = 0;
    }
  }
  return num;
};
