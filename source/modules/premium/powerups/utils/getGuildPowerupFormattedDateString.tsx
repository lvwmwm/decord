// Module ID: 12300
// Function ID: 12301
// Name: getGuildPowerupFormattedDateString
// Dependencies: [1995, 2]
// Exports: default

// Module 12300 (getGuildPowerupFormattedDateString)
import closure_0 from "_getSystemLocale" /* 1995 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
