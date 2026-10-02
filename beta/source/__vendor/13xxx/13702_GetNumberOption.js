// Module ID: 13702
// Function ID: 13703
// Name: GetNumberOption
// Dependencies: [13703]
// Exports: GetNumberOption

// Module 13702 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 13703 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
