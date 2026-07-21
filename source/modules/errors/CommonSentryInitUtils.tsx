// Module ID: 13004
// Function ID: 98973
// Name: IGNORE_ANALYTICS_BREADCRUMB_EVENTS
// Dependencies: []
// Exports: filterThrottle

// Module 13004 (IGNORE_ANALYTICS_BREADCRUMB_EVENTS)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/errors/CommonSentryInitUtils.tsx");

export const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = ["Array", "isArray", "message", "message", "Array", "isArray", "accessibilityRole", "accessible", "__initData", "Text", "filter", "paths", "Array"];
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
