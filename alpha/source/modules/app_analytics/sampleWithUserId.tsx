// Module ID: 7643
// Function ID: 7644
// Name: sampleWithUserId
// Dependencies: [1252, 2]
// Exports: sampleWithUserId

// Module 7643 (sampleWithUserId)
import _modDef1252 from "module_1252" /* 1252 */;
import size from "module_2" /* 2 */;

let c2 = 2147483647;
const result = size.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export function sampleWithUserId(id, arg1) {
  const obj = _modDef1252;
  const v3Result = obj.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
}
