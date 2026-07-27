// Module ID: 11615
// Function ID: 90207
// Name: getBoostRowMessageText
// Dependencies: [1212, 2231, 11610, 2]
// Exports: default

// Module 11615 (getBoostRowMessageText)
const result = require("BOOST_EXPIRING_DISPLAY_WINDOW_DAYS").fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(importDefault(2231).plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    let endsAt = phase.boost.endsAt;
    if (null == endsAt) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + require(11610) /* BOOST_EXPIRING_DISPLAY_WINDOW_DAYS */.BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    obj.date = endsAt;
    return intl2.formatToPlainString(importDefault(2231).vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2231).hSXjlI);
  }
};
