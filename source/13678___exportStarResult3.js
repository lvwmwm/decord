// Module ID: 13678
// Function ID: 13679
// Name: __exportStarResult3
// Dependencies: [13679]

// Module 13678 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 13679 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
