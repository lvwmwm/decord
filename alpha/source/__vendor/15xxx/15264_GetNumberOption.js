// Module ID: 15264
// Function ID: 15265
// Name: GetNumberOption
// Dependencies: [15265]
// Exports: GetNumberOption

// Module 15264 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15265 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
