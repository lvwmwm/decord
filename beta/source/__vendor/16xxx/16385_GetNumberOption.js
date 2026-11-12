// Module ID: 16385
// Function ID: 16386
// Name: GetNumberOption
// Dependencies: [16386]
// Exports: GetNumberOption

// Module 16385 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16386 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
