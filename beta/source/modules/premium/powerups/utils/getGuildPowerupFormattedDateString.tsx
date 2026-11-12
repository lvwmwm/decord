// Module ID: 14345
// Function ID: 14346
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2186, 2]
// Exports: default

// Module 14345 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2186 */;
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
