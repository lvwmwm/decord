// Module ID: 16651
// Function ID: 16652
// Name: showOverdueRemindersToast
// Dependencies: [11113, 8445, 8451, 4062, 4306, 1236, 2]
// Exports: showOverdueRemindersToast

// Module 16651 (showOverdueRemindersToast)
import getTimeSafe from "getTimeSafe";

const require = arg1;
const result = require("getRemindersLastSeenAt").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = require(8445) /* ForLaterFreemiumConfig */;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(8451);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(8451);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = tmp(4306).ClockIcon;
        const intl = tmp(1236).intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(tmp(1236).t.yBmFPA, obj);
        importDefault(4062).open(obj);
        const obj5 = importDefault(4062);
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};
