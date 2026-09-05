// Module ID: 12500
// Function ID: 12501
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2025, 2]
// Exports: default

// Module 12500 (getGuildPowerupFormattedDateString)
import closure_0 from "_getSystemLocale" /* 2025 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
