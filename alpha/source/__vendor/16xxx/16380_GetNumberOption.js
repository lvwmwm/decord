// Module ID: 16380
// Function ID: 16381
// Name: GetNumberOption
// Dependencies: [16381]
// Exports: GetNumberOption

// Module 16380 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16381 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
