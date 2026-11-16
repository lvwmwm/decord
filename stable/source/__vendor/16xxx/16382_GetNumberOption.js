// Module ID: 16382
// Function ID: 16383
// Name: GetNumberOption
// Dependencies: [16383]
// Exports: GetNumberOption

// Module 16382 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16383 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
