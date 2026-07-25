// Module ID: 11528
// Function ID: 89796
// Name: getGuildPowerupFormattedDateString
// Dependencies: [1922, 2]
// Exports: default

// Module 11528 (getGuildPowerupFormattedDateString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
