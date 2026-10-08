// Module ID: 17948
// Function ID: 17949
// Name: showOverdueRemindersToast
// Dependencies: [9632, 12657, 4766, 5049, 1126, 2]
// Exports: showOverdueRemindersToast

// Module 17948 (showOverdueRemindersToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ClockIcon from "ClockIcon" /* 5049 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12657 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9632 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let intl;
  let obj4;
  const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
  const obj = SavedMessagesStore;
  if (0 !== overdueMessageReminderCount) {
    const mostRecentOverdueDueAt = obj.getMostRecentOverdueDueAt();
    const obj2 = MessageRemindersSeenStorage;
    if (mostRecentOverdueDueAt > obj2.getRemindersLastSeenAt()) {
      const tmp3Result = MessageRemindersSeenStorage;
      tmp3Result.markRemindersSeen();
      const obj3 = { key: "overdue-message-reminders", IconComponent: ClockIcon.ClockIcon, content: intl.formatToPlainString(intl2.t.yBmFPA, obj4), position: "bottom", toastDurationMs: 5000 };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp3(1126).intl;
      obj4 = { count: overdueMessageReminderCount };
      open(obj3);
    }
  }
};
