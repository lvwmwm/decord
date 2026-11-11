// Module ID: 16541
// Function ID: 16542
// Name: GetNumberOption
// Dependencies: [16542]
// Exports: GetNumberOption

// Module 16541 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16542 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
