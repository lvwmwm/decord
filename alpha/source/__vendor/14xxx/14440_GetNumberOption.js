// Module ID: 14440
// Function ID: 14441
// Name: GetNumberOption
// Dependencies: [14441]
// Exports: GetNumberOption

// Module 14440 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14441 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
