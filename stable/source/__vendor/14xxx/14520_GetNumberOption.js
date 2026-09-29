// Module ID: 14520
// Function ID: 14521
// Name: GetNumberOption
// Dependencies: [14521]
// Exports: GetNumberOption

// Module 14520 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14521 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
