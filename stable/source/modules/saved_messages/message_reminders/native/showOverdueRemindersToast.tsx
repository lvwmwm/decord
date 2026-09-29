// Module ID: 17889
// Function ID: 17890
// Name: showOverdueRemindersToast
// Dependencies: [11940, 8130, 8137, 4486, 4750, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17889 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11940 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8137).markRemindersSeen();
        const tmpResult2 = tmp(8137);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4750).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8137);
    }
    obj2 = SavedMessagesStore;
  }
};
