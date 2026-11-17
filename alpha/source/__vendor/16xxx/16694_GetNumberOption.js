// Module ID: 16694
// Function ID: 16695
// Name: GetNumberOption
// Dependencies: [16695]
// Exports: GetNumberOption

// Module 16694 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16695 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
