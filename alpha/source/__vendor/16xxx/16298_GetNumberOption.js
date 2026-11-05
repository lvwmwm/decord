// Module ID: 16298
// Function ID: 16299
// Name: GetNumberOption
// Dependencies: [16299]
// Exports: GetNumberOption

// Module 16298 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16299 */;


export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
