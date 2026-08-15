// Module ID: 11669
// Function ID: 11670
// Name: getGuildPowerupFormattedDateString
// Dependencies: [1994, 2]
// Exports: default

// Module 11669 (getGuildPowerupFormattedDateString)
import _getSystemLocale from "_getSystemLocale";

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
