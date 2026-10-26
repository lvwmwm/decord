// Module ID: 15456
// Function ID: 15457
// Name: GetNumberOption
// Dependencies: [15457]
// Exports: GetNumberOption

// Module 15456 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15457 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
