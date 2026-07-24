// Module ID: 16081
// Function ID: 124425
// Name: getInAppReportsFeedbackOptions
// Dependencies: [1212, 2]
// Exports: default

// Module 16081 (getInAppReportsFeedbackOptions)
let obj = { COULD_NOT_FIND: "I couldn't find what I was looking for", CONFUSING_LANGUAGE: "I found the language confusing", OTHER: "Other" };
const result = require("set").fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.cigGCe);
  obj.code = 2;
  obj.value = obj.COULD_NOT_FIND;
  const items = [obj, , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.ZyXA0q);
  obj.code = 3;
  obj.value = obj.CONFUSING_LANGUAGE;
  items[1] = obj;
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.emlT91);
  obj.code = 1;
  obj.value = obj.OTHER;
  items[2] = obj;
  return items;
};
export const InAppReportsFeedbackReasonOption = obj;
