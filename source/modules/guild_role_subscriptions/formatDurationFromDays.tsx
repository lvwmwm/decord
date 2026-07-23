// Module ID: 16385
// Function ID: 127849
// Name: formatDurationFromDays
// Dependencies: [1212, 2]
// Exports: default

// Module 16385 (formatDurationFromDays)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    if (days % 7 === 0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let obj = { weeks: days / 7 };
      let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.EmoBD2, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["k2UNz+"], obj);
};
