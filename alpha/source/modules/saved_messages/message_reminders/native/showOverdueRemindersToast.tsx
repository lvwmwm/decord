// Module ID: 17965
// Function ID: 17966
// Name: showOverdueRemindersToast
// Dependencies: [11991, 8183, 8190, 4521, 4789, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17965 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4521 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11991 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8190).markRemindersSeen();
        const tmpResult2 = tmp(8190);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4789).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8190);
    }
    obj2 = SavedMessagesStore;
  }
};
