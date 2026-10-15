// Module ID: 15118
// Function ID: 15119
// Name: GetNumberOption
// Dependencies: [15119]
// Exports: GetNumberOption

// Module 15118 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15119 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
