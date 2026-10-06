// Module ID: 17520
// Function ID: 17521
// Name: formatDurationFromDays
// Dependencies: [1127, 2]
// Exports: default

// Module 17520 (formatDurationFromDays)
import intl3 from "intl" /* 1127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    let formatToPlainStringResult;
    if (days % 7 === 0) {
      const intl2 = intl3.intl;
      const obj2 = { weeks: days / 7 };
      formatToPlainStringResult = intl2.formatToPlainString(intl3.t.EmoBD2, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  const obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(intl3.t["k2UNz+"], obj);
};
