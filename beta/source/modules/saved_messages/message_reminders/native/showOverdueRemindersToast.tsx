// Module ID: 17888
// Function ID: 17889
// Name: showOverdueRemindersToast
// Dependencies: [11782, 8103, 8110, 4458, 4720, 1119, 2]
// Exports: showOverdueRemindersToast

// Module 17888 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11782 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8110).markRemindersSeen();
        const tmpResult2 = tmp(8110);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4720).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1119).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1119).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8110);
    }
    obj2 = SavedMessagesStore;
  }
};
