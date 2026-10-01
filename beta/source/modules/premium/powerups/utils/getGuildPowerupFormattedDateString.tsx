// Module ID: 11994
// Function ID: 11995
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2112, 2]
// Exports: default

// Module 11994 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  const date1 = new Date(arg0);
  return date1.toLocaleDateString(LocaleStore.locale, date);
};
