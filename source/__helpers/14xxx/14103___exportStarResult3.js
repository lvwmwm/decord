// Module ID: 14103
// Function ID: 14104
// Name: __exportStarResult3
// Dependencies: [14104]

// Module 14103 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 14104 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
