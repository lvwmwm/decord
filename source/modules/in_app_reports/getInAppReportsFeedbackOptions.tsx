// Module ID: 15917
// Function ID: 121930
// Name: getInAppReportsFeedbackOptions
// Dependencies: []
// Exports: default

// Module 15917 (getInAppReportsFeedbackOptions)
const obj = { COULD_NOT_FIND: "I couldn't find what I was looking for", CONFUSING_LANGUAGE: "I found the language confusing", OTHER: "Other" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  let obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.label = intl.string(require(dependencyMap[0]).t.cigGCe);
  obj.code = 2;
  obj.value = obj.COULD_NOT_FIND;
  const items = [obj, , ];
  obj = {};
  const intl2 = require(dependencyMap[0]).intl;
  obj.label = intl2.string(require(dependencyMap[0]).t.ZyXA0q);
  obj.code = 3;
  obj.value = obj.CONFUSING_LANGUAGE;
  items[1] = obj;
  obj = {};
  const intl3 = require(dependencyMap[0]).intl;
  obj.label = intl3.string(require(dependencyMap[0]).t.emlT91);
  obj.code = 1;
  obj.value = obj.OTHER;
  items[2] = obj;
  return items;
};
export const InAppReportsFeedbackReasonOption = obj;
