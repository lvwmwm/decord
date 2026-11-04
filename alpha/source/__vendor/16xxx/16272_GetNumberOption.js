// Module ID: 16272
// Function ID: 16273
// Name: GetNumberOption
// Dependencies: [16273]
// Exports: GetNumberOption

// Module 16272 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16273 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
