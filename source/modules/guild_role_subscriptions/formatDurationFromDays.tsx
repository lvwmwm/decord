// Module ID: 16260
// Function ID: 125633
// Name: formatDurationFromDays
// Dependencies: []
// Exports: default

// Module 16260 (formatDurationFromDays)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    if (days % 7 === 0) {
      const intl2 = require(dependencyMap[0]).intl;
      let obj = { weeks: days / 7 };
      let formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[0]).t.EmoBD2, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = require(dependencyMap[0]).intl;
  obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[0]).t.k2UNz+, obj);
};
