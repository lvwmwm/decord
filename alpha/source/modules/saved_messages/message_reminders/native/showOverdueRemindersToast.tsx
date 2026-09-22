// Module ID: 17896
// Function ID: 17897
// Name: showOverdueRemindersToast
// Dependencies: [11915, 8101, 8108, 4455, 4719, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17896 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4455 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11915 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8108).markRemindersSeen();
        const tmpResult2 = tmp(8108);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4719).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8108);
    }
    obj2 = SavedMessagesStore;
  }
};
