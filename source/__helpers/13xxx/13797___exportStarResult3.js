// Module ID: 13797
// Function ID: 13798
// Name: __exportStarResult3
// Dependencies: [13798]

// Module 13797 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 13798 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
