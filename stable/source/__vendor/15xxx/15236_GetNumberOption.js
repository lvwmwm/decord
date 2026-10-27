// Module ID: 15236
// Function ID: 15237
// Name: GetNumberOption
// Dependencies: [15237]
// Exports: GetNumberOption

// Module 15236 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15237 */;


export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
