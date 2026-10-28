// Module ID: 15719
// Function ID: 15720
// Name: GetNumberOption
// Dependencies: [15720]
// Exports: GetNumberOption

// Module 15719 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15720 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
