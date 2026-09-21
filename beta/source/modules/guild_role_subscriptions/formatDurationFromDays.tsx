// Module ID: 18149
// Function ID: 18150
// Name: formatDurationFromDays
// Dependencies: [1115, 2]
// Exports: default

// Module 18149 (formatDurationFromDays)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    if (days % 7 === 0) {
      const intl2 = util.intl;
      const obj2 = { weeks: days / 7 };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.EmoBD2, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.formatToPlainString(util.t["k2UNz+"], { days });
};
