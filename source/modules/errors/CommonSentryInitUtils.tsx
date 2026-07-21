// Module ID: 13002
// Function ID: 98951
// Name: IGNORE_ANALYTICS_BREADCRUMB_EVENTS
// Dependencies: [284214097]
// Exports: filterThrottle

// Module 13002 (IGNORE_ANALYTICS_BREADCRUMB_EVENTS)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/errors/CommonSentryInitUtils.tsx");

export const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = [];
export const filterThrottle = function filterThrottle(arg0) {
  ({ maxBudgetMinute: closure_0, maxBudgetHour: closure_1 } = arg0);
  let closure_2 = { minute: { "Null": -536870861, "Null": -299892737 }, hour: { "Null": -536870861, "Null": -299892737 } };
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
