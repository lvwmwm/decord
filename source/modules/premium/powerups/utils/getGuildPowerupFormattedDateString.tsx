// Module ID: 11998
// Function ID: 11999
// Name: getGuildPowerupFormattedDateString
// Dependencies: [1997, 2]
// Exports: default

// Module 11998 (getGuildPowerupFormattedDateString)
import closure_0 from "_getSystemLocale" /* 1997 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
