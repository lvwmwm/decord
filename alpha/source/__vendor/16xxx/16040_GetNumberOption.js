// Module ID: 16040
// Function ID: 16041
// Name: GetNumberOption
// Dependencies: [16041]
// Exports: GetNumberOption

// Module 16040 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16041 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
