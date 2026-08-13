// Module ID: 16647
// Function ID: 16648
// Name: showOverdueRemindersToast
// Dependencies: [11096, 8423, 8429, 4062, 4306, 1236, 2]
// Exports: showOverdueRemindersToast

// Module 16647 (showOverdueRemindersToast)
import getTimeSafe from "getTimeSafe";

const require = arg1;
const result = require("getRemindersLastSeenAt").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = require(8423) /* ForLaterFreemiumConfig */;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(8429);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(8429);
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
