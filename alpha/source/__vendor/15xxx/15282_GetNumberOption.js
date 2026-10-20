// Module ID: 15282
// Function ID: 15283
// Name: GetNumberOption
// Dependencies: [15283]
// Exports: GetNumberOption

// Module 15282 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15283 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
