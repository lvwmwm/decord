// Module ID: 11605
// Function ID: 11606
// Name: getGuildPowerupFormattedDateString
// Dependencies: [1946, 2]
// Exports: default

// Module 11605 (getGuildPowerupFormattedDateString)
import _getSystemLocale from "_getSystemLocale";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
