// Module ID: 13896
// Function ID: 13897
// Name: GetNumberOption
// Dependencies: [13897]
// Exports: GetNumberOption

// Module 13896 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 13897 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
