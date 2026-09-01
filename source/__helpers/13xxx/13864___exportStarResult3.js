// Module ID: 13864
// Function ID: 13865
// Name: __exportStarResult3
// Dependencies: [13865]

// Module 13864 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 13865 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
