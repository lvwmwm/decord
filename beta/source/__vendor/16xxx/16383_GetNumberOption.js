// Module ID: 16383
// Function ID: 16384
// Name: GetNumberOption
// Dependencies: [16384]
// Exports: GetNumberOption

// Module 16383 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16384 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
