// Module ID: 15232
// Function ID: 15233
// Name: GetNumberOption
// Dependencies: [15233]
// Exports: GetNumberOption

// Module 15232 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15233 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
