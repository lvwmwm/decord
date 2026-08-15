// Module ID: 5062
// Function ID: 5063
// Name: sampleWithUserId
// Dependencies: [1217, 2]
// Exports: sampleWithUserId

// Module 5062 (sampleWithUserId)
let c2 = 2147483647;
const result = require("set").fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export const sampleWithUserId = function sampleWithUserId(id, arg1) {
  const v3Result = importDefault(1217).v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
};
