// Module ID: 17479
// Function ID: 17480
// Name: showOverdueRemindersToast
// Dependencies: [11660, 7855, 7861, 4259, 4523, 1114, 2]
// Exports: showOverdueRemindersToast

// Module 17479 (showOverdueRemindersToast)
import dispatcherDefault from "dispatcher" /* 4259 */;
import ForLaterFreemiumConfig from "ForLaterFreemiumConfig" /* 7855 */;
import closure_3 from "getTimeSafe" /* 11660 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = ForLaterFreemiumConfig;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(7861);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(7861);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = tmp(4523).ClockIcon;
        const intl = tmp(1114).intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(tmp(1114).t.yBmFPA, obj);
        dispatcherDefault.open(obj);
        const obj5 = dispatcherDefault;
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};
