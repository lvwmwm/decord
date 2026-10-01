// Module ID: 13904
// Function ID: 13905
// Name: GetNumberOption
// Dependencies: [13905]
// Exports: GetNumberOption

// Module 13904 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 13905 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
