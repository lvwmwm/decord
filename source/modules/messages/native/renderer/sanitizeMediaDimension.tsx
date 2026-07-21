// Module ID: 7781
// Function ID: 62095
// Name: sanitizeMediaDimension
// Dependencies: [284214097]
// Exports: sanitizeMediaDimension

// Module 7781 (sanitizeMediaDimension)
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
