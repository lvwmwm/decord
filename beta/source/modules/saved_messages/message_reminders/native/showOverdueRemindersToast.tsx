// Module ID: 17884
// Function ID: 17885
// Name: showOverdueRemindersToast
// Dependencies: [11911, 8098, 8105, 4454, 4718, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17884 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11911 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8105).markRemindersSeen();
        const tmpResult2 = tmp(8105);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4718).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8105);
    }
    obj2 = SavedMessagesStore;
  }
};
