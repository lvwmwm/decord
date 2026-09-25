// Module ID: 11976
// Function ID: 11977
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2111, 2]
// Exports: default

// Module 11976 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2111 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, date);
};
