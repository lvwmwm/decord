// Module ID: 16036
// Function ID: 16037
// Name: GetNumberOption
// Dependencies: [16037]
// Exports: GetNumberOption

// Module 16036 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16037 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
