// Module ID: 14209
// Function ID: 14210
// Name: __exportStarResult3
// Dependencies: [14210]

// Module 14209 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 14210 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
