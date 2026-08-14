// Module ID: 12024
// Function ID: 12025
// Name: getBoostRowMessageText
// Dependencies: [1236, 2335, 12019, 2]
// Exports: default

// Module 12024 (getBoostRowMessageText)
const result = require("BOOST_EXPIRING_DISPLAY_WINDOW_DAYS").fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(importDefault(2335).plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    let endsAt = phase.boost.endsAt;
    if (endsAt == null) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + require(12019) /* BOOST_EXPIRING_DISPLAY_WINDOW_DAYS */.BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    const obj = { date: null };
    obj[0] = endsAt;
    return intl2.formatToPlainString(importDefault(2335).vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2335).hSXjlI);
  }
};
