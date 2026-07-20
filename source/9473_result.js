// Module ID: 9473
// Function ID: 73859
// Name: result
// Dependencies: [4294967295, 0, 0]
// Exports: getSummaryFeedbackReasons

// Module 9473 (result)
import result from "result";

const obj = { DUPLICATED: "DUPLICATED", TOO_GENERIC: "TOO_GENERIC", TOO_MANY: "TOO_MANY", INACCURATE: "INACCURATE", NOT_USEFUL: "NOT_USEFUL", OTHER: "OTHER" };
let result = 5 * importDefault(dependencyMap[0]).Millis.SECOND;
const result1 = result.fileFinishedImporting("modules/summaries/SummaryConstants.tsx");

export const SUMMARY_POLL_INTERVAL = result;
export const SummariesSidebarToggledSource = { TOOLBAR_BUTTON: "toolbar button", PILL: "pill" };
export const SummariesTopicClickedSource = { SIDEBAR: "sidebar", PILL_DROPDOWN: "pill dropdown", PILL_NEXT_ARROW: "pill next arrow", PILL_PREVIOUS_ARROW: "pill previous arrow" };
export const SummaryFeedbackReasons = obj;
export const getSummaryFeedbackReasons = function getSummaryFeedbackReasons() {
  let obj = { value: obj.DUPLICATED };
  const intl = arg1(dependencyMap[1]).intl;
  obj.label = intl.string(arg1(dependencyMap[1]).t.wwXl5h);
  const items = [obj, , , , , ];
  obj = { value: obj.TOO_GENERIC };
  const intl2 = arg1(dependencyMap[1]).intl;
  obj.label = intl2.string(arg1(dependencyMap[1]).t.t+6knu);
  items[1] = obj;
  obj = { value: obj.TOO_MANY };
  const intl3 = arg1(dependencyMap[1]).intl;
  obj.label = intl3.string(arg1(dependencyMap[1]).t.xnKDnv);
  items[2] = obj;
  const obj1 = { value: obj.INACCURATE };
  const intl4 = arg1(dependencyMap[1]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[1]).t.JW5VFj);
  items[3] = obj1;
  const obj2 = { value: obj.NOT_USEFUL };
  const intl5 = arg1(dependencyMap[1]).intl;
  obj2.label = intl5.string(arg1(dependencyMap[1]).t.ZtCNiY);
  items[4] = obj2;
  const obj3 = { value: obj.OTHER };
  const intl6 = arg1(dependencyMap[1]).intl;
  obj3.label = intl6.string(arg1(dependencyMap[1]).t.BufsKk);
  items[5] = obj3;
  return items;
};
