// Module ID: 15411
// Function ID: 15412
// Name: GetNumberOption
// Dependencies: [15412]
// Exports: GetNumberOption

// Module 15411 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15412 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
