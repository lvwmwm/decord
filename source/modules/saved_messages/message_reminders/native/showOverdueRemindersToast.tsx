// Module ID: 16697
// Function ID: 16698
// Name: showOverdueRemindersToast
// Dependencies: [10850, 8484, 8490, 4094, 4338, 1236, 2]
// Exports: showOverdueRemindersToast

// Module 16697 (showOverdueRemindersToast)
import getTimeSafe from "getTimeSafe";

const require = arg1;
const result = require("getRemindersLastSeenAt").fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let obj = require(8484) /* ForLaterFreemiumConfig */;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    overdueMessageReminderCount = overdueMessageReminderCount.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      let tmpResult = tmp(8490);
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmpResult = tmp(8490);
        tmpResult.markRemindersSeen();
        obj = { key: "overdue-message-reminders", IconComponent: null, content: null, position: "bottom", toastDurationMs: 5000 };
        obj[1] = tmp(4338).ClockIcon;
        const intl = tmp(1236).intl;
        obj = { count: null };
        obj[0] = overdueMessageReminderCount;
        obj[2] = intl.formatToPlainString(tmp(1236).t.yBmFPA, obj);
        importDefault(4094).open(obj);
        const obj5 = importDefault(4094);
      }
    }
    obj2 = overdueMessageReminderCount;
  }
};
