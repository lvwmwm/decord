// Module ID: 11532
// Function ID: 89834
// Name: getGuildPowerupFormattedDateString
// Dependencies: [1921, 2]
// Exports: default

// Module 11532 (getGuildPowerupFormattedDateString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
