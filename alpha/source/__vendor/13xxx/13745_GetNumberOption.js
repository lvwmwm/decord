// Module ID: 13745
// Function ID: 13746
// Name: GetNumberOption
// Dependencies: [13746]
// Exports: GetNumberOption

// Module 13745 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 13746 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
