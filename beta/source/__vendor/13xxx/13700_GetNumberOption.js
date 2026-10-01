// Module ID: 13700
// Function ID: 13701
// Name: GetNumberOption
// Dependencies: [13701]
// Exports: GetNumberOption

// Module 13700 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 13701 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
