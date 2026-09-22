// Module ID: 17594
// Function ID: 17595
// Name: showOverdueRemindersToast
// Dependencies: [11793, 7957, 7964, 4335, 4599, 1114, 2]
// Exports: showOverdueRemindersToast

// Module 17594 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11793 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7964).markRemindersSeen();
        const tmpResult2 = tmp(7964);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4599).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1114).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1114).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7964);
    }
    obj2 = SavedMessagesStore;
  }
};
