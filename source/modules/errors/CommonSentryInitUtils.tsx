// Module ID: 13011
// Function ID: 99006
// Name: IGNORE_ANALYTICS_BREADCRUMB_EVENTS
// Dependencies: []
// Exports: filterThrottle

// Module 13011 (IGNORE_ANALYTICS_BREADCRUMB_EVENTS)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/errors/CommonSentryInitUtils.tsx");

export const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = [-1526726280, 1358954882, 759252559, 1358954953, 541282754, 526778372, -918159356, -112132095, 526795118, -1907228668, false, false, false];
export const filterThrottle = function filterThrottle(arg0) {
  ({ maxBudgetMinute: closure_0, maxBudgetHour: closure_1 } = arg0);
  let closure_2 = { minute: {}, hour: {} };
  return () => {
    const timestamp = Date.now();
    const rounded = Math.round(timestamp / 1000 / 60);
    const rounded1 = Math.round(timestamp / 1000 / 60 / 60);
    if (closure_2.minute.slot !== rounded) {
      closure_2.minute.slot = rounded;
      closure_2.minute.budgetUsed = 0;
    }
    if (closure_2.hour.slot !== rounded1) {
      closure_2.hour.slot = rounded1;
      closure_2.hour.budgetUsed = 0;
    }
    let flag = closure_2.minute.budgetUsed < closure_0;
    if (flag) {
      const minute = closure_2.minute;
      minute.budgetUsed = minute.budgetUsed + 1;
      flag = closure_2.hour.budgetUsed < closure_1;
    }
    if (flag) {
      const hour = closure_2.hour;
      hour.budgetUsed = hour.budgetUsed + 1;
      flag = true;
    }
    return flag;
  };
};
