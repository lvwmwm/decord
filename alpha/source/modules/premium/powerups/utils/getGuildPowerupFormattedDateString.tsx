// Module ID: 12752
// Function ID: 12753
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2109, 2]
// Exports: default

// Module 12752 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2109 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, date);
};
