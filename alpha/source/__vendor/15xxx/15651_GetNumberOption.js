// Module ID: 15651
// Function ID: 15652
// Name: GetNumberOption
// Dependencies: [15652]
// Exports: GetNumberOption

// Module 15651 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15652 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
