// Module ID: 10439
// Function ID: 80391
// Name: LIKELY_ATO_MORE_TIPS_MODAL_KEY
// Dependencies: [1212, 2]
// Exports: getLikelyAtoMoreTips

// Module 10439 (LIKELY_ATO_MORE_TIPS_MODAL_KEY)
const result = require("set").fileFinishedImporting("modules/ato_alerts/Constants.tsx");

export const LIKELY_ATO_MORE_TIPS_MODAL_KEY = "LIKELY_ATO_MORE_TIPS_MODAL";
export const LEARN_MORE_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const getLikelyAtoMoreTips = function getLikelyAtoMoreTips() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.wSZfJR);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.CRwzW5);
  const items = [obj, , ];
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl3.string(require(1212) /* getSystemLocale */.t.cmMUaB);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl4.string(require(1212) /* getSystemLocale */.t.n6G1ue);
  items[1] = obj;
  obj = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl5.string(require(1212) /* getSystemLocale */.t["5SPKSy"]);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl6.string(require(1212) /* getSystemLocale */.t.eyjeJQ);
  items[2] = obj;
  return items;
};
