// Module ID: 14575
// Function ID: 14576
// Name: GetNumberOption
// Dependencies: [14576]
// Exports: GetNumberOption

// Module 14575 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14576 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
