// Module ID: 7782
// Function ID: 62108
// Name: sanitizeMediaDimension
// Dependencies: []
// Exports: sanitizeMediaDimension

// Module 7782 (sanitizeMediaDimension)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/sanitizeMediaDimension.tsx");

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
