// Module ID: 17474
// Function ID: 17475
// Name: showOverdueRemindersToast
// Dependencies: [11360, 7471, 7482, 4558, 4825, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17474 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4558 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11360 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7482).markRemindersSeen();
        const tmpResult2 = tmp(7482);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4825).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7482);
    }
    obj2 = SavedMessagesStore;
  }
};
