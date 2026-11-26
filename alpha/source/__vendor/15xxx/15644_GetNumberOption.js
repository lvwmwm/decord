// Module ID: 15644
// Function ID: 15645
// Name: GetNumberOption
// Dependencies: [15645]
// Exports: GetNumberOption

// Module 15644 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15645 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
