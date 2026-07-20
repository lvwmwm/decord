// Module ID: 10393
// Function ID: 80102
// Name: LIKELY_ATO_MORE_TIPS_MODAL_KEY
// Dependencies: []
// Exports: getLikelyAtoMoreTips

// Module 10393 (LIKELY_ATO_MORE_TIPS_MODAL_KEY)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/ato_alerts/Constants.tsx");

export const LIKELY_ATO_MORE_TIPS_MODAL_KEY = "LIKELY_ATO_MORE_TIPS_MODAL";
export const LEARN_MORE_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const getLikelyAtoMoreTips = function getLikelyAtoMoreTips() {
  let obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.title = intl.string(require(dependencyMap[0]).t.wSZfJR);
  const intl2 = require(dependencyMap[0]).intl;
  obj.description = intl2.string(require(dependencyMap[0]).t.CRwzW5);
  const items = [obj, , ];
  obj = {};
  const intl3 = require(dependencyMap[0]).intl;
  obj.title = intl3.string(require(dependencyMap[0]).t.cmMUaB);
  const intl4 = require(dependencyMap[0]).intl;
  obj.description = intl4.string(require(dependencyMap[0]).t.n6G1ue);
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[0]).intl;
  obj.title = intl5.string(require(dependencyMap[0]).t.5SPKSy);
  const intl6 = require(dependencyMap[0]).intl;
  obj.description = intl6.string(require(dependencyMap[0]).t.eyjeJQ);
  items[2] = obj;
  return items;
};
