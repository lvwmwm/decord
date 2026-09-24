// Module ID: 17898
// Function ID: 17899
// Name: showOverdueRemindersToast
// Dependencies: [11818, 8135, 8142, 4490, 4752, 1119, 2]
// Exports: showOverdueRemindersToast

// Module 17898 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11818 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8142).markRemindersSeen();
        const tmpResult2 = tmp(8142);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4752).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1119).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1119).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8142);
    }
    obj2 = SavedMessagesStore;
  }
};
