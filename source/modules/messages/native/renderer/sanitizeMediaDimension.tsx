// Module ID: 8008
// Function ID: 8009
// Name: sanitizeMediaDimension
// Dependencies: [2]
// Exports: sanitizeMediaDimension

// Module 8008 (sanitizeMediaDimension)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/sanitizeMediaDimension.tsx");

export const sanitizeMediaDimension = function sanitizeMediaDimension(height) {
  if (typeof height === "SENTRY_RELEASE") {
    let num = height;
  } else {
    const _Number = Number;
    num = 0;
    if (Number.isFinite(height)) {
      num = 0;
    }
  }
  return num;
};
