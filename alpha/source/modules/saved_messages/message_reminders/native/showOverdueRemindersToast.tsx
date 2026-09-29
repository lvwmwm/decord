// Module ID: 17439
// Function ID: 17440
// Name: showOverdueRemindersToast
// Dependencies: [11324, 7440, 7451, 4528, 4795, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17439 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11324 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7451).markRemindersSeen();
        const tmpResult2 = tmp(7451);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4795).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7451);
    }
    obj2 = SavedMessagesStore;
  }
};
