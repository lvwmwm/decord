// Module ID: 15450
// Function ID: 15451
// Name: GetNumberOption
// Dependencies: [15451]
// Exports: GetNumberOption

// Module 15450 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15451 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
