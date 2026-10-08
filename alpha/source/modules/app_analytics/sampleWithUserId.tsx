// Module ID: 7181
// Function ID: 7182
// Name: sampleWithUserId
// Dependencies: [1263, 2]
// Exports: sampleWithUserId

// Module 7181 (sampleWithUserId)
import _modDef1263 from "module_1263" /* 1263 */;
import size from "module_2" /* 2 */;

let c2 = 2147483647;
const result = size.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export const sampleWithUserId = function sampleWithUserId(id, arg1) {
  const obj = _modDef1263;
  const v3Result = obj.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
};
