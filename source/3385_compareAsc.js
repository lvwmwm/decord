// Module ID: 3385
// Function ID: 26545
// Name: compareAsc
// Dependencies: [3209, 3210]
// Exports: default

// Module 3385 (compareAsc)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function compareAsc(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = defaultResult1.getTime();
  const diff = time - _typeof.default(defaultResult1).getTime();
  let num = -1;
  if (diff >= 0) {
    let num2 = 1;
    if (diff <= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
};
export default exports.default;
