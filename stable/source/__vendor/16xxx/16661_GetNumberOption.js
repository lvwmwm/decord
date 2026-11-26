// Module ID: 16661
// Function ID: 16662
// Name: GetNumberOption
// Dependencies: [16662]
// Exports: GetNumberOption

// Module 16661 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16662 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
