// Module ID: 15327
// Function ID: 15328
// Name: GetNumberOption
// Dependencies: [15328]
// Exports: GetNumberOption

// Module 15327 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15328 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
