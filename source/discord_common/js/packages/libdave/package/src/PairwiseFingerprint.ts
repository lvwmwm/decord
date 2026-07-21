// Module ID: 8878
// Function ID: 69973
// Name: compareArrays
// Dependencies: []
// Exports: generatePairwiseFingerprint

// Module 8878 (compareArrays)
import module_36 from "module_36";

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
  const _generatePairwiseFingerprint = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_4 = { accessibilityRole: true, withTiming: "/assets/design/components/Icon/native/redesign/generated/images", "Null": 24, "Null": 24 };
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts");

export const generatePairwiseFingerprint = function generatePairwiseFingerprint(arg0, uint8Array, arg2, uint8Array1, arg4) {
  return _generatePairwiseFingerprint(...arguments);
};
