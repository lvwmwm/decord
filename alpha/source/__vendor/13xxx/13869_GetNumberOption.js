// Module ID: 13869
// Function ID: 13870
// Name: GetNumberOption
// Dependencies: [13870]
// Exports: GetNumberOption

// Module 13869 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 13870 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
