// Module ID: 8925
// Function ID: 70253
// Name: compareArrays
// Dependencies: [5, 8924, 8926, 2]
// Exports: generatePairwiseFingerprint

// Module 8925 (compareArrays)
import asyncGeneratorStep from "asyncGeneratorStep";
import module_36 from "module_36";

const require = arg1;
function compareArrays(arg0, arg1) {
  if (0 < arg0.length) {
    let num = 0;
    if (0 < arg1.length) {
      while (arg0[num] == arg1[num]) {
        num = num + 1;
      }
      return arg0[num] - arg1[num];
    }
  }
  return arg0.length - arg1.length;
}
function _generatePairwiseFingerprint() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_4 = { N: 16384, r: 8, p: 2, dkLen: 64 };
const result = require("XorAndSalsa").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts");

export const generatePairwiseFingerprint = function generatePairwiseFingerprint(arg0, uint8Array, arg2, uint8Array1, arg4) {
  return _generatePairwiseFingerprint(...arguments);
};
