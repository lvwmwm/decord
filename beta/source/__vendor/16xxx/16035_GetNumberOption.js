// Module ID: 16035
// Function ID: 16036
// Name: GetNumberOption
// Dependencies: [16036]
// Exports: GetNumberOption

// Module 16035 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16036 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
