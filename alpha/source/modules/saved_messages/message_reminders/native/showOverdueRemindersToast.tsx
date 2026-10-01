// Module ID: 17506
// Function ID: 17507
// Name: showOverdueRemindersToast
// Dependencies: [11368, 7449, 7460, 4557, 4804, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17506 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4557 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11368 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7460).markRemindersSeen();
        const tmpResult2 = tmp(7460);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4804).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7460);
    }
    obj2 = SavedMessagesStore;
  }
};
