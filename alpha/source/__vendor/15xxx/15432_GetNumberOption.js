// Module ID: 15432
// Function ID: 15433
// Name: GetNumberOption
// Dependencies: [15433]
// Exports: GetNumberOption

// Module 15432 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15433 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
