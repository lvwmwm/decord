// Module ID: 17216
// Function ID: 17217
// Name: showOverdueRemindersToast
// Dependencies: [11141, 7270, 7281, 4525, 4791, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17216 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4525 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11141 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7281).markRemindersSeen();
        const tmpResult2 = tmp(7281);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4791).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7281);
    }
    obj2 = SavedMessagesStore;
  }
};
