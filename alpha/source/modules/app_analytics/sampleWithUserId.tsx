// Module ID: 14666
// Function ID: 14667
// Name: sampleWithUserId
// Dependencies: [1250, 2]
// Exports: sampleWithUserId

// Module 14666 (sampleWithUserId)
import _modDef1250 from "module_1250" /* 1250 */;
import size from "module_2" /* 2 */;

let c2 = 2147483647;
const result = size.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export function sampleWithUserId(id, arg1) {
  const obj = _modDef1250;
  const v3Result = obj.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
}
