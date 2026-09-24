// Module ID: 14584
// Function ID: 14585
// Name: GetNumberOption
// Dependencies: [14585]
// Exports: GetNumberOption

// Module 14584 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14585 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
