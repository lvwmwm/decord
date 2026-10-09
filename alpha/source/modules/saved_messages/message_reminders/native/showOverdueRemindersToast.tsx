// Module ID: 18108
// Function ID: 18109
// Name: showOverdueRemindersToast
// Dependencies: [9651, 12597, 4768, 5050, 1126, 2]
// Exports: showOverdueRemindersToast

// Module 18108 (showOverdueRemindersToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ClockIcon from "ClockIcon" /* 5050 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12597 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;
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
