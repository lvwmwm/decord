// Module ID: 13831
// Function ID: 13832
// Name: __exportStarResult3
// Dependencies: [13832]

// Module 13831 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 13832 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
