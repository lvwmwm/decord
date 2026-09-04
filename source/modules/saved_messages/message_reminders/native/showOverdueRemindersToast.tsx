// Module ID: 17399
// Function ID: 17400
// Name: showOverdueRemindersToast
// Dependencies: [11592, 7787, 7793, 4194, 4444, 1233, 2]
// Exports: showOverdueRemindersToast

// Module 17399 (showOverdueRemindersToast)
import dispatcherDefault from "dispatcher" /* 4194 */;
import ForLaterFreemiumConfig from "ForLaterFreemiumConfig" /* 7787 */;
import closure_3 from "getTimeSafe" /* 11592 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterFreemiumConfig;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(7793);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(7793);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = tmp(4444).ClockIcon;
        const intl = tmp(1233).intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(tmp(1233).t.yBmFPA, obj);
        dispatcherDefault.open(obj);
        const obj5 = dispatcherDefault;
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};
