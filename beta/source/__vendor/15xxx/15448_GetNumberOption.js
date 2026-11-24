// Module ID: 15448
// Function ID: 15449
// Name: GetNumberOption
// Dependencies: [15449]
// Exports: GetNumberOption

// Module 15448 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15449 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
