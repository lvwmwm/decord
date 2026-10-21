// Module ID: 15354
// Function ID: 15355
// Name: GetNumberOption
// Dependencies: [15355]
// Exports: GetNumberOption

// Module 15354 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15355 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
