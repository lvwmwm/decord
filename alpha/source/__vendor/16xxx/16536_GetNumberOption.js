// Module ID: 16536
// Function ID: 16537
// Name: GetNumberOption
// Dependencies: [16537]
// Exports: GetNumberOption

// Module 16536 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16537 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
