// Module ID: 14087
// Function ID: 14088
// Name: __exportStarResult3
// Dependencies: [14088]

// Module 14087 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 14088 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
