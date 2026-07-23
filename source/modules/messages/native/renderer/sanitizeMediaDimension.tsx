// Module ID: 7788
// Function ID: 62155
// Name: sanitizeMediaDimension
// Dependencies: [2]
// Exports: sanitizeMediaDimension

// Module 7788 (sanitizeMediaDimension)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/sanitizeMediaDimension.tsx");

export const sanitizeMediaDimension = function sanitizeMediaDimension(height) {
  if ("number" !== typeof height) {
    let num2 = height;
  } else {
    const _Number = Number;
    num2 = 0;
    if (Number.isFinite(height)) {
      num2 = 0;
    }
  }
  return num2;
};
