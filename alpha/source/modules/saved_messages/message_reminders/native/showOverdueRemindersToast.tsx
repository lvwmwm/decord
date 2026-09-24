// Module ID: 17988
// Function ID: 17989
// Name: showOverdueRemindersToast
// Dependencies: [11998, 8185, 8192, 4523, 4791, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17988 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11998 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8192).markRemindersSeen();
        const tmpResult2 = tmp(8192);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4791).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8192);
    }
    obj2 = SavedMessagesStore;
  }
};
