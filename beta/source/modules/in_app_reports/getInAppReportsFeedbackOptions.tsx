// Module ID: 16330
// Function ID: 16331
// Name: getInAppReportsFeedbackOptions
// Dependencies: [1115, 2]
// Exports: default

// Module 16330 (getInAppReportsFeedbackOptions)
import intl4 from "intl" /* 1115 */;
import size from "module_2" /* 2 */;

const InAppReportsFeedbackReasonOption = { COULD_NOT_FIND: "I couldn't find what I was looking for", CONFUSING_LANGUAGE: "I found the language confusing", OTHER: "Other" };
const result = size.fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  let intl;
  let intl2;
  let intl3;
  let obj;
  obj = { label: intl.string(intl4.t.cigGCe), code: 2, value: obj.COULD_NOT_FIND };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t.ZyXA0q), code: 3, value: obj.CONFUSING_LANGUAGE };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.emlT91), code: 1, value: obj.OTHER };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
};
export { InAppReportsFeedbackReasonOption };
