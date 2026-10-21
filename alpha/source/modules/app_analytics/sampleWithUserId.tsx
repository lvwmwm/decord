// Module ID: 7557
// Function ID: 7558
// Name: sampleWithUserId
// Dependencies: [1266, 2]
// Exports: sampleWithUserId

// Module 7557 (sampleWithUserId)
import _modDef1266 from "module_1266" /* 1266 */;
import size from "module_2" /* 2 */;

let c2 = 2147483647;
const result = size.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export const sampleWithUserId = function sampleWithUserId(id, arg1) {
  const obj = _modDef1266;
  const v3Result = obj.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
};
