// Module ID: 14298
// Function ID: 14299
// Name: GetNumberOption
// Dependencies: [14299]
// Exports: GetNumberOption

// Module 14298 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14299 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
