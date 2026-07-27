// Module ID: 3387
// Function ID: 26561
// Name: compareDesc
// Dependencies: [3210, 3211]
// Exports: default

// Module 3387 (compareDesc)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function compareDesc(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = defaultResult1.getTime();
  const diff = time - _typeof.default(defaultResult1).getTime();
  let num = -1;
  if (diff <= 0) {
    let num2 = 1;
    if (diff >= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
};
export default exports.default;
