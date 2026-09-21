// Module ID: 14492
// Function ID: 14493
// Name: GetNumberOption
// Dependencies: [14493]
// Exports: GetNumberOption

// Module 14492 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14493 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
