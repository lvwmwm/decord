// Module ID: 13221
// Function ID: 13222
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2069, 2]
// Exports: default

// Module 13221 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  const obj = { timeZone: "UTC" };
  const toLocaleDateString = new Date(arg0).toLocaleDateString;
  const locale = LocaleStore.locale;
  new Date(arg0);
  const merged = Object.assign(date);
  return toLocaleDateString(locale, obj);
};
