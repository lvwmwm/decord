// Module ID: 11610
// Function ID: 90192
// Name: getBoostRowMessageText
// Dependencies: []
// Exports: default

// Module 11610 (getBoostRowMessageText)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = require(dependencyMap[0]).intl;
    return intl3.string(importDefault(dependencyMap[1]).plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = require(dependencyMap[0]).intl;
    const obj = {};
    let endsAt = phase.boost.endsAt;
    if (null == endsAt) {
      const _Date = Date;
      endsAt = new Date(phase.sortKey + require(dependencyMap[2]).BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    obj.date = endsAt;
    return intl2.formatToPlainString(importDefault(dependencyMap[1]).vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(importDefault(dependencyMap[1]).hSXjlI);
  }
};
