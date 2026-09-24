// Module ID: 14530
// Function ID: 14531
// Name: GetNumberOption
// Dependencies: [14531]
// Exports: GetNumberOption

// Module 14530 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14531 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
