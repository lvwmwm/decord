// Module ID: 16636
// Function ID: 16637
// Name: showOverdueRemindersToast
// Dependencies: [10319, 8419, 8425, 4062, 4308, 1236, 2]
// Exports: showOverdueRemindersToast

// Module 16636 (showOverdueRemindersToast)
import getTimeSafe from "getTimeSafe";

const require = arg1;
const result = require("getRemindersLastSeenAt").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = require(8419) /* ForLaterFreemiumConfig */;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(8425);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(8425);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = tmp(4308).ClockIcon;
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
