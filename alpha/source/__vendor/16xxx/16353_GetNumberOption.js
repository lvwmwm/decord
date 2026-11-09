// Module ID: 16353
// Function ID: 16354
// Name: GetNumberOption
// Dependencies: [16354]
// Exports: GetNumberOption

// Module 16353 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16354 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
