// Module ID: 14135
// Function ID: 14136
// Name: __exportStarResult3
// Dependencies: [14136]

// Module 14135 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 14136 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
