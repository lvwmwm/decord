// Module ID: 9521
// Function ID: 74147
// Name: result
// Dependencies: [664, 1212, 2]
// Exports: getSummaryFeedbackReasons

// Module 9521 (result)
const require = arg1;
let obj = { DUPLICATED: "DUPLICATED", TOO_GENERIC: "TOO_GENERIC", TOO_MANY: "TOO_MANY", INACCURATE: "INACCURATE", NOT_USEFUL: "NOT_USEFUL", OTHER: "OTHER" };
const result = 5 * require("set").Millis.SECOND;
const result1 = require("set").fileFinishedImporting("modules/summaries/SummaryConstants.tsx");

export const SUMMARY_POLL_INTERVAL = result;
export const SummariesSidebarToggledSource = { TOOLBAR_BUTTON: "toolbar button", PILL: "pill" };
export const SummariesTopicClickedSource = { SIDEBAR: "sidebar", PILL_DROPDOWN: "pill dropdown", PILL_NEXT_ARROW: "pill next arrow", PILL_PREVIOUS_ARROW: "pill previous arrow" };
export const SummaryFeedbackReasons = obj;
export const getSummaryFeedbackReasons = function getSummaryFeedbackReasons() {
  obj = { value: obj.DUPLICATED };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.wwXl5h);
  const items = [obj, , , , , ];
  obj = { value: obj.TOO_GENERIC };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["t+6knu"]);
  items[1] = obj;
  obj = { value: obj.TOO_MANY };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.xnKDnv);
  items[2] = obj;
  const obj1 = { value: obj.INACCURATE };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl4.string(require(1212) /* getSystemLocale */.t.JW5VFj);
  items[3] = obj1;
  const obj2 = { value: obj.NOT_USEFUL };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl5.string(require(1212) /* getSystemLocale */.t.ZtCNiY);
  items[4] = obj2;
  const obj3 = { value: obj.OTHER };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl6.string(require(1212) /* getSystemLocale */.t.BufsKk);
  items[5] = obj3;
  return items;
};
