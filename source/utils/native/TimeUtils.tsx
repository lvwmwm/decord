// Module ID: 4704
// Function ID: 40940
// Name: getTimeFormat
// Dependencies: [2]
// Exports: getTimeFormat

// Module 4704 (getTimeFormat)
let result = require("set").fileFinishedImporting("utils/native/TimeUtils.tsx");

export const getTimeFormat = function getTimeFormat(playableDuration, padMinutes) {
  const result = tmp % 60;
  const result1 = (tmp - result) / 60;
  padMinutes = undefined;
  if (null != padMinutes) {
    padMinutes = padMinutes.padMinutes;
  }
  if (null != padMinutes) {
    if (padMinutes) {
      const _String = String;
      const _String2 = String;
      const StringResult = String(result1);
      const padStartResult = String(result1).padStart(2, "0");
      const _HermesInternal = HermesInternal;
      let combined = "" + padStartResult + ":" + String(result).padStart(2, "0");
      const StringResult1 = String(result);
    }
    return combined;
  }
  const StringResult2 = String(result1);
  combined = "" + StringResult2 + ":" + String(result).padStart(2, "0");
};
