// Module ID: 14489
// Function ID: 14490
// Name: GetNumberOption
// Dependencies: [14490]
// Exports: GetNumberOption

// Module 14489 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14490 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
