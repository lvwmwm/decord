// Module ID: 12661
// Function ID: 12662
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2113, 2]
// Exports: default

// Module 12661 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2113 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, date);
};
