// Module ID: 7186
// Function ID: 7187
// Name: sampleWithUserId
// Dependencies: [1264, 2]
// Exports: sampleWithUserId

// Module 7186 (sampleWithUserId)
import _modDef1264 from "module_1264" /* 1264 */;
import size from "module_2" /* 2 */;

let c2 = 2147483647;
const result = size.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export const sampleWithUserId = function sampleWithUserId(id, arg1) {
  const obj = _modDef1264;
  const v3Result = obj.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
};
