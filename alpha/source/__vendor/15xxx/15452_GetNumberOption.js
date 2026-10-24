// Module ID: 15452
// Function ID: 15453
// Name: GetNumberOption
// Dependencies: [15453]
// Exports: GetNumberOption

// Module 15452 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15453 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
